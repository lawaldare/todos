function searchById(){
    let id = document.getElementById('input').value;
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(response => response.json())
    .then(json => console.log(json))
}


function searchByText(){
    let output = [];
    let text = document.getElementById('input').value;
    fetch('https://jsonplaceholder.typicode.com/todos/')
    .then(response => response.json())
    .then(json => {
        
        for(let index = 0; index < json.length; index++){
            if(json[index].title.indexOf(text) != -1){
                output.push(json[index]);
            }
        }
        
    })
    console.log(output);

}

//console.log(searchByText('dol'));