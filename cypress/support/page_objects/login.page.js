class LoginPage {
    /**
     * Gets the username input field.
     * @returns {Cypress.Chainable<HTMLElement>} The username input field.
     */
    static getUsernameInput() {
        return cy.get('input[data-test="username"]');
    }

    /**
     * Gets the password input field.
     * @returns {Cypress.Chainable<HTMLElement>} The password input field.
     */
    static getPasswordInput() {
        return cy.get('input[data-test="password"]');
    }

    /**
     * Gets the login button.
     * @returns {Cypress.Chainable<HTMLElement>} The login button.
     */
    static getLoginButton() {
        return cy.get('input[data-test="login-button"]');
    }

    /**
     * Logs out the user by clicking the "Open Menu" button and then the "Logout" link.
     */
    static logout() {
        cy.get('button').contains('Open Menu').click();
        cy.get('a[data-test="logout-sidebar-link"]').click();
    }

    /**
     * Logs in the user by typing the username and password, then clicking the login button.
     * @param {string} username - The username to type.
     * @param {string} password - The password to type.
     */
    static login(username, password) {
        this.getUsernameInput().type(username);
        this.getPasswordInput().type(password);
        this.getLoginButton().click();
    }
}

export default LoginPage;