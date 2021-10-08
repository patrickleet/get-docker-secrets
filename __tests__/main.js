import path from 'path'
import { getDockerSecrets } from 'main'

describe('getSecrets', () => {
  it('returns secrets', () => {
    const secrets = getDockerSecrets(path.resolve(process.cwd(), '__test_secrets__'))
    expect(secrets).toEqual({
      foo: 'bar',
      hello: {
        world: '1'
      }
    })
  })

  it('returns empty object if file does not exist', () => {
    // default path is /run/secrets/
    const secrets = getDockerSecrets()
    expect(secrets).toEqual({})
  })
})
