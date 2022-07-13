"use strict";

    const outputDiv = document.querySelector("#output");

    axios.get("https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json")
        .then(response => {
            console.log("Res:", response)

            for(let i=0; i<response.data.members.length; i++){
                const member = document.createElement("p");
                member.innerText = "[name]= " + response.data.members[i].name +" [secret identity]="+ response.data.members[i].secretIdentity;
                outputDiv.appendChild(member);
            }
        })
        .catch(error => console.error(error));