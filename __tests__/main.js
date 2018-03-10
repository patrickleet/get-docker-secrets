import path from 'path'
import { getDockerSecrets } from 'main'

describe('getSecrets', () => {
  it('returns secrets', () => {
    let secrets = getDockerSecrets(path.resolve(process.cwd(), '__test_secrets__'))
    expect(secrets).toEqual({
      foo: 'bar',
      hello: {
        world: '1'
      }
    })
  })

  it('returns empty object if file does not exist', () => {
    // default path is /run/secrets/
    let secrets = getDockerSecrets()
    expect(secrets).toEqual({})
  })
})
