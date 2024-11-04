document.addEventListener('DOMContentLoaded', (event)=> {
    const addButton = document.getElementById('addButton');
    const clearButton = document.getElementById('clearButton');
    const packName = document.getElementById ('packName');
    const cardName = document.getElementById ('cardName');
    const cardPrice = document.getElementById ('cardPrice');
    const cardAmount = document.getElementById ('cardAmount');
    const cardInput = document.getElementById('cardInput');
    const cardList = document.getElementById ('cardList');

    //præ-defineret Data til Placeholders til bl.a eksempler af input
    const predefinedData = {
        packName: 'Obsidian Flame',
        cardName: 'Pikachu',
        cardPrice: 'Price',
        cardAmount: 'Amount'
    };

    // Sætter de foruddefinerede værdier som placeholder i input felterne
    packName.placeholder = predefinedData.packName;
    cardName.placeholder = predefinedData.cardName;
    cardPrice.placeholder = predefinedData.cardPrice;
    cardAmount.placeholder = predefinedData.cardAmount;

    //Eventlistener for Add Button'en
    //Når addButton klikkes, tjekkes om inputfeltet ikke er tomt. 
    //Hvis sandt, oprettes et nyt li-element med inputværdien og føjes til ul-listen.
    addButton.addEventListener('click', () => {
        const packName = packName.value.trim() || predefinedData.packName;
        const cardName = cardName.value.trim() || predefinedData.cardName;
        const cardPrice = cardPrice.value.trim() || predefinedData.cardPrice;
        const cardAmount = cardAmount.value.trim() || predefinedData.cardAmount;
    
        //Bestemmer værdierne for inputtet - hvis ikke korrekt input gives, exekveres der ikke.
        if (packName !== "" && cardName !== "" && cardPrice !== "" && cardAmount !== "") {

            //Her tjekkes om variablerne packName, cardName, cardPrice & cardAmount strings ikke mangler input
            const li = document.createElement('li');

            //Hvis input er korrekt og data er udfyldt for strings
            //bliver der created et nyt element med angiven data.
            li.textContent = `packName: ${predefinedData.packName}, cardName: ${predefinedData.cardName}, cardPrice: ${predefinedData.cardPrice}, cardAmount: ${predefinedData.cardAmount}`;
            
            //her "printes" det nye Element ind på cardList
            cardList.appendChild(li);

            // Tømmer inputfelterne og gør klar til næste indtastning.
            packName.value = "";
            cardName.value = "";
            cardPrice.value = "";
            cardAmount = "";

        } else {
            alert("Please enter all Card details.");
        }
    });
        //InputValue tjekker om værdien i input feltet er tomt/mellemrum
        //Trim() fjerner eventuelle start/slut mellemrums tegn
        if (inputValue.trim() !== "") {

            //her laves vores liste + document.createElement oprette ny node
            const li = document.createElement('li');
                //angivet tekst/værdi indsættes i listen til værdien af inputvalue
                li.textContent = inputValue;

            cardList.appendChild(li);
            cardInput.value = ""; // clear the input after adding

        }
        else 
        {
            alert("Please enter Card details.");
        }
    });
        // Event listener for Clear Button
        // Når clearButton klikkes, 
        // tømmes ul-listen ved at sætte innerHTML til en tom streng.
        clearButton.addEventListener('click', () => {
        cardList.innerHTML = "";

    });

