const holes = $('.hole');
const scoreBoard = $('.score')
const moles = $('.mole')

$('#startGame').click( function () {
    startGame()
})


function startGame() {
    // Définir le temps maximum de la partie à 10 secondes
    const gameTime = 10000;

    let score = 0 // Score du joueur


    let startTime = setInterval(function (){
        let hole = holes.eq(Math.floor(Math.random() * holes.length));
        hole.addClass('up');

        let duration = Math.random() * (1000 - 200) + 200; // relance entre 200ms et 1s

        setTimeout(function() {
            hole.removeClass('up');
        }, duration);

        hole.click(function() {
            // Augmenter le score du joueur
            score++;
            // Faire disparaître la taupe
            $(this).removeClass('up');
            scoreBoard.text(score)
        });
    }, 200);

    setTimeout(function() { // Permet d'arrêter la game
        clearInterval(startTime);
        alert("La partie est terminé! ")

    }, gameTime);

}