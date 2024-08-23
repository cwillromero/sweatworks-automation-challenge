class CheckoutPage {
    /* ---------- Checkout: Your Information ---------- */

    /**
     * Gets the first name input field.
     * @returns {Cypress.Chainable<HTMLElement>} The first name input field.
     */
    static getFirstNameInput() {
        return cy.get('input[data-test="firstName"]');
    }

    /**
     * Gets the last name input field.
     * @returns {Cypress.Chainable<HTMLElement>} The last name input field.
     */
    static getLastNameInput() {
        return cy.get('input[data-test="lastName"]');
    }

    /**
     * Gets the postal code input field.
     * @returns {Cypress.Chainable<HTMLElement>} The postal code input field.
     */
    static getPostalCodeInput() {
        return cy.get('input[data-test="postalCode"]');
    }

    /**
     * Fills in the checkout information with the provided first name, last name, and postal code.
     * @param {string} firstName - The first name to type.
     * @param {string} lastName - The last name to type.
     * @param {string} postalCode - The postal code to type.
     */
    static fillInformation(firstName, lastName, postalCode) {
        this.getFirstNameInput().type(firstName);
        this.getLastNameInput().type(lastName);
        this.getPostalCodeInput().type(postalCode);
    }

    /**
     * Gets the continue button on the checkout information page.
     * @returns {Cypress.Chainable<HTMLElement>} The continue button.
     */
    static getContinueButton() {
        return cy.get('input[data-test="continue"]');
    }

    /* ---------- Checkout: Overview ---------- */

    /**
     * Gets the finish button on the checkout overview page.
     * @returns {Cypress.Chainable<HTMLElement>} The finish button.
     */
    static getFinishButton() {
        return cy.get('button[data-test="finish"]');
    }

    /**
     * Gets the container that indicates checkout completion.
     * @returns {Cypress.Chainable<HTMLElement>} The checkout complete container.
     */
    static getCheckoutCompleteContainer() {
        return cy.get('div[data-test="checkout-complete-container"]');
    }
}

export default CheckoutPage;