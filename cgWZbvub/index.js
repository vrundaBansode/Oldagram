const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

let jsDiv = document.querySelector("#js-magic")

for(let i = 0; i < posts.length; i++){
    jsDiv.innerHTML += `
        <section>
                <div class="top">
                    <img src=${posts[i].avatar}>
                    <div class="info">
                        <h3>${posts[i].name}</h3>
                        <p>${posts[i].location}</p>
                    </div>
                </div>
                <img src=${posts[i].post} class="post" >
                <div class="interaction">
                    <img src="images/icon-heart.png" class="heart" id=${i}/>
                    <img src="images/icon-comment.png" />
                    <img src="images/icon-dm.png" />
                </div>
                <h3 class="likes" id=${posts[i].username}>${posts[i].likes} likes</h3>
                <p><span>${posts[i].username}</span> ${posts[i].comment}</p>
            </section>
            <br>
    `
}

let liked = false
const heart = document.querySelector(".heart")
console.log(heart)


heart.addEventListener("click", function(){
    liked = !liked
    let likeCount = document.getElementById(`${heart.getAttribute("id")}`)
    let id = likeCount.getAttribute("id").slice(0, 1)
    id = parseInt(id)
    let likes = 0

    for(let j = 0; j < posts.length; j++){
        if(j == id){
            likes = posts[j].likes
        }
    }

    if(liked){
        heart.src="images/heart (1).png"
        likes++
        
    }
    else{
        heart.src="images/icon-heart.png"
        likes = likes
    }
    document.getElementById(`${posts[id].username}`).textContent = likes + " likes"
    
})