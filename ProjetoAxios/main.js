const { response } = require("express")

const url="http://localhost:5500/api/2"
const newUser = {
    name: "John Coltrane"
    avatar: "https://en.wikipedia.org/wiki/John_Coltrane#/media/File:John_Coltrane_in_1963.jpg"
    city: "New York"
    }
    const userUpdated = {
        name: "Miles Davis"
        avatar: "https://en.wikipedia.org/wiki/Miles_Davis#/media/File:Miles_Davis_by_Palumbo_cropped.jpg"
        city: "Santa Monica"
        }    

function getUser (){
    axios.get(url)
    .then(response => {
        const data = response.data
        renderResults.textContent = JSON.stringify(data)
    })
    .catch(error => console.log(error))
}
getUser()

function addNewUser() {
 axios.post(url, newUser)
 then(response => {
     alert(JSON.stringify(response.data))
 })
 .catch(error => console.log(error))
}
addNewUser()

function updatedUser() {
axios.put(`${url}/2`, userUpdated)
.then(response => {
    alert(JSON.stringify(response.data))

})
    .catch(error => console.log(error))
}
// updatedUser()

function deleteUser(){
    axios.delete(`${url}/21}`)
    .then(response => {}){
        alert(JSON.stringify(response.data))
    }
    .catch(error => console.log(error))
}

deleteUser()