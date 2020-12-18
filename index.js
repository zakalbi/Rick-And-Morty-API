const rickResult = document.getElementById('imageOne');
const jerryResult = document.getElementById('imageTwo');



function fetchRickAndMortyApi() {
    fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(rickAndJerry => {
        console.log(rickAndJerry);
    })
};
fetchRickAndMortyApi();

// function fetchRickAndMortyApi() {
//     fetch('https://rickandmortyapi.com/api/character')
//     .then(function(result){
//         return result.json()
//     })
//     .then(function(rickAndJerry){
//         console.log(rickAndJerry)
//         return rickAndJerry
//     })
// };

// function DisplayImgResults() {
//     let rickResult = document.getElementById('imageOne');
//     let jerryResult = document.getElementById('imageTwo'); 
    
//     setsrc = 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
//     document.img.append(rickImage);
//     document.img.append(jerryImgage);
// }
// DisplayImgResults();


function DisplayImgResults() {
    let rickResult = document.getElementById('imageOne');
    let jerryResult = document.getElementById('imageTwo'); 

    rickResult.srcset = `https://rickandmortyapi.com/api/character/avatar/1.jpeg`
    jerryResult.srcset = `https://rickandmortyapi.com/api/character/avatar/5.jpeg`

    imgDiv.append(rickResult);
    imgDiv.append(jerryResult);
}

DisplayImgResults();


// rick - https://rickandmortyapi.com/api/character/avatar/1.jpeg
// jerry - https://rickandmortyapi.com/api/character/avatar/5.jpeg