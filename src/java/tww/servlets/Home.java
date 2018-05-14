package tww.servlets;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@WebServlet(name = "Home", urlPatterns = {"/home"})
public class Home extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        HttpSession session = request.getSession(false);
        
        PrintWriter out = response.getWriter();
        
        request.getRequestDispatcher("/WEB-INF/header").include(request, response);
        
        if (session == null) {
            request.getRequestDispatcher("/WEB-INF/index.html").include(request, response);
            
        } else {
            request.getRequestDispatcher("/WEB-INF/menu.html").include(request, response);
            request.getRequestDispatcher("/WEB-INF/home.html").include(request, response);
            
        }
        
        request.getRequestDispatcher("/WEB-INF/footer.html").include(request, response);
    }
}
