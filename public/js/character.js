
$("#searchbtn").on("click",(event) =>{
   event.preventDefault();
   characterajax();
   $(".characterdisplay").empty();
});

var ts = '1';
var apiKey = 'a1087fb2b9bd329e7dcd967db2e6a839';
var md5 = '7a391475437bc8e67f4182bd472f4369';

function characterajax() {
    event.preventDefault();
    const characterName = $("#searchedChar").val().trim();
    const queryURL = 'https://gateway.marvel.com/v1/public/characters?name=' + characterName + '&ts='+ts+'&apikey='+ apiKey +'&hash='+ md5 +'';
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then((response) =>{
        if (response.data.results.length === 0) {
            const undefinedCatch = $("<h3>Sorry, couldn't find " + '"' + characterName + '"' + "! Check your spelling, or search another character!</h3>");
            $(".characterdisplay").append(undefinedCatch);
        } else {
            const cardBody = $("<div class='mb-3 w-auto h-auto p-3 rounded' style='background-color: #f7e75d; border-style: solid; border-color: black;''></div>");
            const cardBodyNew = $("<div class='row no-gutters'></div>");
            cardBody.append(cardBodyNew);
            const showingResultsFor = $("<h3 class='showingresultsfor'>Showing results for " + '"' + characterName + '"' + "</h3>");
            $(".characterdisplay").append(showingResultsFor);
            const picCol = $("<div class='col-md-4'></div>");
            cardBodyNew.append(picCol);
            const imageURL = response.data.results[0].thumbnail.path + '.' + response.data.results[0].thumbnail.extension;
            const image = $("<img class='image'>").attr("src", imageURL);
            picCol.append(image);
            const textCol = $("<div class='col-md-8'></div>");
            cardBodyNew.append(textCol);
            const textColDiv = $("<div class='card-body'></div>");
            textCol.append(textColDiv);
            const name = $("<h1 class='name'>" + response.data.results[0].name + "</h1>");
            const description = $("<p class='description'>" + response.data.results[0].description + "</p>");
            textColDiv.append(name, description);
            $(".characterdisplay").append(cardBody);
        };
    });
};



$("#profilebtn").click(() => window.location.pathname = '/');


