package tww.servlets;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@WebServlet(name = "firstQuiz", urlPatterns = {"/firstQuiz"})
public class FirstQuiz extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        HttpSession session = request.getSession(false);
        
        PrintWriter out = response.getWriter();
        
        
        if (session == null) {
            session = request.getSession(true);
            request.getRequestDispatcher("/WEB-INF/index.html").include(request, response);
        } else {
            request.getRequestDispatcher("/quiz.html").include(request, response);
        }
        
    }
}
