const user = {
    avatarUrl: "",
    name: "",
    bio: "",
    username: "",
    seguidores: "",
    seguindo: "",
    repositories: [],
    reposEvents: [],
    setInfo(gitHubUser){
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.username = gitHubUser.login
        this.seguidores = gitHubUser.followers
        this.seguindo = gitHubUser.following
    },
    setRepositories(repositories){
        this.repositories = repositories
    },
    setEvents(repositories){
        this.reposEvents = repositories
    }
}

export { user }