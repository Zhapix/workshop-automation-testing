

// CYPRESS COMMANDS
Cypress.Commands.add('getIframeBody', (iframeSelector) => {
  return cy
    .get(iframeSelector)
    .its('0.contentDocument.body')
    .should('not.be.empty')
    .then(cy.wrap);
});

// START TEST CASES

describe('Automation Testing for Expert Serice Manager', () => {

  beforeEach('Global Initialization', () => {

    cy.visit('https://esmtest.zohocreatorportal.in/')
    // cy.clearCookies();

    // To Authenticate through login
    try {
      cy.getCookies().then((cookies) => {
        let isValidLogin = cookies && cookies.length > 0 && cookies.some((cookie) => cookie.name == "_z_identity");
        if (!isValidLogin) {
          let iframeBdy = cy.getIframeBody('iframe#signInIframe');
          iframeBdy.find("#login_id").type('test1@intern.zhapix.com');
          cy.getIframeBody('iframe#signInIframe').find("#nextbtn").click();
          cy.getIframeBody('iframe#signInIframe').find("#password").type('Zhapix@1212*');
          cy.getIframeBody('iframe#signInIframe').find("#nextbtn").click();
        }

      })
    }
    catch (err) {
      console.log("Error :", err);
    }

  });

  it('To validate Interview Assignment form', () => {
    cy.visit('https://esmtest.zohocreatorportal.in/#Form:Interview_Assignments_Form');
    cy.get('div.formContainer').as('parentElem');
    cy.get('@parentElem').find('label#zc-B2B_Client_Name-arialabel span').should('exist').and('have.text', 'B2B Client Name');
    cy.get('@parentElem').find('div.zc-B2B_Client_Name a').click({ multiple: true, force: true });
    cy.get('div.B2B_Client_Name-switch-search').contains('li', 'Hirepro').click();
    cy.get('@parentElem').find('#Interview_Date_Time').type("23-Apr-2025 10:15 PM{enter}");
    cy.get('@parentElem').find('#zc-Note').type('Automation Testing Entry 5');
    cy.get("[id^=Interview_Assignments_Form]").find('input[type=submit]').click();
  })

  it('To view Created Assignments', () => {

    cy.visit('https://esmtest.zohocreatorportal.in/#Report:All_Interview_Assignments');
  })
});
