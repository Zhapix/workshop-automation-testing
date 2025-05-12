Cypress.Commands.add('getIframeBody', (iframeSelector) => {
  return cy
    .get(iframeSelector)
    .its('0.contentDocument.body')
    .should('not.be.empty')
    .then(cy.wrap);
});

// START TEST CASES

describe("Automation Testing for Expert Serice Manager", () => {

  beforeEach('Global Initialization', () => {
    //cy.clearCookies();
    //cy.visit('https://esmtest.zohocreatorportal.in')
   cy.visit('https://esmtest.zohocreatorportal.in/#Form:B2B_Client_Form')
     

    // To Authenticate through login
   /* try {
      cy.getCookies().then((cookies) => {
        console.log("Cookies..",cookies);
        //cy.pause();
        let isValidLogin = cookies && cookies.length > 0 && cookies.some((cookie) => cookie.name == "_z_identity");
        if (isValidLogin) {
          let iframeBdy = cy.getIframeBody('iframe#signInIframe');
          iframeBdy.find("#login_id").type('test@intern.zhapix.com');
          cy.getIframeBody('iframe#signInIframe').find("#nextbtn").click();
          cy.getIframeBody('iframe#signInIframe').find("#password").type('Zhapix@1212*');
          cy.getIframeBody('iframe#signInIframe').find("#nextbtn").click();
        }

      })
    }
    catch (err) {
      console.log("Error :", err);
    }*/

})
 
     it('To verify the presence of "Forms" menu in header menu bar',()=>{
      cy.get('#tab_Forms > div > span').should('have.text','Forms')   
     })
     it('To verify text "B2B Client Form" is visible on the menu',()=>{
      cy.get('#B2B_Client_Form > div').should('have.text','B2B Client Form')      
     })
     it('To verify the successful opening of B2B Client Form page through menu and To Check B2B Client Form heading visible',()=>{
      cy.wait(2000)
      cy.get('#formTitleElem').should('have.text','B2B Client Form')
     })
     it('To Verify "B2B Client Name" label visible',()=>{
      cy.get('#zc-B2B_Client_Name-arialabel > span').should('have.text','B2B Client Name*')
     })
     it('To Check whether "B2B Client Name" textbox is visible',()=>{
      cy.get('#firstname').should("exist");
     })
     it('Attempt to Submit B2B Client Form as empty field',()=>{
      cy.get('#firstname').clear()
     cy.get('input[type="submit"]').click()
     cy.get('#zc-dialog-label').should('have.text','Invalid entries found')
    cy.get('#zc-dialog-desc').should('have.text','Rectify and submit again.')
    cy.get('#Ok').click()
    cy.url().should('include', '#Form:B2B_Client_Form')
    cy.get('#zc-B2B_Client_Name-errorMsg > span').should('have.text','This field is mandatory. Enter a value.')
     })  
      it('To Check "Location" heading visible',()=>{
      cy.get('#zc-Location-arialabel > span').should('have.text','Location')
     })
     it('To Check whether"Location" textbox is visible',()=>{
      cy.get('#zc-Location').should("exist");
     })
     it('To Check "Phone Contact" label is visible',()=>{
      cy.get('#zc-Phone_Contact-arialabel > span').should('have.text','Phone Contact')
     })
     it('To Check whether "Phone Contact" textbox is visible',()=>{
      cy.get('#zc-Phone_Contact').should("exist");
     })
     it('accepts only numeric input', () => {
      cy.get('#zc-Phone_Contact') // Replace with your actual selector
       .clear()
       .type('9566748947')
       .invoke('val')
       .then((value) => {
      expect(value).to.match(/^\d{10}$/);
  });
})
      it('Validate Phone number with fewer than 10 digits',()=>{
       cy.get('#zc-Phone_Contact') 
         .type('956@@48947')
         .invoke('val')
         .then((value) => {
         expect(value).to.match(/^\d{10}$/);
})
  })
      it('To Check " Email Contact" label is visible',()=>{
        cy.get('#zc-Email_Contact-arialabel > span').should('have.text','Email Contact')
      })
      it('To Check whether "Email Contact" textbox is visible',()=>{
        cy.get('#zc-Email_Contact').should("exist");
      })
      it('should reject improperly formatted email addresses', () => {
        cy.get('#zc-Email_Contact') // Replace with your actual selector
          .clear()
          .type('fer#gmail.com');

        cy.get('form').submit(); // Or the submit button if applicable
      })
      it('To Verify " Notes" Heading is visible',()=>{
        cy.get('#zc-Notes-arialabel > span').should('have.text','Notes')
      })
      it('To Check whether "Notes" textbox is visible',()=>{
        cy.get('#zc-Notes').should("exist");
      })
      it('To Check "Submit" button is visible',()=>{
         cy.get('.zc-live-primary-btn').should('be.visible').should('have.value','Submit')
      })
      
})
