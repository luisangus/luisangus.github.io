
var body;
function scan(obj, $target)
{
    var k;
        for (k in obj){
            if (obj.hasOwnProperty(k)){
                if (JSON.stringify(obj[k]["$t"]) != undefined) {
                    var li = $('<ul>').appendTo($target); 
                    li.text(k + ": ");
                    var innerList = $('<ul>').appendTo(li);
                    innerList.text(JSON.stringify(obj[k]["$t"]))
                } else {
                    var li = $('<ul>').appendTo($target);
                    li.text(k);
                    scan(obj[k], li);
                }
            } else {
                alert(k);
            }               
        }
    return body;
};

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

document.addEventListener('DOMContentLoaded', submitbutton3);
  function submitbutton3(){
    document.getElementById('PetFinderSubmitButton3').addEventListener('click', function(event) {
        displayAPIResponse3 = document.getElementById('API_response3');
        displayAPIResponse3.innerHTML = "Response Back:";
          $.getJSON('http://api.petfinder.com/pet.find?key=dcad1eb2f400f451c1fc3b5e4332174d&animal=dog&breed=pug&sex=M&location=98012&count=3&format=json&output=full&callback=?', function(Result) {
          var Result1 = Result["petfinder"]["pets"];
          body = "";
          scan(Result1, $('.sample'));
          });
        event.preventDefault();
      }
    )
  }

document.addEventListener('DOMContentLoaded', submitbutton4);
  function submitbutton4(){
    document.getElementById('PetFinderSubmitButton4').addEventListener('click', function(event) {
        displayAPIResponse4 = document.getElementById('API_response4');
        displayAPIResponse4.innerHTML = "Response Back:";
          $.getJSON('http://api.petfinder.com/shelter.find?key=dcad1eb2f400f451c1fc3b5e4332174d&location=98012&count=3&format=json&callback=?', function(Result) {
          var Result1 = Result["petfinder"]["shelters"];
          body = "";
          scan(Result1, $('.sample4'));
          });
        event.preventDefault();
      }
    )
  }

document.addEventListener('DOMContentLoaded', submitbutton5);
  function submitbutton5(){
    document.getElementById('PetFinderSubmitButton5').addEventListener('click', function(event) {
        displayAPIResponse5 = document.getElementById('API_response5');
        displayAPIResponse5.innerHTML = "Response Back:";
          $.getJSON('http://api.petfinder.com/shelter.get?key=dcad1eb2f400f451c1fc3b5e4332174d&id=WA422&format=json&callback=?', function(Result) {
          var Result1 = Result["petfinder"]["shelter"];
          body = "";
          scan(Result1, $('.sample5'));
          });
        event.preventDefault();
      }
    )
  }

document.addEventListener('DOMContentLoaded', submitbutton6);
  function submitbutton6(){
    document.getElementById('PetFinderSubmitButton6').addEventListener('click', function(event) {
        displayAPIResponse6 = document.getElementById('API_response6');
        displayAPIResponse6.innerHTML = "Response Back:";
          $.getJSON('http://api.petfinder.com/shelter.getPets?key=dcad1eb2f400f451c1fc3b5e4332174d&id=WA59&status=A&count=3&format=json&callback=?', function(Result) {
          var Result1 = Result["petfinder"]["pets"];
          body = "";
          scan(Result1, $('.sample6'));
          });
        event.preventDefault();
      }
    )
  }



























