let saxeli = document.querySelector(".Name")
let tag = document.querySelector(".Tag")
let joined = document.querySelector(".Joined")
let Search = document.querySelector("button")
let Input = document.querySelector("input")
let Rep = document.querySelector(".Rep")
let Followers = document.querySelector(".Followers")
let Following = document.querySelector(".Following")
let Bio = document.querySelector(".Bio")
let MainBox = document.querySelector(".Mainbox")
let img1 = document.querySelector(".foto")
let form = document.querySelector("form")
let Adgili = document.querySelector(".Location")
let Githublink = document.querySelector(".Githublink")
let Githubsearch = document.querySelector(".GithubSearch")
let Twitter = document.querySelector(".Twitter")
let Office = document.querySelector(".Office")
let svg = document.querySelectorAll(".Path")
let Errors = document.querySelector(".Error")
let body = document.querySelector("body")
let Lightordark = document.querySelector(".Lightordark")
let Sun = document.getElementById("Mze")
let Spans = document.querySelectorAll(".Spans")
let Finder = document.querySelector(".Finder")
let Theme = document.querySelector(".Theme")
let Names = document.querySelector(".Name")
let Blackbox = document.querySelector(".Black")
let texts = document.querySelectorAll(".Texts")
let Lasttexts = document.querySelectorAll(".Color")
const defaultSrc = Sun.src

function Makelinkunable(){
    Githublink.addEventListener("click", function(event){
        event.preventDefault(); 
       })
}


async function Getdata() {
    Search.setAttribute("disabled", true)
    body.classList.add("Cursor")
    Search.classList.add("Cursor")
   
    try {
        let res = await fetch(`https://api.github.com/users/${Input.value}`)
        let data = await res.json()
        Search.removeAttribute("disabled")
        body.classList.remove("Cursor")
        Search.classList.remove("Cursor")
        console.log(data)
        Input.value = ""
        if (data.message !== "Not Found") {    
            body.classList.remove("Cursor")
            Adgili.textContent = data.location === null ? 'Not available' : data.location;
            if (Adgili.textContent === 'Not available') {
                Adgili.classList.add("Grey")
                svg[0].classList.add("Fillergrey")
            } else {
                Adgili.classList.remove("Grey")
                svg[0].classList.remove("Fillergrey")
            }
            Githublink.textContent = data.blog === "" ? 'Not available' : data.blog;
            if (Githublink.textContent === 'Not available') {
                Makelinkunable()
                Githublink.classList.add("Noselect")
                Githublink.classList.add("Grey")
                svg[1].classList.add("Fillergrey")
                svg[2].classList.add("Fillergrey")
            } else {
                Githublink.href = data.blog
                Githublink.classList.remove("Grey")
                svg[1].classList.remove("Fillergrey")
                svg[2].classList.remove("Fillergrey")
            }
            Twitter.textContent = data.twitter_username === null ? 'Not available' : data.twitter_username;
            if (Twitter.textContent === 'Not available') {
                Twitter.classList.add("Grey")
                svg[3].classList.add("Fillergrey")
            } else {
                Twitter.classList.remove("Grey")
                svg[3].classList.remove("Fillergrey")
            }
            Office.textContent = data.company === null ? 'Not available' : data.company;
            if (Office.textContent === 'Not available') {
                Office.classList.add("Grey")
                svg[4].classList.add("Fillergrey")
                svg[5].classList.add("Fillergrey")
            } else {
                Office.classList.remove("Grey")
                svg[4].classList.remove("Fillergrey")
                svg[5].classList.remove("Fillergrey")
            }
            
        img1.src = data.avatar_url
        saxeli.innerHTML = data.name
        tag.innerHTML = data.login          
        let date = data.created_at
        let year = date.slice(0, 4)
        let month = date.slice(5, 7)
        let day = date.slice(8, 10)
        let monthName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        let monthbasedonday = monthName[parseInt(month) - 1]
        joined.textContent = "Joined " + day + " " + monthbasedonday + " " + year
            
        if (data.bio === null) {
            Bio.innerHTML = "No Bio Yet ^^" 
        } else {
            Bio.innerHTML = data.bio
        }
        Rep.innerHTML = data.public_repos
        Followers.innerHTML = data.followers
        Following.innerHTML = data.following
        Errors.textContent= ""
        } else {
            Errors.textContent= "No Results"
        }
    } catch (error) {
        console.log("Error:", error)

    }
}

Search.addEventListener("click", function () {
    Getdata()
})

form.addEventListener("submit", function (e) {
    e.preventDefault()
    Getdata()
})

Lightordark.addEventListener("click", function () {
    body.classList.toggle('Getbackground')
    MainBox.classList.toggle("Getwhites")
    joined.classList.toggle("Getblue") 
    Bio.classList.toggle("Getblue")
 
    for (let i = 0; i < texts.length; i++){
        texts[i].classList.toggle("Getblack")
    }
    for (let i = 0; i < Spans.length; i++){
        Spans[i].classList.toggle("Getblue")
    }
    for (let i = 0; i < svg.length; i++){
        svg[i].classList.toggle("Getsvgfiller")
    }
    for (let i = 0; i < Lasttexts.length; i++){
        Lasttexts[i].classList.toggle("Getblue")
    }

    if (Sun.src.includes(defaultSrc)) {
        Sun.src = `Assets/moon.svg` 
        Theme.innerHTML = "Dark"
    }
    else {
        Sun.src = defaultSrc
        Theme.innerHTML = "Light"

    } 
    Finder.classList.toggle("Getblack")
    Theme.classList.toggle("Getblack")
    Names.classList.toggle("Getblack")
    Blackbox.classList.toggle("Getgrey")
    Githubsearch.classList.toggle('Getwhites')
    Githubsearch.classList.toggle("Getcolor")
    Githubsearch.classList.toggle("Getblue")
})





