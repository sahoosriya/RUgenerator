document.getElementById("generate-btn").addEventListener("click",generateUser);
function generateUser(){
    fetch("https://randomuser.me/api/")
    .then((Response)=>Response.json())
    .then((data)=>{
        const user = data.results[0];
        document.getElementById("user-image").src = user.picture.large;
        document.getElementById("user-name").innerText =`${user.name.first} ${user.name.last}`;
        document.getElementById("user-email").innerText =user.email;
        document.getElementById("user-location").innerText =`${user.location.city} ${user.location.country}`;
        document.getElementById("user-conatainer").style.display="block";
    })
    .catch((error)=>{
        console.error("Error fetching user:",error);
    });
    
}