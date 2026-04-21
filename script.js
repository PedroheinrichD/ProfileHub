document.querySelector('.busca').addEventListener('submit', async (event) => { // formulario de busca
    event.preventDefault()

    let searchInput = document.querySelector('#searchInput').value // valor do campo de busca
    try {

        let response = await fetch(`https://api.github.com/users/${encodeURI(searchInput)}`, { // RESPOSTA da API 
            headers: {
                'Authorization': `${token}`
            }
        })
        let json = await response.json()// conversão em obj/json


        // Exibir avatar com bio e nome do perfil buscado

        

        // pegando erro caso acontecer
    } catch (error) {
        console.log(`Erro cabuloso: ${error}`);
    }
})