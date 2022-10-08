async function main(){
    const id = localStorage.getItem("id")
    const post = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=:${id}`)
    const postData = await post.json();
    console.log(postData)
}

main();