// function displayProfile(profiledata){
//     const profileElement=document.getElementById('profile');
//     profileElement.innerHTML=`
//         <h2>${profiledata.login}</h2>
//         <img src="${profiledata.avatar_url}" style="width:100px; height:100px; border-radius:50%"/> 
//     `
// }

function displayProfile(profileData) {
    const profileElement = document.getElementById('profile');
    profileElement.innerHTML = `
        <h2>${profileData.name || profileData.login}</h2>
        <img src="${profileData.avatar_url}" style="width:100px; height:100px; border-radius:50%; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);" alt="Profile Picture"/> 
        <p><strong>Username:</strong> ${profileData.login}</p>
        <p><strong>Bio:</strong> ${profileData.bio || "No bio available"}</p>
        <p><strong>Public Repos:</strong> ${profileData.public_repos}</p>
        <p><strong>Followers:</strong> ${profileData.followers}</p>
        <p><strong>Following:</strong> ${profileData.following}</p>
        <p><strong>Location:</strong> ${profileData.location || "Not specified"}</p>
        <p><strong>Blog:</strong> 
            ${profileData.blog ? `<a href="${profileData.blog}" target="_blank">${profileData.blog}</a>` : "No blog"}
        </p>
        <p><strong>GitHub Profile:</strong> 
            <a href="${profileData.html_url}" target="_blank">${profileData.html_url}</a>
        </p>
        <p><strong>Account Created On:</strong> ${new Date(profileData.created_at).toLocaleDateString()}</p>
    `;
}

function fetchProfile(){
    const username=document.getElementById("username").value;
    if(!username){
        console.log("Enter a Github Username")
    }
    else{
        fetch(`https://api.github.com/users/${username}`)
        .then((response)=>{
            if(!response.ok){
                throw new Error("Network response is inValid");
            }
            else{
                return response.json()
            }
        }).then(data=>{
                displayProfile(data)
        }).catch(err=>{
            console.log("There was a problem with fetch : ",err.message);
        })
    }

}