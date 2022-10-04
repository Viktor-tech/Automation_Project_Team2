package stepDefinitions;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import pageObjects.*;

import java.util.Map;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.Assert.*;

public class WebShopPOSteps extends GeneralSteps {
    private WebShopHomePagePO webShopHomePagePO = new WebShopHomePagePO(driver);
    private WebShopLoginPagePO webShopLoginPagePO = new WebShopLoginPagePO(driver);
    private WebShopWishlistPagePO webShopWishlistPagePO = new WebShopWishlistPagePO(driver);


    @Before
    public void openBrowser() {
        driver.openBrowser();
    }

    @After
    public void closeBrowser() {
        driver.close();
    }


    @Given("^I am logged it to registered account$")
    public void iAmLoggedIntoRegisteredAccount() {
        driver.get(webShopLoginPagePO.getLoginPageUrl());
        webShopLoginPagePO.enterExistingUserLogin();
        webShopLoginPagePO.submitLoginBtn.click();
    }

    @And("^I navigate to homepage$")
    public void iNavigateToHomePage() {
        webShopHomePagePO.getHomePageUrl();

    }


    @And("^I click See all Desktops$")
    public void iClickSeeAllDesktops() {
        webShopHomePagePO.desktopsMenuBtn.click();
        webShopHomePagePO.seeAllDesktopsLink.click();
    }

    @When("^I add Apple Cinema product to wishlist$")
    public void iAddAppleCinemaItemToWishlist() {
        webShopHomePagePO.addFirstItemWishlistBtn.click();
    }

    @And("^I see success message for Apple Cinema$")
    public void iSeeSuccessMsgAppleCinema() {
        assertTrue(webShopHomePagePO.successMsg.isDisplayed());
        assertEquals("Success: You have added Apple Cinema 30\" to your wish list!\n×", webShopHomePagePO.successMsg.getText());
    }

    @And("^I open wishlist page$")
    public void iOpenWishlistPage() throws InterruptedException {
        webShopHomePagePO.wishlistPageLinkBtn.click();
        Thread.sleep(1000);
        assertEquals("http://www.demoshop24.com/index.php?route=account/wishlist", driver.getCurrentUrl());

    }

    @Then("^I see previously selected Apple Cinema product in wishlist$")
    public void iSeeAppleCinemaProductInWishlist() {
        assertTrue(webShopWishlistPagePO.appleCinemaItem.isDisplayed());
        webShopWishlistPagePO.removeFirstItemFromWishListBtn.click();
    }


    @Then("^I click remove Apple Cinema from wishlist$")
    public void iClickRemoveAppleCinemaWishlist() {
        webShopWishlistPagePO.removeFirstItemFromWishListBtn.click();
    }

    @And("^Apple Cinema is removed from wishlist$")
    public void iRemoveAppleCinemaFromWishlist() {
        assertFalse(webShopWishlistPagePO.checkAppleCinemaItemIsRemoved());
    }

    @And("^I see remove success message$")
    public void iSeeRemoveSuccessMsg() {
        assertTrue(webShopHomePagePO.successMsg.isDisplayed());
        assertEquals("Success: You have modified your wish list!\n" +
                "×", webShopHomePagePO.successMsg.getText());
    }

    @And("^I click move to cart button$")
    public void iClickMoveToCartFromWishlist() throws InterruptedException {
        webShopWishlistPagePO.moveToCartFirstItemFromWishListBtn.click();
        Thread.sleep(1000);
        webShopWishlistPagePO.removeFirstItemFromWishListBtn.click();
    }

    @And("^I navigate to shopping cart$")
    public void iNavigateToCartPage() {
        webShopHomePagePO.cartPageLinkBtn.click();
    }


    @And("^I click Cameras menu$")
    public void iClickCamerasMenu() {
        webShopHomePagePO.camerasMenuBtn.click();
    }

    @When("^I add Canon EOS product to wishlist$")
    public void iAddCanonItemToWishlist() {
        webShopHomePagePO.addSecondItemWishlistBtn.click();
    }

    @Then("^I see previously selected Canon EOS in wishlist$")
    public void iSeeCanonInWishlist() throws InterruptedException {
        assertTrue(webShopWishlistPagePO.canonItem.isDisplayed());
        Thread.sleep(1000);
        webShopWishlistPagePO.removeFirstItemFromWishListBtn.click();

    }

    @Then("^I see previously selected Canon EOS in cart$")
    public void iSeeMacBookInCart() {
        assertTrue(webShopWishlistPagePO.canonItem.isDisplayed());

    }

    @And("^I see success message for Canon EOS$")
    public void iSeeSuccessMsgCanonEOS() {
        assertTrue(webShopHomePagePO.successMsg.isDisplayed());
        assertEquals("Success: You have added Canon EOS 5D to your wish list!\n×", webShopHomePagePO.successMsg.getText());
    }

    @And("^I click Tablets menu$")
    public void iClickTabletsMenu() {
        webShopHomePagePO.tabletsMenuBtn.click();
    }

    @And("^I click add item to cart on PDP page$")
    public void iClickAddToCartPDPpage() {
        webShopHomePagePO.pDpAddToCartBtn.click();
    }

    @When("^I add Samsung Galaxy Tab product to wishlist$")
    public void iAddSamsungTabToWishlist() {
        webShopHomePagePO.addFirstItemWishlistBtn.click();
    }

    @And("^I see success message for Samsung Galaxy Tab$")
    public void iSeeSuccessMsgSamsungTab() throws InterruptedException {
        assertTrue(webShopHomePagePO.successMsg.isDisplayed());
        Thread.sleep(2000);
        assertEquals("Success: You have added Samsung Galaxy Tab 10.1 to your wish list!\n×", webShopHomePagePO.successMsg.getText());
    }

    @Then("^I see previously Galaxy Tab in wishlist$")
    public void iSeeGalaxyTabInWishlist() {
        assertTrue(webShopWishlistPagePO.samsungTabletItem.isDisplayed());
    }

    @Then("^I see out of stock message$")
    public void iSeeOutOfStockMsg() throws InterruptedException {

        Thread.sleep(2000);
        assertTrue(webShopHomePagePO.outOfStockMsg.isDisplayed());
        assertEquals("rgba(169, 68, 66, 1)", webShopHomePagePO.outOfStockMsg.getCssValue("color"));
        assertEquals("Products marked with *** are not available in the desired quantity or not in stock!\n" +
                "×", webShopHomePagePO.outOfStockMsg.getText());
    }

    @And("^I see product is marked with 3 red stars$")
    public void iSeeThreeStarsMarkForOutOfStock() {
        assertTrue(webShopHomePagePO.threeStarsMark.isEnabled());
        assertEquals("***", webShopHomePagePO.threeStarsMark.getText());
        assertEquals("rgba(169, 68, 66, 1)", webShopHomePagePO.threeStarsMark.getCssValue("color"));
        webShopHomePagePO.removeFirstItemCartPageBtn.click();

    }


}
