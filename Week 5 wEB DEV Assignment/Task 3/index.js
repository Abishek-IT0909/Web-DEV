function getUser(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("User fetched");
            resolve({ id: id, name: "Abi" });
        }, 1500);
    });
}

function getPosts(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Posts fetched");
            resolve(["post1", "post2"]);
        }, 1200);
    });
}

function getComments(postId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Comments fetched");
            resolve(["good", "perfect"]);
        }, 1000);
    });
}
console.log("Starting (Promises)...");

getUser(1)
    .then(user => {
        console.log("User:", user);
        return getPosts(user.id);
    })
    .then(posts => {
        console.log("Posts:", posts);
        return getComments(posts[0]);
    })
    .then(comments => {
        console.log("Comments:", comments);
        console.log("Done with Promises!");
    })
    .catch(err => {
        console.log("Error:", err);
    });