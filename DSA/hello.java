
import java.util.Scanner ;

public class hello {

    public static void main(String[] args) {

        Scanner rs  = new Scanner(System.in);

        System.out.println("Enter your money: ");

        
        // int - nextInt
        // String - next , nextLine
        // Float - nextFloat
        // Double - nextDouble
        
       float rupees = rs.nextFloat();

       System.out.println("Enter your Doublemoney: ");
       double doubleMoney = rs.nextDouble();


        System.out.println("This is surendra vala rupiya " + rupees);
        System.out.println("This is ankita vala payisa "+doubleMoney);

        // codervivek@ybl



       





       

    }
}