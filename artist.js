// eg:  http://127.0.0.1:5500/artist.html?num=1&name=Kevin
let params = (new URL(document.location)).searchParams;

let artist_num = params.get("num");
let artist_name = params.get("name");
let section = document.getElementById("section");

const parentDiv = document.createElement('div');
parentDiv.id = "parent";
parentDiv.classList.add("artistDiv");

 const img = document.createElement('img');
 img.src = getImageURL(artist_num);

 const textDiv = document.createElement('div');
 textDiv.classList.add('textDiv');

 const nameH1 = document.createElement('h1');
 nameH1.textContent = artist_name;

 const titleP = document.createElement('p');
 titleP.textContent = artist_data[artist_num].title;

 const aboutP = document.createElement('p');
 aboutP.textContent = artist_data[artist_num].about;

 textDiv.appendChild(nameH1);
 textDiv.appendChild(titleP);
 textDiv.appendChild(aboutP);
 

 parentDiv.appendChild(img);
 parentDiv.appendChild(textDiv);   
 
 document.querySelector("#section").appendChild(parentDiv);

// Artist Name
console.log(artist_name);
// Artist Title
console.log(artist_data[artist_num].title)
// Artist About
console.log(artist_data[artist_num].about)
// Artist Image URL

console.log(getImageURL(artist_num));

function getImageURL(number) {
    return "https://randomuser.me/api/portraits/men/" + number + ".jpg";
}