
/// <reference types="cypress" />

context("Buy new iPad for Peyton", () => {
  beforeEach(() => {
    cy.visit("https://www.apple.com/my/");
  });

  it("displays Apple Malaysia landing page", () => {
    cy.get("div.globalnav-content").should("be.visible");
  });

  it("pick iPad Pro for purchase", () => {
    cy.get("a.globalnav-link-ipad").click();

    cy.get("li.chapternav-item-ipad-pro a").click();

    cy.get("div.ac-ln-actions a").click();
  })

  it("select model,colors, storage and connectivity", () => {
    cy.get('data-autom="pricedimensionScreensize11inch"').click();

    cy.get('data-autom="dimensionColorspace_gray"').click();

    cy.get('[data-autom="pricedimensionCapacity1tb"]').click();

    cy.get('[data-autom="pricedimensionConnectionwifi"]').click();
  });

  it("add engraving on iPad", () => {
    cy.get('[data-autom="addEngraving-app"]').click();

    const engravingCss = cy.get('[data-autom="engraving-overlay-header"]');

    engravingCss.should("have.text", "Personalize your iPad Pro.");
    engravingCss
      .get('[data-autom="Engraveline1"]')
      .type("Peyton")
      .get('[data-autom="engraving-save"]')
      .click();
  });

  it("add accessories to purchase", () => {
    cy.get('[data-autom="acc_pencil_section_noaccessory"]').click();

    cy.get('[data-autom="acc_keyboard_11inch_section_noaccessory"]').click();

    cy.get("#applecare_add_applecare_open").click();

    cy.get("#applecare_overlay-labelledby")
      .should("have.text", "AppleCare Protection Plan")
      .get('[data-autom="inlineapplecare_overlay_add"]')
      .click();
  });

  it("add to bag -kaching!", () => {
    cy.get('[data-autom="add-to-cart"]').click();
  })

  it("review order",() => {
    cy.get('[data-autom="summaryHeaderTitle"]')
    .should('have.text', '11-inch iPad Pro Wi-Fi + Cellular 1TB - Space Gray');
  })

});
