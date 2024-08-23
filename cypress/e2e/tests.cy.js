/// <reference types="cypress" />

import LoginPage from '../support/page_objects/login.page';
import InventoryPage from '../support/page_objects/inventory.page';
import CartPage from '../support/page_objects/cart.page';
import CheckoutPage from '../support/page_objects/checkout.page';
import checkoutInfo from '../fixtures/checkoutInfo.json';

describe('Tests', () => {

  beforeEach(() => {
    cy.visit('/');

    // Verify that the login page is accessed
    LoginPage.getLoginButton().should('be.visible');

    // Log in using the variables in the .env file
    LoginPage.login(Cypress.env('username'), Cypress.env('password'));

    // Verify that the inventory page as accessed
    cy.url().should('contain', 'inventory');
  });

  it('[CH-001] Login', () => {
    // Verify that the log in was successfully made (by asserting that the inventory page was accessed)
    cy.url().should('contain', 'inventory');
  });

  it('[CH-002] Log Out', () => {
    // Log out 
    LoginPage.logout();

    // Verify that the logout was properly made (by asserting that the login page is accessed)
    LoginPage.getLoginButton().should('be.visible');
  });

  it('[CH-003] Add an item to Cart - From Inventory', () => {
    // Get a random item from the cart and use this item for the rest of the test
    InventoryPage.getRandomItemFromInventory().invoke('text').then((text) => {
      // Add the selected item to the cart
      InventoryPage.addItemToTheCart(text);

      // Verifiy that the selected item was added to the cart
      //    Verify that the "Add to cart" button of the selected item switched to "Remove"
      InventoryPage.getRemoveItemButon(text).should('be.visible');
      //    Go to the cart and verify that the selected item was added there
      InventoryPage.clickCart();
      cy.url().should('contain', 'cart');
      CartPage.getSpecificItemFromTheCart(text).should('be.visible');
    });
  });

  it('[CH-004] Add an item to Cart - From Details Page', () => {
    // Get a random item from the cart and use this item for the rest of the test
    InventoryPage.getRandomItemFromInventory().invoke('text').then((text) => {
      // Go to the details page of the selected item
      InventoryPage.getItemFromInventory(text).click();
      // Verify that the details page was accessed 
      cy.url().should('contain', 'inventory-item');

      // Add the selected item to the cart
      InventoryPage.getAddItemToTheCartFromDetailsButton().click();

      // Verifiy that the selected item was added to the cart
      //    Verify that the "Add to cart" button of the selected item switched to "Remove"
      InventoryPage.getRemoveItemFromDetailsButton().should('be.visible');
      //    Go to the cart and verify that the selected item was added there
      InventoryPage.clickCart();
      cy.url().should('contain', 'cart');
      CartPage.getSpecificItemFromTheCart(text).should('be.visible');
    });
  });

  it('[CH-005] Remove an item from the Cart - From Cart', () => {
    // Get a random item from the cart and use this item for the rest of the test
    InventoryPage.getRandomItemFromInventory().invoke('text').then((text) => {
      // Add the selected item to the cart
      InventoryPage.addItemToTheCart(text);

      // Verifiy that the selected item was added to the cart
      //    Verify that the "Add to cart" button of the selected item switched to "Remove"
      InventoryPage.getRemoveItemButon(text).should('be.visible');
      //    Go to the cart and verify that the selected item was added there
      InventoryPage.clickCart();
      cy.url().should('contain', 'cart');
      CartPage.getSpecificItemFromTheCart(text).should('be.visible');

      // Remove the selected item from the cart
      CartPage.removeSpecificItemFromTheCart(text);

      // Verify that the selected item was removed from the cart
      CartPage.getSpecificItemFromTheCart(text).should('have.length', 0);
    });
  });

  it('[CH-006] Remove an item from the Cart - From Inventory', () => {
    // Get a random item from the cart and use this item for the rest of the test
    InventoryPage.getRandomItemFromInventory().invoke('text').then((text) => {
      // Add the selected item to the cart
      InventoryPage.addItemToTheCart(text);

      // Verifiy that the selected item was added to the cart
      //    Verify that the "Add to cart" button of the selected item switched to "Remove"
      InventoryPage.getRemoveItemButon(text).should('be.visible');
      //    Go to the cart and verify that the selected item was added there
      InventoryPage.clickCart();
      cy.url().should('contain', 'cart');
      CartPage.getSpecificItemFromTheCart(text).should('be.visible');

      // Go back to inventory
      CartPage.getContinueShoppingButton().click();
      cy.url().should('contain', 'inventory');

      // Remove the selected item from the cart from inventory (by clicking the remove button in the card)
      InventoryPage.getRemoveItemButon(text).click();

      // Go to the cart and verify that the selected item was removed from there
      InventoryPage.clickCart();
      cy.url().should('contain', 'cart');
      CartPage.getSpecificItemFromTheCart(text).should('have.length', 0);
    });
  });

  it('[CH-007] Remove an item from the Cart - From Details Page', () => {
    // Get a random item from the cart and use this item for the rest of the test
    InventoryPage.getRandomItemFromInventory().invoke('text').then((text) => {
      // Go to the details page of the selected item
      InventoryPage.getItemFromInventory(text).click();
      // Verify that the details page was accessed 
      cy.url().should('contain', 'inventory-item');

      // Add the selected item to the cart
      InventoryPage.getAddItemToTheCartFromDetailsButton().click();

      // Verifiy that the selected item was added to the cart
      //    Verify that the "Add to cart" button of the selected item switched to "Remove"
      InventoryPage.getRemoveItemFromDetailsButton().should('be.visible');
      //    Go to the cart and verify that the selected item was added there
      InventoryPage.clickCart();
      cy.url().should('contain', 'cart');
      CartPage.getSpecificItemFromTheCart(text).should('be.visible');

      // Go back to inventory
      CartPage.getContinueShoppingButton().click();
      cy.url().should('contain', 'inventory');

      // Go to the details page of the selected item
      InventoryPage.getItemFromInventory(text).click();

      // Remove the selected item from the cart from the details page (by clicking the remove button in the details page)
      InventoryPage.getRemoveItemFromDetailsButton().click();

      // Go to the cart and verify that the selected item was removed from there
      InventoryPage.clickCart();
      cy.url().should('contain', 'cart');
      CartPage.getSpecificItemFromTheCart(text).should('have.length', 0);
    });
  });

  it('[CH-008] Checkout an item in the Cart', () => {
    // Get a random item from the cart and use this item for the rest of the test
    InventoryPage.getRandomItemFromInventory().invoke('text').then((text) => {
      // Add the selected item to the cart
      InventoryPage.addItemToTheCart(text);

      // Verifiy that the selected item was added to the cart
      //    Verify that the "Add to cart" button of the selected item switched to "Remove"
      InventoryPage.getRemoveItemButon(text).should('be.visible');
      //    Go to the cart and verify that the selected item was added there
      InventoryPage.clickCart();
      cy.url().should('contain', 'cart');
      CartPage.getSpecificItemFromTheCart(text).should('be.visible');

      // Click the checkout button
      CartPage.getCheckoutButton().click();
      cy.url().should('contain', 'checkout-step-one');

      // Fill the Customer Information (taken from the data/checkoutInfo.json file)
      CheckoutPage.fillInformation(checkoutInfo.firstName, checkoutInfo.lastName, checkoutInfo.postalCode);

      // Click the continue button
      CheckoutPage.getContinueButton().click();
      cy.url().should('contain', 'checkout-step-two');

      // Verify that the item added in the cart is the one to be checked-out
      CartPage.getSpecificItemFromTheCart(text).should('be.visible');
    });

    // Click the Finish Button
    CheckoutPage.getFinishButton().click();
    // Verify the success screen is shown
    CheckoutPage.getCheckoutCompleteContainer().should('be.visible');
  });
});
