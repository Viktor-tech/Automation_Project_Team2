$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AddItemToWishList.feature");
formatter.feature({
  "line": 2,
  "name": "User adds 1 or more items to the wishlist and sees them in the wishlist",
  "description": "",
  "id": "user-adds-1-or-more-items-to-the-wishlist-and-sees-them-in-the-wishlist",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Team2"
    }
  ]
});
formatter.before({
  "duration": 4095433500,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User adds 1 item to wishlist",
  "description": "",
  "id": "user-adds-1-or-more-items-to-the-wishlist-and-sees-them-in-the-wishlist;user-adds-1-item-to-wishlist",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am logged it to registered account",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I navigate to homepage",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click See all Desktops",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I add Apple Cinema product to wishlist",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I see success message for Apple Cinema",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I open wishlist page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I see previously selected Apple Cinema product in wishlist",
  "keyword": "Then "
});
formatter.match({
  "location": "WebShopPOSteps.iAmLoggedIntoRegisteredAccount()"
});
formatter.result({
  "duration": 16086217100,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\u0027input-email\u0027]\"}\n  (Session info: chrome\u003d105.0.5195.127)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.7.0\u0027, revision: \u00272321c73\u0027, time: \u00272017-11-02T22:22:35.584Z\u0027\nSystem info: host: \u0027LVAGPLTP4214\u0027, ip: \u002710.122.81.132\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_342\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 105.0.5195.127, chrome: {chromedriverVersion: 105.0.5195.52 (412c95e51883..., userDataDir: C:\\Users\\VIKTOR~1.LIC\\AppDa...}, goog:chromeOptions: {debuggerAddress: localhost:51515}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 6afc42ae610c6d53c6d9dc11007375e9\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\u0027input-email\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:600)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:370)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:472)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:362)\r\n\tat flowWorkers.WebDriverLib.findElement(WebDriverLib.java:132)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.sendKeys(Unknown Source)\r\n\tat pageObjects.WebShopLoginPagePO.enterExistingUserLogin(WebShopLoginPagePO.java:45)\r\n\tat stepDefinitions.WebShopPOSteps.iAmLoggedIntoRegisteredAccount(WebShopPOSteps.java:37)\r\n\tat ✽.Given I am logged it to registered account(AddItemToWishList.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "WebShopPOSteps.iNavigateToHomePage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WebShopPOSteps.iClickSeeAllDesktops()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WebShopPOSteps.iAddAppleCinemaItemToWishlist()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WebShopPOSteps.iSeeSuccessMsgAppleCinema()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WebShopPOSteps.iOpenWishlistPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WebShopPOSteps.iSeeAppleCinemaProductInWishlist()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 177208000,
  "status": "passed"
});
formatter.uri("AddItemToWishListAndThenToCart.feature");
formatter.feature({
  "line": 2,
  "name": "User adds 1 or more items to the wishlist and then adds them to cart",
  "description": "",
  "id": "user-adds-1-or-more-items-to-the-wishlist-and-then-adds-them-to-cart",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Team2"
    }
  ]
});
formatter.before({
  "duration": 2424570300,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User adds 1 item to wishlist and from wishlist to cart",
  "description": "",
  "id": "user-adds-1-or-more-items-to-the-wishlist-and-then-adds-them-to-cart;user-adds-1-item-to-wishlist-and-from-wishlist-to-cart",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am logged it to registered account",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I navigate to homepage",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click Cameras menu",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I add Canon EOS product to wishlist",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I see success message for Canon EOS",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I open wishlist page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I see previously selected Canon EOS in wishlist",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 12,
      "value": "# below is bug, should not be redirected to PDP page, move to cart button must send item to cart"
    }
  ],
  "line": 13,
  "name": "I click move to cart button",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 14,
      "value": "# bug, impossible to add Canon EOS to cart"
    }
  ],
  "line": 15,
  "name": "I click add item to cart on PDP page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I navigate to shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I see previously selected Canon EOS in cart",
  "keyword": "Then "
});
formatter.match({
  "location": "WebShopPOSteps.iAmLoggedIntoRegisteredAccount()"
});
formatter.result({
  "duration": 15725403800,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\u0027input-email\u0027]\"}\n  (Session info: chrome\u003d105.0.5195.127)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.7.0\u0027, revision: \u00272321c73\u0027, time: \u00272017-11-02T22:22:35.584Z\u0027\nSystem info: host: \u0027LVAGPLTP4214\u0027, ip: \u002710.122.81.132\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_342\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 105.0.5195.127, chrome: {chromedriverVersion: 105.0.5195.52 (412c95e51883..., userDataDir: C:\\Users\\VIKTOR~1.LIC\\AppDa...}, goog:chromeOptions: {debuggerAddress: localhost:51620}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 596a626c95e007a8a672d794e6898a10\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\u0027input-email\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:600)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:370)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:472)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:362)\r\n\tat flowWorkers.WebDriverLib.findElement(WebDriverLib.java:132)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.sendKeys(Unknown Source)\r\n\tat pageObjects.WebShopLoginPagePO.enterExistingUserLogin(WebShopLoginPagePO.java:45)\r\n\tat stepDefinitions.WebShopPOSteps.iAmLoggedIntoRegisteredAccount(WebShopPOSteps.java:37)\r\n\tat ✽.Given I am logged it to registered account(AddItemToWishListAndThenToCart.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "WebShopPOSteps.iNavigateToHomePage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WebShopPOSteps.iClickCamerasMenu()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WebShopPOSteps.iAddCanonItemToWishlist()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WebShopPOSteps.iSeeSuccessMsgCanonEOS()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WebShopPOSteps.iOpenWishlistPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WebShopPOSteps.iSeeCanonInWishlist()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WebShopPOSteps.iClickMoveToCartFromWishlist()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WebShopPOSteps.iClickAddToCartPDPpage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WebShopPOSteps.iNavigateToCartPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WebShopPOSteps.iSeeMacBookInCart()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 191865500,
  "status": "passed"
});
formatter.uri("DemoShop24.feature");
formatter.feature({
  "line": 2,
  "name": "DemoShop24 feature",
  "description": "",
  "id": "demoshop24-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Team2A"
    }
  ]
});
formatter.before({
  "duration": 2084716300,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I am on Account login webpage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I am logged in to registered account",
  "keyword": "Then "
});
formatter.match({
  "location": "DemoShopSteps.iAmOnMainWebpage()"
});
formatter.result({
  "duration": 5839412000,
  "status": "passed"
});
formatter.match({
  "location": "DemoShopSteps.iAmLoggedIntoRegisteredAccount()"
});
formatter.result({
  "duration": 13112000900,
  "error_message": "java.lang.NullPointerException\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy18.sendKeys(Unknown Source)\r\n\tat pageObjects.ShopPage.enterExistingUserLogin(ShopPage.java:71)\r\n\tat stepDefinitions.DemoShopSteps.iAmLoggedIntoRegisteredAccount(DemoShopSteps.java:39)\r\n\tat ✽.Then I am logged in to registered account(DemoShop24.feature:6)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 8,
  "name": "Item count and prices should be displayed correctly on shopping cart button / link",
  "description": "",
  "id": "demoshop24-feature;item-count-and-prices-should-be-displayed-correctly-on-shopping-cart-button-/-link",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "Choose the product \"iPhone\"",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "Add the product to cart",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "View the shopping cart",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "iPhone",
      "offset": 20
    }
  ],
  "location": "DemoShopSteps.chooseFirstProduct(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DemoShopSteps.addTheProductToCart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DemoShopSteps.viewTheShoppingCart()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 2340622800,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d105.0.5195.127)\nBuild info: version: \u00273.7.0\u0027, revision: \u00272321c73\u0027, time: \u00272017-11-02T22:22:35.584Z\u0027\nSystem info: host: \u0027LVAGPLTP4214\u0027, ip: \u002710.122.81.132\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_342\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 105.0.5195.127, chrome: {chromedriverVersion: 105.0.5195.52 (412c95e51883..., userDataDir: C:\\Users\\VIKTOR~1.LIC\\AppDa...}, goog:chromeOptions: {debuggerAddress: localhost:51708}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 1532d5dabe0a9ec3be3763687e5bafb4\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:600)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:657)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.close(RemoteWebDriver.java:486)\r\n\tat flowWorkers.WebDriverLib.close(WebDriverLib.java:172)\r\n\tat stepDefinitions.WebShopPOSteps.closeBrowser(WebShopPOSteps.java:30)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
formatter.before({
  "duration": 2241252300,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I am on Account login webpage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I am logged in to registered account",
  "keyword": "Then "
});
formatter.match({
  "location": "DemoShopSteps.iAmOnMainWebpage()"
});
