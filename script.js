let div = document.querySelector('.perfil')



function exibir(perfil) {

    // Exibir avatar com bio e nome do perfil buscado
    div.innerHTML = ''
    let avatar = document.createElement('img') // criando elemento img com avatar
    avatar.src = perfil.avatar_url

    let nome = document.createElement('h1')// criando elemento h1 com nome
    nome.innerText = perfil.name

    let bio = document.createElement('h2')// criando elemento com bio 
    bio.innerText = perfil.bio
    
    div.append(avatar,nome,bio) // adicionando na div 
}


async function buscaPerfil(event) {
    event.preventDefault()
    let searchInput = document.querySelector('#searchInput').value // valor do campo de busca
    try {
        let response = await fetch(`https://api.github.com/users/${encodeURI(searchInput)}`, { // RESPOSTA da API 
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        let perfil = await response.json()// conversão em obj/json
        exibir(perfil)// passando perfil por parâmetro
        console.log(perfil);
        


        // pegando erro caso acontecer
    } catch (error) {
        console.log(`Erro cabuloso: ${error}`);
    }
}

document.querySelector('.busca').addEventListener('submit', buscaPerfil)



