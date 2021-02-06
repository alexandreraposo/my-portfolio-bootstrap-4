function validateEmail() {
    let form = document.getElementById("form");
    let email = document.getElementById("email").value;
    let text = document.getElementById("text");
    let pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email.match(pattern)) {
        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHTML = "O seu email é válido!";
        text.style.color = "#008000";
    } else {
        form.classList.remove("valid");
        form.classList.add("invalid");
        text.innerHTML = "";
    }
}


function openModal(inputText) {
    let name = document.getElementById("name").value;
    let form = document.getElementById("form");
    let textArea = document.getElementById("text-area").value;
    let pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (name == "" || textArea == "" || !inputText.value.match(pattern)) {
        $('#myModal').modal('hide')
        return true;
    } else {
        $('#myModal').modal('show')
        return false;
    }
}
    

