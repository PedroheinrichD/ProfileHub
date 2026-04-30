let busca_perfil = document.querySelector('.perfil')
let img_Perfil = document.querySelector('#img_Perfil')
let name_Perfil = document.querySelector('#Name_Perfil')
let user_Perfil = document.querySelector('#User_Perfil')
let bio_Perfil = document.querySelector('#Bio_Perfil')
let valor_seguidores = document.querySelector('.valor_seguidores')
let valor_seguindo = document.querySelector('.valor_seguindo')
let link_perfil = document.querySelector('#link_perfil')
let repos_Principais = document.querySelector('#repos_Principais')


// Valores das boxes
let box_Rep_Publico = document.querySelector('.valor_Rep_Publico')
let box_Gists_Publico = document.querySelector('.valor_Gists_Publico')
let box_Seg_Publico = document.querySelector('.valor_Seg_Publico')
let box_Seguin_Publico = document.querySelector('.valor_Seguin_Publico')







function exibir(perfil) {

    img_Perfil.innerHTML = ''
    name_Perfil.innerHTML = ''
    user_Perfil.innerHTML = ''
    bio_Perfil.innerHTML = ''
    valor_seguidores.innerHTML = ''
    valor_seguindo.innerHTML = ''
    link_perfil.innerHTML = ''

    // Exibir avatar com bio e nome do perfil buscado
    let avatar = document.createElement('img') // criando elemento img com avatar
    avatar.src = perfil.avatar_url

    let nome = document.createElement('h2')// criando elemento h1 com nome
    nome.innerText = perfil.name

    let bio = document.createElement('h4')// criando elemento com bio 
    bio.innerText = perfil.bio

    let user = document.createElement('h3')// criando elemento com bio 
    user.innerText = `@${perfil.login}`

    let seguidores = document.createElement('p')// criando elemento com bio 
    seguidores.innerText = perfil.followers

    let seguindo = document.createElement('p')// criando elemento com bio 
    seguindo.innerText = perfil.following

    // adicionando link de perfil pesquisado
    link_perfil.href = perfil.html_url
    link_perfil.textContent = perfil.html_url
    link_perfil.target = '_blank'

    img_Perfil.append(avatar) // adicionando foto de perfil
    name_Perfil.append(nome) // adicionando nome do perfil
    user_Perfil.append(user) // adicionando arroba@ do perfil
    bio_Perfil.append(bio) // adicionando bio 
    valor_seguidores.append(seguidores) // adicionando total de seguidores 
    valor_seguindo.append(seguindo) // adicionando total de quantos o perfil está seguindo



    // exibindo dados nas caixas de informação
    box_Rep_Publico.innerHTML = ''
    box_Gists_Publico.innerHTML = ''
    box_Seg_Publico.innerHTML = ''
    box_Seguin_Publico.innerHTML = ''

    box_Rep_Publico.innerHTML = perfil.public_repos
    box_Gists_Publico.innerHTML = perfil.public_gists
    box_Seg_Publico.innerHTML = perfil.followers
    box_Seguin_Publico.innerHTML = perfil.following


}

function exibirRepositorios(repos) {
    // exibir total de repósitorios no site
}


// fazendo a requisição da API
async function buscaPerfil(event) {
    event.preventDefault()
    let searchInput = document.querySelector('#searchInput').value // valor do campo de busca
    try {
        let responseRepos = await fetch(`https://api.github.com/users/${encodeURI(searchInput)}/repos`, {})
        let responsePerfil = await fetch(`https://api.github.com/users/${encodeURI(searchInput)}`, { // RESPOSTA da API 
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        let perfil = await responsePerfil.json()// conversão em obj/json
        let repos = await responseRepos.json()// conversão em obj/json


        exibir(perfil)// passando perfil por parâmetro
        exibirRepositorios(repos)


        // pegando erro caso acontecer
    } catch (error) {
        console.log(`Erro cabuloso: ${error}`);
    }
}
document.querySelector('.busca').addEventListener('submit', buscaPerfil)
