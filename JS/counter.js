document.addEventListener('DOMContentLoaded', function() {
    
    let compteurs = document.querySelectorAll('.counter');
    
    compteurs.forEach(function(unCompteur) {
        
        let nombreFinal = parseInt(unCompteur.getAttribute('data-target'));
        
        let nombreActuel = 0;
        
        function compter() {
            
            if (nombreActuel < nombreFinal) {
                
                nombreActuel = nombreActuel + 1;
                
                unCompteur.textContent = nombreActuel;
                
                setTimeout(compter, 10);
                
            }
        }
        compter();
    });
}); 