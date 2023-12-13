
import java.util.Scanner;

public class Q_2 {
    


    public static void main(String[] args) {

        Scanner cv = new Scanner(System.in);


        System.out.println("Enter Quentity of product");
        int quantity = cv.nextInt();

        int totalCost = quantity * 100;



        if (quantity > 1000) {

            int discount = (totalCost/100) * 10 ;

            int discountPrice = totalCost - discount;

            System.out.println("Discount price is " + discountPrice);
            
        }
        else{
            System.out.println("Total price is " +totalCost);


        }
        

       

    }
}
