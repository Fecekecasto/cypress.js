describe('Покупка аватара покемоны', function () {

    it('Покупка аватара', function () {
         cy.visit('https://pokemonbattle.ru/login/');
         cy.wait(1000);
         cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN');
         cy.get('#password').type('USER_PASSWORD').type('{enter}');
         cy.wait(1000);
         cy.get('.header__container > .header__id').click();
         cy.wait(1000);
         cy.get('[href="/shop"]').click();
         cy.wait(1000);
         cy.get('.available > .shop__button').first().click();
         cy.wait(1000);
         cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4620869113632996');
         cy.get(':nth-child(1) > .pay_base-input-v2').type('1225');
         cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
         cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('NAME');
         cy.get('.pay-btn').click();
         cy.wait(2000);
         cy.get('#cardnumber').type('56456');
         cy.get('.payment__submit-button').click();
         cy.wait(1000);
         cy.get('.payment__font-for-success').should('be.visible').contains('Покупка прошла успешно')
     });
 })