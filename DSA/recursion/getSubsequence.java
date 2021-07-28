import java.io.*;
import java.util.*;

public class Main {

    public static void main(String[] args) throws Exception {
        
        Scanner s = new Scanner(System.in);
        String str = s.nextLine();
        
        System.out.println(gss(str));

    }

    public static ArrayList<String> gss(String str) {
        
        if(str.length()==0){
            ArrayList<String> base  = new ArrayList<>();
            base.add("");
            return base;
        }
        
        
        char ch = str.charAt(0); ///answers returned from base case of each call, stored on the way back from base case ..... keeps getting stored from each base case then returns to main call then prints ...
        
        String rem = str.substring(1);
        
        ArrayList<String> rr = gss(rem);
        ArrayList<String> res = new ArrayList<>();
        
        for(int i=0;i<rr.size();i++){
            res.add(rr.get(i));
        }
        
        for(int i=0;i<rr.size();i++){
            res.add(ch+rr.get(i));
        }
        
        
        return res;
        
    }

}
