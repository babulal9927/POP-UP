const section = document.querySelector("section"),
    hirebtn = section.querySelector("#hirebtn"),
    closebtn = section.querySelectorAll("#close"); 

    hirebtn.addEventListener("click", () =>{
        section.classList.add("show")
    });


    closebtn.forEach(cbtn =>{
        cbtn.addEventListener("click", ()=>{
            section.classList.remove("show");
        });
    });
