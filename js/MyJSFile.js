
document.addEventListener('DOMContentLoaded', submitbutton);
  function submitbutton(){
    document.getElementById('PetFinderSubmitButton').addEventListener('click', function(event) {
        displayAPIResponse = document.getElementById('API_response');
        displayAPIResponse.innerHTML = "";
          $.getJSON('http://api.petfinder.com/breed.list?key=dcad1eb2f400f451c1fc3b5e4332174d&animal=dog&format=json&callback=?', function(BreedResults) {
            var BreedResults1 = BreedResults["petfinder"]["breeds"]["breed"];
                for (var key in BreedResults1) {
                if (BreedResults1.hasOwnProperty(key)) {
                var newElement = document.createElement('div');
                newElement.innerHTML = key + ": " + JSON.stringify(BreedResults1[key]["$t"]);
                displayAPIResponse.appendChild(newElement);
                }
            }
          });
        event.preventDefault();
      }
    )
  }


document.addEventListener('DOMContentLoaded', submitbutton2);
  function submitbutton2(){
    document.getElementById('PetFinderSubmitButton2').addEventListener('click', function(event) {
        displayAPIResponse2 = document.getElementById('API_response2');
        displayAPIResponse2.innerHTML = "";

          $.getJSON('http://api.petfinder.com/pet.getRandom?key=dcad1eb2f400f451c1fc3b5e4332174d&animal=dog&breed=pug&format=json&output=full&callback=?', function(RandomResult) {
            var RandomResult1 = RandomResult["petfinder"]["pet"];
                for (var key in RandomResult1) {
                if (RandomResult1.hasOwnProperty(key)) {
                var newElement = document.createElement('div');
                newElement.innerHTML = key + ": " + JSON.stringify(RandomResult1[key]["$t"]);
                displayAPIResponse2.appendChild(newElement);
                }
            }
          });
        event.preventDefault();
      }
    )
  }



