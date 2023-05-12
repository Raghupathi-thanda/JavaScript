function body1(){
    string = location.search;
    username = string.substring(string.indexOf("=")+1);
    document.querySelector("span").innerHTML = username;
}