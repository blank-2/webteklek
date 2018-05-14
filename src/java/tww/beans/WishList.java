package tww.beans;

import java.util.ArrayList;

public class WishList {
    private ArrayList<Users> wishList = null;

    public WishList() {
        wishList = new ArrayList<>();
    }

    public ArrayList<Users> getWishList() {
        return wishList;
    }
    
    public void addWish(Users wish) {
        wishList.add(wish);
    }
    
    public void removeWish(int wishIndex) {
        wishList.remove(wishIndex);
    }
    
    public int getWishCount() {
        return wishList.size();
    }
}
