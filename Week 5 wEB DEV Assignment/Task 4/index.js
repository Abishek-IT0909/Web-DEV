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

async function showData() {
    try {
        console.log("Starting (async/await)...");

        const user = await getUser(1);
        console.log("User:", user);

        const posts = await getPosts(user.id);
        console.log("Posts:", posts);

        const comments = await getComments(posts[0]);
        console.log("Comments:", comments);

        console.log("Done! ✨");
    } catch (err) {
        console.log("Error occurred:", err);
    }
}