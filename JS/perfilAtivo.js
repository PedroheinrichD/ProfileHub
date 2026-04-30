
// exibindo um perfil quando entrar no site 
async function perfilAtivo() {
    try {
        let responseRepos = await fetch(`https://api.github.com/users/PedroHeinrichD/starred`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }) // repositórios principais
        let responsePerfil = await fetch(`https://api.github.com/users/PedroHeinrichD`, { // RESPOSTA da API 
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        let perfil = await responsePerfil.json()// conversão em obj/json
        let repos = await responseRepos.json()// conversão em obj/json

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


        for (let i = 0; i < repos.length; i++) {
            const element = repos[i];

            // criando containers 
            let repos_card = document.createElement('div')
            repos_card.classList.add('repos')

            let name_Repos_Container = document.createElement('div')
            name_Repos_Container.classList.add('name_Repos_Container')

            let repos_Information = document.createElement('div')
            repos_Information.classList.add('repos_Information')

            let information_stars = document.createElement('div')
            information_stars.classList.add('information_stars')


            // ícones
            let icon_Repos = document.createElement('svg')
            icon_Repos.innerHTML = '<svg class="icon_repos" xmlns="http://www.w3.org/2000/svg"viewBox="0 0 640 512"><path d="M64 96c0-35.3 28.7-64 64-64l384 0c35.3 0 64 28.7 64 64l0 240-64 0 0-240-384 0 0 240-64 0 0-240zM0 403.2C0 392.6 8.6 384 19.2 384l601.6 0c10.6 0 19.2 8.6 19.2 19.2 0 42.4-34.4 76.8-76.8 76.8L76.8 480C34.4 480 0 445.6 0 403.2zM281 209l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48-48c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM393 175l48 48c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z" /></svg>'

            let icon_Star = document.createElement('svg')
            icon_Star.innerHTML = '<svg class="icon_Star" xmlns="http://www.w3.org/2000/svg"viewBox="0 0 576 512"><path d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z" /></svg>'


            // textos e links
            let repos_Name = document.createElement('a')
            repos_Name.href = element.html_url
            repos_Name.textContent = element.name
            repos_Name.target = '_blank'

            let text_repos = document.createElement('p')
            text_repos.classList.add('text_repos')
            text_repos.innerText = element.stargazers_count

            let linguagem = document.createElement('p')
            linguagem.classList.add('linguagem')

            linguagem.innerText = element.language
            repos_Information.append(linguagem)

            // adicionando 
            repos_Principais.append(repos_card)
            information_stars.append(repos_Information)
            repos_card.append(name_Repos_Container, information_stars)
            name_Repos_Container.append(icon_Repos, repos_Name) // adicionando ícone svg junto com link do repositorio
            information_stars.append(icon_Star, text_repos)
        }



        // pegando erro caso acontecer
    } catch (error) {
        console.log(`Erro cabuloso: ${error}`);
    }
}
perfilAtivo()