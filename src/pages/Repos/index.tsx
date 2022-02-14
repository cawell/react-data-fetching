import axios from 'axios'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'

export type Repository = {
  full_name: string,
  language: string,
  name: string,
  forks: number,
  watchers: number,
  html_url: string,
  description: string
}

function Repos() {

  const { data, isFetching } = useQuery<Repository[]>('repos', async() => {
    const response = await axios.get('https://api.github.com/users/cawell/repos')

    return response.data
  }, {
    staleTime: 1000 * 60
  })

  return (
    <ul>
      {isFetching && <p>Carregando</p>}

      {data?.map(repo => {
        return (
          <div key={repo.full_name} style={{
            background: "#ddd",
            borderRadius: "5px",
            padding: "1rem",
            margin: "0.5rem"
          }}>
            <Link to={`repos/${repo.full_name}`}>
              {repo.full_name}
            </Link>
            <div>

              <div>
                <span style={{ marginRight: "0.3rem" }}å>
                <strong>Forks:</strong> {repo.forks}
                </span>
                <span><strong>Stars:</strong> {repo.watchers}</span>
              </div>
              <div><strong>Linguagens:</strong> {repo.language}</div>
              <div><strong>Descrição:</strong> {repo.description}</div>
              <div>
                <strong>GitHub:</strong> <a target="_blank" href={repo.html_url}>{repo.name}</a>
              </div>
            </div>

          </div>
        )
      })}
    </ul>
  )
}

export { Repos }