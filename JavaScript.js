document.addEventListener('DOMContentLoaded', (event)=> {
    const addButton = document.getElementById('addButton');
    const packName = document.getElementById ('packName');
    const cardName = document.getElementById ('cardName');
    const cardPrice = document.getElementById ('cardPrice');
    const cardList = document.getElementById ('cardList');

    packName.placeholder = predefinedData.packName;
    cardName.placeholder = predefinedData.cardName;
    cardPrice.placeholder = predefinedData.cardPrice;

    addButton.addEventListener('click', () => {
        const packName = packName.value.trim() || predefinedData.packName;
        const cardName = cardName.value.trim() || predefinedData.cardName;
        const cardPrice = cardPrice.value.trim() || predefinedData.cardPrice;
    
        //Bestemmer værdierne for inputtet - hvis ikke korrekt input gives, exekveres der ikke.
        if (packName !== "" && cardName !== "" && cardPrice !== "") {

            //Her tjekkes om variablerne Brand, Price og Quality stringsne ikke mangler input
            const li = document.createElement('li');

            //Hvis input er korrekt og data er udfyldt for strings
            //bliver der created et nyt element med angiven data.
            li.textContent = `Pack Name: ${predefinedData.packName}, Card Name: ${cardName}, Card Price: ${cardPrice}`;
            
            //her "printes" det nye Element ind på cardList
            cardList.appendChild(li);

            packName.value = "";
            cardName.value = "";
            cardPrice.value = "";

        } else {
            alert("Please enter all Card details.");
        }
    });

    if (inputValue.trim() !== "") {

        //her laves vores liste + document.createElement oprette ny node
        const li = document.createElement('li');
            //angivet tekst/værdi indsættes i listen til værdien af inputvalue
            li.textContent = inputValue;

        woodPelletList.appendChild(li);
        woodPelletInput.value = ""; // clear the input after adding
    }
     else 
    {
        alert("Please enter Card details.");
    }
});

