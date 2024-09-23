
document.oncontextmenu=()=>{
    alert("😎Try not to view my research or my source code")
        return false;
}
document.onkeydown= e =>{
    if (e.  key == "F12") {
        alert("😎Try not to view my research or my source code")
        return false;
    }
    if (e.ctrlKey && e.key == "u" || "U") {
        alert("😎Try not to view my research or my source code nu using ctrl+u")
        return false;
    }
    if (e.ctrlKey && e.key == "c" || "C") {
        alert("🤣Kiddo dont try to copy my code")
        return false;
    }
    if (e.ctrlKey && e.key == "v"||"V") {
        alert("Kiddo dont try to copy my code and paste in your code.")
        return false;
    }
}

