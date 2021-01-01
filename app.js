//Button 
document.getElementById('get-joke').addEventListener('click', getJoke);

function getJoke(){
    
    const number = document.getElementById('number').value;
    console.log(number);
    
    //Create XHR Object
    const xhr = new XMLHttpRequest();

    //OPEN
    xhr.open('GET',`http://api.icndb.com/jokes/random/${number}`,true);

    //ONLOAD
    xhr.onload = function(){
        if(this.status === 200){
            const response = JSON.parse(this.responseText); 
            
            let output = '';
            
            response.value.forEach(function(joke){
                output +=`
                <li>${joke.joke}</li>
                `;
            });

            document.getElementById('display').innerHTML = output;
        }
    }

    //SEND
    xhr.send();

}