const search = document.querySelector("#search")

search.addEventListener("keydown", function(e) {
    if (e.keyCode == 13) {
        let query = search.value
        console.log(query);
        window.location = "https://baidu.com/s?ie=UTF-8&wd=" + query
    }
    
})