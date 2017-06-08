//au click sur chercher, récupérer le terme de recherche et lancer une requête AJAX vers http://ws.geonames.org/wikipediaSearch grâce à la méthode $.getJSON
//il faut envoyer 3 infos: 
//q: le terme de recherche mis dans l'input
//username: "nbauwens"
//type: "JSON"
//en retour, vous récupérez une info et il faut lire le tableau geonames pour récupérer les résultats (utilisez la console pour regarder !)
//il faut également gérér le cas où le terme ne renvoie pas de résultats et si l'API renvoie une erreur ! 
//pensez également à afficher un loader et désactiver le bouton "search" 
$("#search").click(function(){
	var query = $("#query").val();
  $.getJSON(
  		"http://ws.geonames.org/wikipediaSearch",
      {
      		q: query,
          username: "nbauwens",
          type: "JSON"
      }
  )
  .done(function(data){
  		$("#results").empty();
      data.geonames.forEach(function(item){
      		var $h2 = $("<h2>"+item.title+"</h2>");
          var $p = $("<p>"+item.summary+"</p>");
          var $link = $("<a href='http://"+item.wikipediaUrl+"' target='_blank'>More info on Wikipedia</a>");
          $h2.appendTo("#results");
          $p.appendTo("#results");
          $link.appendTo("#results");
      });
  });
});