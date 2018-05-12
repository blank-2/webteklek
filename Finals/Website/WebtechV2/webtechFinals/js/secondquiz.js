(function() {
  const myQuestions = [
    {
      question: "1. Used as an additional input to a one-way function that hashes data or password",
      answers: {
        a: "Salt",
        b: "Sugar",
        c: "Hash"
      },
      correctAnswer: "a"
    },
   {
      question: "2. Occurs when untrusted data is sent to an interpreter as part of a command or query",
      answers: {
        a: "Security Misconfiguration",
        b: "Injection",
        c: "Broken authentication"
      },
      correctAnswer: "b"
    },
     {
      question: "3. can be used to disclose internal files, remote code execution or DDoS attacks",
      answers: {
        a: "Cross Site Scripting",
        b: "Broken Access Control",
        c: "XML External Entities",
   },
      correctAnswer: "c"
    },
     
     {
      question: "4. Does the language evaluate if there are errors by means of checking the types of variables",
      answers: {
        a: "Yes",
        b: "No",
        c: "I Don't Know",
   },
      correctAnswer: "a"
    },

   {
      question: "5. What is the package manager for the Node JavaScript Platform",
      answers: {
        a: "nrm",
        b: "npm",
        c: "npm install",
   },
      correctAnswer: "b"
    },

 {
      question: "6. What does PHP stands for",
      answers: {
        a: "hypermark preprocessor",
        b: "hyperlink preprocessor",
        c: "hypertext preprocessor",
   },
      correctAnswer: "c"
    },

 {
      question: "7. When creating a variable in PHP you use the variable",
      answers: {
        a: "@",
        b: "$",
        c: "%",
   },
      correctAnswer: "b"
    },

 {
      question: "8. PHP is an open source scripting language and the scripts are executed on the client",
      answers: {
        a: "true",
        b: "false",
        c: "I don't know",
   },
      correctAnswer: "b"
    },


 {
      question: "9. HTTP request method that only sends or update data from the server and is the safest HTTP request method",
      answers: {
        a: "Post()Method",
        b: "Get() Method",
        c: "Service() Method",
   },
      correctAnswer: "a"
    },

 {
      question: "10. An HTTP method where the data being requested is seen into the URL of the website.",
      answers: {
        a: "Post()Method",
        b: "Get() Method",
        c: "Service() Method",
   },
      correctAnswer: "b"
    }



  ];

  function buildQuiz() {
    
    const output = [];

   
    myQuestions.forEach((currentQuestion, questionNumber) => {
      const answers = [];

      
      for (letter in currentQuestion.answers) {
         answers.push(
          `<label>
             <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
           </label>`
        );
      }
      output.push(
        `<div class="slide">
           <div class="question"> ${currentQuestion.question} </div>
           <div class="answers"> ${answers.join("")} </div>
         </div>`
      );
    });

    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    const answerContainers = quizContainer.querySelectorAll(".answers");
    let numCorrect = 0;
    myQuestions.forEach((currentQuestion, questionNumber) => {
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;
      if (userAnswer === currentQuestion.correctAnswer) {
        numCorrect++;
        answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        answerContainers[questionNumber].style.color = "red";
      }
    });
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;
    
    if (currentSlide === 0) {
      previousButton.style.display = "none";
    } else {
      previousButton.style.display = "inline-block";
    }
    
    if (currentSlide === slides.length - 1) {
      nextButton.style.display = "none";
      submitButton.style.display = "inline-block";
    } else {
      nextButton.style.display = "inline-block";
      submitButton.style.display = "none";
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");

  // display quiz right away
  buildQuiz();

  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  showSlide(0);

  // on submit, show results
  submitButton.addEventListener("click", showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();