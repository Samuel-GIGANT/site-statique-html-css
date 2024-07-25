// Attendre que le DOM soit complètement chargé avant d'exécuter le script
document.addEventListener('DOMContentLoaded', (event) => {
  // Ajouter un événement de clic au bouton avec l'ID 'get-started'
  document.getElementById('get-started').addEventListener('click', function (event) {
    // Prévenir le comportement par défaut du lien (qui est de naviguer vers '#')
    event.preventDefault();
    // Rediriger l'utilisateur vers 'newpage.html'
    window.location.href = 'newpage.html';
  });
});