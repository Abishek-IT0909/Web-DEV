function getUser(id, callback) {
    setTimeout(() => {
        console.log("User fetched");
        callback({ id: id, name: "Abi" });
    }, 1500);
}

function getPosts(userId, callback) {
    setTimeout(() => {
        console.log("Posts fetched");
        callback(["post1", "post2"]);
    }, 1200);
}

function getComments(postId, callback) {
    setTimeout(() => {
        console.log("Comments fetched");
        callback(["nice", "good"]);
    }, 1000);
}
console.log("Starting...");

getUser(1, (user) => {
    console.log("User:", user);
    
    getPosts(user.id, (posts) => {
        console.log("Posts:", posts);
        
        getComments(posts[0], (comments) => {
            console.log("Comments:", comments);
            console.log("All data loaded successfully");
        });
    });
});