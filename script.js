const button = document.getElementById('send-btn')

const consultarGemini = (question) => {

    //const keyGoogle = 'AIzaSyBZaybh57iVi23jcLvzuIrabNG4f3td60A'

    //const url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=' + keyGoogle

    const requestData = {
        contents: [
            {
                parts: [
                    {
                        text: `${question}`
                    }
                ]
            }
        ]
    }

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(requestData)
    }

    fetch(url,requestOptions)
    .then(response => response.json())
    .then(data => {
        const respostaTextIa = data.candidates[0].content.parts[0].text
        respostaIa(respostaTextIa)

    console.log(respostaTextIa);
    })
    .catch(error => console.error('ERROR ', error));
}

const respostaIa = (respostaTextIa) => {
    const textAreaPt = document.getElementById('chat-messages')
    textAreaPt.textContent =  respostaTextIa
}

button.addEventListener('click', () =>{
    const question = document.getElementById('user-input').value
    consultarGemini(question)
})