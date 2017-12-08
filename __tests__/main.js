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
})
