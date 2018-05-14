package tww.beans;

public class Users {
    private final String description;
    private final String quantity;
    private final String grantWhen;

    public Users(String description, String quantity, String grantWhen) {
        this.description = description;
        this.quantity = quantity;
        this.grantWhen = grantWhen;
    }

    public String getDescription() {
        return description;
    }

    public String getQuantity() {
        return quantity;
    }

    public String getGrantWhen() {
        return grantWhen;
    }
}
