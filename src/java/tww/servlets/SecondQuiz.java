/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package tww.servlets;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 *
 * @author Lenovo
 */
@WebServlet(name = "secondQuiz", urlPatterns = {"/secondQuiz"})
public class SecondQuiz extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        HttpSession session = request.getSession(false);
        
        PrintWriter out = response.getWriter();
        
        
        if (session == null) {
            session = request.getSession(true);
            request.getRequestDispatcher("/WEB-INF/index.html").include(request, response);
        } else {
            request.getRequestDispatcher("/quiz2.html").include(request, response);
        }
        
    }
}
