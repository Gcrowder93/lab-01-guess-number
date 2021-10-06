describe('Example Test', ()=>{
    before(()=>{
        cy.visit('/');
    });

    describe('HTML elements', ()=>{   
        it('plays audio', ()=>{
            cy.get('#retort').should('be.hidden');
        });
    });
}

)