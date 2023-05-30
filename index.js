import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://shopping-list-2666f-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const moviesInDB = ref(database, "movies")

const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")

addButtonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value   
    push(moviesInDB, inputValue)   
    console.log(`${inputValue} added to database`)
    inputFieldEl.value = ""
})


// line 4  ->  here we connecting firebase databaseURL
// line 11 ->  this is used to make a file to save all those data
//             movie is file name
// line 19 ->  here we pushing the of input value in firebase