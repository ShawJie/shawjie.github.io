const fs = require("fs");

const main = async function() {
    const renameChain = [
        (filename) => {
            return filename.toLowerCase();
        },
        (filename) => {
            return filename.replace(/\_/g, "-");
        }
    ]

    let posts = fs.readdirSync("./source/_posts");
    for (let post of posts) {
        let afterName = post;
        for (let rename of renameChain) {
            afterName = rename(afterName);
        }
        fs.renameSync(`./source/_posts/${post}`, `./source/_posts/${afterName}`);
    }
    console.log("Done");
}

main();