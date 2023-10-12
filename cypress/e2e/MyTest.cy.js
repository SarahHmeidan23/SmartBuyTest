/// <reference types= "cypress" />
Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});
describe("TestCases", () => {
  it.skip("test the language", () => {
    cy.visit("https://smartbuy-me.com/smartbuystore/en/");
    cy.get(
      "#cboxLoadedContent > .content > :nth-child(3) > .close-popups"
    ).click();
    cy.get("html").should("have.attr", "lang", "en");
  });
  it.skip("test the login", () => {
    cy.visit("https://smartbuy-me.com/smartbuystore/en/");
    cy.get(
      "#cboxLoadedContent > .content > :nth-child(3) > .close-popups"
    ).click();
    cy.get(":nth-child(13) > .mobile-menu > .btn > .fal").click();
    cy.get(".userSign").click();
    cy.get(":nth-child(2) > #j_username").type("user.windows44@gmail.com");
    cy.get(":nth-child(3) > #j_password").type("Smart@22");
    cy.get(".row > :nth-child(3) > .btn").click();
  });
  it.skip("add items to the cart ", () => {
    cy.visit("https://smartbuy-me.com/smartbuystore/en/");
    cy.get(
      "#cboxLoadedContent > .content > :nth-child(3) > .close-popups"
    ).click();
    for (let i = 0; i < 6; i++) {
      cy.get(".btn.btnicon.js-enable-btn").eq(i).click({ force: true });
      cy.get("#addToCartLayer > .btn-default").click();
    }
  });
  it("test the price Lowest First", () => {
    cy.visit("https://smartbuy-me.com/smartbuystore/en/");
    cy.get(
      "#cboxLoadedContent > .content > :nth-child(3) > .close-popups"
    ).click();
    cy.get(":nth-child(13) > .mobile-menu > .btn").click();
    cy.get(":nth-child(9) > .yCmsComponent > a").click();
    cy.get(":nth-child(1) > figure > .category_grid_image").click();
    cy.get("#sortForm1 > .btn-group > .btn").click();
    cy.get('[data-original-index="5"] > a > .text').click();
    cy.get(".price")
      .first()
      .invoke("text")
      .then(parseInt)
      .then((myFirst) => {
        cy.get(".price")
          .eq(15)
          .invoke("text")
          .then(parseInt)
          .then((myele) => {
            expect(myFirst).to.be.lessThan(myele);
          });
      });
  });
});
