package tww.servlets;
import java.sql.*;

public class LoginDao
 {
     public static boolean checkUser(String name,String pass) 
     {
      boolean st =false;
      try{

	 //loading drivers for mysql
         Class.forName("com.mysql.jdbc.Driver");

 	 //creating connection with the database 
         Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/client","root","");
         PreparedStatement ps =con.prepareStatement("select * from client.users where username=? and password=?");
         ps.setString(1, name);
         ps.setString(2, pass);
         ResultSet rs =ps.executeQuery();
         st = rs.next();
        
      }catch(Exception e)
      {
          e.printStackTrace();
      }
         return st;                 
  }   
}