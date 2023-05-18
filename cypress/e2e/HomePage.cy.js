describe("Visit Home Page ", () => {

    it("The Home page has title", () => {
        cy.visit("https://www.freerangetesters.com/")
        cy.title().should("contain", "Free Range Testers")
    })

})