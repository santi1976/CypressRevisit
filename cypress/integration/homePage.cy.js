describe('Visit Home Page and navigates to Cursos ', () => {
  it('The Home page navigates to Cursors', () => {
    cy.visit('https://www.freerangetesters.com/');
    cy.get('#comp-l02x1m8d2 > .ppRL_Y > .cYOPqd > div').click(); // Click on Cursos
  });

  it('Closes the modal', () => {
    cy.get('div[title="Volver al sitio"]', { timeout: 20000 })
      .should('exist')
      .click();
  });

  it('Verifies that there are exactly 8 links to Courses', () => {
    cy.get('[data-testid="linkElement"] > .M3I7Z2').filter((index, el) => {
      const text = Cypress.$(el).text().trim();
      return text.toLowerCase() === 'ver curso';
    }).should('have.length', 8);
  });
});
