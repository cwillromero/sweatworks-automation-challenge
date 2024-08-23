class InventoryPage {
    /**
     * Selects a random item from the inventory.
     * @returns {Cypress.Chainable<HTMLElement>} The randomly selected inventory item.
     */
    static getRandomItemFromInventory() {
        return cy.get('div[data-test="inventory-item-name"]')
            .its('length')
            .then((length) => {
                // generate a random index
                const randomIndex = Cypress._.random(0, length - 1);
                // get the element at the random index
                cy.get('div[data-test="inventory-item-name"]',).eq(randomIndex);
            });
    }

    /**
     * Gets a specific item from the inventory based on its name.
     * @param {string} item - The name of the item to find.
     * @returns {Cypress.Chainable<HTMLElement>} The inventory item with the specified name.
     */
    static getItemFromInventory(item) {
        return cy.contains('div[data-test="inventory-item-name"]', item);
    }

    /**
     * Adds a specific item to the cart based on its name.
     * @param {string} item - The name of the item to add to the cart.
     */
    static addItemToTheCart(item) {
        cy.contains('.inventory_item_name', item) // locate the item by its name
            .parents('.inventory_item_description')
            .find('button[data-test^="add-to-"]')
            .click();
    }

    /**
     * Gets the "Remove" button for a specific item based on its name.
     * @param {string} item - The name of the item to remove.
     * @returns {Cypress.Chainable<HTMLElement>} The "Remove" button for the specified item.
     */
    static getRemoveItemButon(item) {
        return cy.contains('.inventory_item_name', item)
            .parents('.inventory_item_description')
            .find('button[data-test^="remove-"]');
    }

    /**
     * Clicks the shopping cart link to view the cart.
     */
    static clickCart() {
        cy.get('a[data-test="shopping-cart-link"]').click();
    }

    /* ---------- inventory-item ---------- */

    /**
     * Gets the "Add to Cart" button from the item details page.
     * @returns {Cypress.Chainable<HTMLElement>} The "Add to Cart" button.
     */
    static getAddItemToTheCartFromDetailsButton() {
        return cy.get('button[data-test="add-to-cart"]');
    }

    /**
     * Gets the "Remove" button from the item details page.
     * @returns {Cypress.Chainable<HTMLElement>} The "Remove" button.
     */
    static getRemoveItemFromDetailsButton() {
        return cy.get('button[data-test="remove"]');
    }

}

export default InventoryPage;