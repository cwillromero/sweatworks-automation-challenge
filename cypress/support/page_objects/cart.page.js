class CartPage {
     /**
     * Gets a specific item from the cart based on its name.
     * @param {string} item - The name of the item to find.
     * @returns {Cypress.Chainable<HTMLElement>} The cart item with the specified name.
     */
    static getSpecificItemFromTheCart(item) {
        return cy.contains('.inventory_item_name', item);
    }

    /**
     * Removes a specific item from the cart based on its name.
     * @param {string} item - The name of the item to remove.
     * @returns {Cypress.Chainable<HTMLElement>} The "Remove" button for the specified item.
     */
    static removeSpecificItemFromTheCart(item) {
        return cy.contains('.inventory_item_name', item)
            .parents('.cart_item')
            .find('button[data-test^="remove-"]').click();
    }

    /**
     * Gets the checkout button.
     * @returns {Cypress.Chainable<HTMLElement>} The checkout button.
     */
    static getCheckoutButton(){
        return cy.get('button[data-test="checkout"]');
    }

    /**
     * Gets the continue shopping button.
     * @returns {Cypress.Chainable<HTMLElement>} The continue shopping button.
     */
    static getContinueShoppingButton(){
        return cy.get('button[data-test="continue-shopping"]');
    }
}

export default CartPage;