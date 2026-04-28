
// exibindo um perfil quando entrar no site 
async function perfilAtivo() {
    try {
        let responseRepos = await fetch(`https://api.github.com/users/PedroHeinrichD/repos`, {})
        let responsePerfil = await fetch(`https://api.github.com/users/PedroHeinrichD`, { // RESPOSTA da API 
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        let perfil = await responsePerfil.json()// conversão em obj/json
        let repos = await responseRepos.json()// conversão em obj/json

        console.log(perfil);// vendo as propriedades 
        console.log(repos);// vendo as propriedades 



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
        // pegando erro caso acontecer
    } catch (error) {
        console.log(`Erro cabuloso: ${error}`);
    }
}
perfilAtivo() 