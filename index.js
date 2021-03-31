// Hide / show inputs as needed
// js code for taking input data and creating new elements

let showFormBtn = document.getElementById("showFormBtn");
let artistForm = document.getElementById("artist-form");

// Form is hidden by default
let formShowing = false;

showFormBtn.addEventListener("click", toggleForm);
artistForm.addEventListener("submit", (event) => {
    // Prevent refreshing thing
    event.preventDefault();

    const formdata = new FormData(event.target);
    const name = formdata.get("name");
    const about = formdata.get("about");
    const number = formdata.get("number");

    addNewArtist(name, about, number);
});

function addNewArtist(name, about, number) {
    // Parent Div
    const parentDiv = document.createElement('div');
    parentDiv.id = name + number;
    parentDiv.classList.add("artistDiv");

    // Image
    const img = document.createElement('img');
    img.src = getImageURL(number);

    // Text Container
    const textDiv = document.createElement('div');
    textDiv.classList.add('textDiv');

    // Name header
    const nameH1 = document.createElement('h1');
    nameH1.textContent = name;

    // About header
    const aboutH1 = document.createElement('h1');
    aboutH1.textContent = about;

    const anchor = document.createElement('a');
    anchor.href = getURL(name, number);
    

    // Append to parent
    textDiv.appendChild(nameH1);
    textDiv.appendChild(aboutH1);

    anchor.appendChild(img);
    anchor.appendChild(textDiv);    
    artists.appendChild(anchor);


    // Append to HTML
    document.querySelector("#artists").appendChild(parentDiv);
}

function getImageURL(number) {
    return "https://randomuser.me/api/portraits/men/" + number + ".jpg";
}

function getURL(name, number){
    return "artist.html?num=" + number + "&name=" + name;
}

function toggleForm() {
    if (formShowing) {
        artistForm.classList.add("no-display");
        formShowing = false;
    } else {
        artistForm.classList.remove("no-display");
        formShowing = true;
    }
}

// register the service worker (sw.js)
if ('serviceWorker' in navigator){
    navigator.serviceWorker.register('sw.js')
    .then(function(response){console.log("SW was registerd");})
    .catch(function(err){console.log("sw wasn't registered");})
}
