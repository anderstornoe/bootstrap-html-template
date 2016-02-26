$(document).on('click', "#feedbackCorrect", function(event) {
    var HTML = '';
    HTML += '<h3>Du har svaret <span class="label label-success">Korrekt!</span> </h3>';
    HTML += '<p>';
    HTML += 'Meatloaf tri-tip pancetta fatback swine jerky. Pork chop pancetta beef, leberkas biltong brisket short loin pork belly ground round rump venison boudin. Doner picanha shoulder biltong shank spare ribs beef, bacon tongue shankle pancetta leberkas. Turducken pastrami corned beef, pork chop kevin kielbasa pork belly cupim meatball ribeye filet mignon chicken tongue sausage strip steak.';
    HTML += '</p>';
    HTML += '<span class="btn btn-lg btn-info GoOn">GÅ VIDERE</span>';
    UserMsgBox("body", HTML);
});

$(document).on('click', "#feedbackWrong", function(event) {
    var HTML = '';
    HTML += '<h3>Du har svaret <span class="label label-danger">Forkert</span> </h3>';
    HTML += '<p>';
    HTML += 'Meatloaf tri-tip pancetta fatback swine jerky. Pork chop pancetta beef, leberkas biltong brisket short loin pork belly ground round rump venison boudin. Doner picanha shoulder biltong shank spare ribs beef, bacon tongue shankle pancetta leberkas. Turducken pastrami corned beef, pork chop kevin kielbasa pork belly cupim meatball ribeye filet mignon chicken tongue sausage strip steak.';
    HTML += '</p>';
    UserMsgBox("body", HTML);
});

$(document).on('click', "#feedbackScore", function(event) {
    var HTML = '';
    HTML += '<h4 class="scoreText">Flot klaret </h4>';
    // HTML += 'Her er dit resultat: <span class="ScoreBox"><h5><span class="scoreText">Korrekte svar: </span><span class="QuestionCounter">10 ud af 10</span><span class="scoreText ml15"> Fejl: </span><span class="ErrorCount">3</span> </h5></span>';
    HTML += '<div class="scoreWrapper"><span class="resultText">Her er dit resultat:</span> ' + '<div class="score_container">' + $(".score_container").html() + '</div> <div class="clear"></div> </div>';
    HTML += '<div class="btn btn-primary">Prøve igen</div>';
    UserMsgBox("body", HTML);
});

$(".inner_container").sortable({
    axis: 'y',
    // animation speed
    sortAnimateDuration: 500,
    sortAnimate: true,
    distance: 25,

    update: function(event, ui) {

    },
    start: function(event, ui) {
        console.log("dragstart");
        ui.item.find(".sortable_text_container").addClass("shadow");
        console.log('du har fat i : ' + ui.item.index())
    },
    stop: function(event, ui) {
        ui.item.find(".sortable_text_container").removeClass("shadow");
        console.log("dragstart");
    }
});
