# get-docker-secrets
[![Release](https://github.com/patrickleet/get-docker-secrets/actions/workflows/release.yml/badge.svg)](https://github.com/patrickleet/get-docker-secrets/actions/workflows/release.yml)
[![codecov](https://codecov.io/gh/patrickleet/get-docker-secrets/branch/master/graph/badge.svg)](https://codecov.io/gh/patrickleet/get-docker-secrets)

Tiny module for retrieving `docker secret`s as a JSON object.

```
npm i get-docker-secrets
```

Example:

given directory structure
```
/run
  /secrets
    - thing.one
      > HELLO
    -thing.two
      > WORLD
    - FOO
      > BAR
```

```
import { getDockerSecrets } from 'get-docker-secrets'
let secrets = getDockerSecrets()

/* 
secrets = {
  thing: {
    one: 'HELLO',
    two: 'WORLD'
  },
  FOO: 'BAR'
}
*/

```
