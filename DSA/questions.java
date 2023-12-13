import java.util.Scanner;

public class questions {

    public static void main(String[] args) {

        Scanner cv = new Scanner(System.in);
        System.out.println("Enter lenght");
        float l = cv.nextFloat();

        System.out.println("Enter width");
        float b = cv.nextFloat();
        
        System.out.println("Enter angle -1 ");
        float a1 = cv.nextFloat();
        
        System.out.println("Enter angle -2 ");
        float a2 = cv.nextFloat();
        
        System.out.println("Enter angle -3 ");
        float a3 = cv.nextFloat();
        
        System.out.println("Enter angle -4 ");
        float a4 = cv.nextFloat();


        if (l == b) {
            if (a1 == a2 && a2 == a3 && a3== a4) {

                float sumOfAngles = a1 + a2+a3+a4;

                if (sumOfAngles == 360) {
                    System.out.println("Perfect Square");
                }
                else{
                    System.out.println("Sum of angles are not equal to 360");
                }
                
            }
            else{
                    System.out.println("Angles are not equal");
                }

        } else {
            System.out.println("Not square");
        }

    }
}
