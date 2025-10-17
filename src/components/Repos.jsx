import { CardRepos } from "./CardRepos"

export const Repos = ({ repos }) => {
    return (
        <div className="repos">
            {
                repos.length > 0 ? (
                    repos.map((repo) => (
                        <CardRepos
                            key={repo.id}
                            name={repo.name}
                            description={repo.description}
                            stars={repo.stargazers_count}
                            forks={repo.forks}
                            license={repo.license?.spdx_id}
                            updated={new Date(repo.updated_at).toLocaleDateString()}
                        />
                    ))
                ) : (
                    <p>No hay repositorios</p>
                )
            }

        </div>
    )
}
