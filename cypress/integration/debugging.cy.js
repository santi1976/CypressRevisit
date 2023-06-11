describe('Debugging', () => {
  it('Example of cy.pause in Login Page', () => { // cy.pause is used to debug')
    cy.visit('https://the-internet.herokuapp.com/login'); // Visit the Login Page
    cy.get('#username').type('tomsmith'); // Type the username and use pause
    cy.get('#password').debug().type('SuperSecretPassword!'); // Type the password
    cy.get('form').contains('Login').click(); // Click on Login button
    cy.url().should('include', '/secure'); // Verify that the URL contains /secure
    cy.get('#flash').should('contain', 'You logged into a secure area!');// Verify that the correct message is displayed
  });
});
