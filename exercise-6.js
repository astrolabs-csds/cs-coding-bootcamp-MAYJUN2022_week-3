// 1. Add parameters for 'url' and 'thumbnailUrl'
//    to the cardTemplate function. Next, introduce
//    the parameters as variables inside the code
//    snippets.
function cardTemplate(title, url, thumbnailUrl) {
    return `
    <div class="col-3">
        <div class="card" style="width: 300px; margin-bottom: 20px;">
            <img src="${thumbnailUrl}" width="300" alt="..." />
            <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <a href="${url}" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>`;
};


var row = document.getElementsByClassName('row')[0];


// 2. Use the object 'sample_post' to add a post
//    inside the element 'row'.
//    Use the .innerHTML property to add the posts 
//    inside the row HTML element. Use the function
//    cardTemplate() to generate a cards.

var sample_post = {
    "albumId": 1,
    "id": 1,
    "title": "accusamus beatae ad facilis cum similique qui sunt",
    "url": "https://via.placeholder.com/600/92c952",
    "thumbnailUrl": "https://via.placeholder.com/150/92c952"
};


row.innerHTML += cardTemplate( sample_post['title'], sample_post['url'], sample_post['thumbnailUrl']  );





// 3. Use the .innerHTML property to add the posts 
//    inside the row HTML element. Use the function
//    cardTemplate() to generate the cards 



// var i = 0;

// fetch('https://jsonplaceholder.typicode.com/photos')  // wait for backend to respond
// .then(
//     function(responseString) {                        // convert string response to JSON    
//         return responseString.json()
//    }
// )
// .then(
//     function(json) {                                  // use the JSON after conversion 
//         console.log(json.slice(0,10))
//     }
// );