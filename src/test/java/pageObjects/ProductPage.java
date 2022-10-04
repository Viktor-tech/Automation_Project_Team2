package pageObjects;

import flowWorkers.WebDriverLib;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

import java.util.Objects;

import static org.junit.Assert.assertEquals;

public class ProductPage extends Page {

    @FindBy(how = How.XPATH, using = "//button[@data-original-title='Add to Wish List']")
    private WebElement wishListButtonOnProduct;

    @FindBy(how = How.CLASS_NAME, using = "alert-success")
    private WebElement addWishListAlertMessageOnProduct;

    public ProductPage(WebDriverLib driver) {
        super(driver);
        PageFactory.initElements(driver, this);
    }


    public void clickAddWishListButtonOnProduct() {
        wishListButtonOnProduct.click();
    }

    public void successMessageSamsungOnProduct() {
        String successMessageTextOnProduct = "Success: You have added Samsung Galaxy Tab 10.1 to your wish list!\n" +
                "×";
        assertEquals(successMessageTextOnProduct, addWishListAlertMessageOnProduct.getText());
    }
    public void successMessageIphoneOnProduct() {
        String successMessageTextOnProduct = "Success: You have added iPhone to your wish list!\n" +
                "×";
        assertEquals(successMessageTextOnProduct, addWishListAlertMessageOnProduct.getText());
    }

}
