const screen = {
    userProfile: document.querySelector(".profile-data"),
    renderUser(user){ 
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
        repositoriesItens += `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>`
    })

    if(user.repositories.length > 0){
        this.userProfile.innerHTML += `<div class="repositories section">
                                        <h2>Repositórios</h2>
                                        <ul>${repositoriesItens}</ul>
                                    </div>` 
    }
},
    renderNotFound(user){
        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
    }
}

export { screen }