function run(){
    let htmlCode = document.getElementById("html-code");
    let CSSCode = document.getElementById("Css-code");
    let jsCode = document.getElementById("js-code");

    let output = document.getElementById("output");

    output.contentDocument.body.innerHTML = htmlCode.value + "<style>" + CSSCode.value + "</style>" ;

    output.contentWindow.eval(jsCode.value)
    //output.contentDocument.body.innerHTML = "<script>"+jsCode.value+"</script>"
}