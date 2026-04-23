let div = document.querySelector('.perfil')

document.querySelector('.busca').addEventListener('submit', async (event) => { // formulario de busca
    event.preventDefault()

    let searchInput = document.querySelector('#searchInput').value // valor do campo de busca
    try {

        let response = await fetch(`https://api.github.com/users/${encodeURI(searchInput)}`, { // RESPOSTA da API 
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        let perfil = await response.json()// conversão em obj/json
        console.log(perfil);     
        

        // pegando erro caso acontecer
    } catch (error) {
        console.log(`Erro cabuloso: ${error}`);
    }
})