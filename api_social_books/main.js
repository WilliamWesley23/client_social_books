const gitHubId = document.querySelector('input[type=text]')
const btnBuscar = document.querySelector('input[type=button]')
btnBuscar.onclick = function(){
    //Fazendo a conexão com a API
    fetch('https://github.com/WilliamWesley23/SOcial_books_Apii.git' + gitHubId.value)
    .then(Response => {
        if(Response.ok){
            return Response.json()
        }
        else{
            throw new Error('Erro na requisão.');
        }
        
    })
    .then(data =>{
        document.querySelector('#id').textContent =data.id
        document.querySelector('#nome').textContent = data.nome
        document.querySelector('#editora').textContent = data.editora
        document.querySelector('#publicação').textContent = data.publicacao
        document.querySelector('#Resumo').textContent = data.resumo

        //E outros atributos que você desejar
 
    })
    .catch(Error =>{
        console.log('Erro:' + Error)
    })
}
