const screen = {
    userProfile: document.querySelector(".profile-data"),
    renderUser(user) {
        this.userProfile.innerHTML = `<div class="info">
                                 <img src="${user.avatarUrl}" alt="Foto de perfil do usuário" />
                                 <div class="data">
                                <h1>${user.name ?? "Infelizmente o usuário não tem um nome definido😥"}</h1>
                                <p>${user.bio ?? "Infelizmente o usuário não tem uma bio definida😥"}</p>
                                <p>Seguidores: ${user.seguidores}</p>
                                <p>Seguindo: ${user.seguindo}</p>
                                    </div>
                                </div>`

        let repositoriesItens = ""

        user.repositories.forEach(repo => {
            console.log('Informações: ',
                repo.forks_count,
                repo.stargazers_count,
                repo.watchers_count,
                repo.language)
            repositoriesItens += `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a>
            <p class='info-square' >🔱${repo.forks_count}</p>
            <p class='info-square' >⭐${repo.stargazers_count}</p>
            <p class='info-square' >👁${repo.watchers_count}</p>
            <p class='info-square' >🆚${repo.language}</p>
            </li>`
        })

        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += `<div class="repositories section">
                                        <h2>Repositórios</h2>
                                        <ul>${repositoriesItens}</ul>
                                            </div>`
        }
    },
    renderNotFound() {
        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
    },
    renderEvents(reposObj) {
        let eventItens = ""

        reposObj.forEach(repos => {
            if (repos.type === "CreateEvent" || repos.type === "PushEvent") {
                eventItens += `<li><a>${repos.repo.name}</a></li>`
            }
        })

        if (eventItens.length > 0) {
            this.userProfile.innerHTML += `<div class="repositories section">
                                        <h2>Eventos</h2>
                                        <ul>${eventItens}</ul>
                                        </div>`
        }
    }
}

export { screen }