![Build Status](https://travis-ci.org/patrickleet/get-docker-secrets.svg?branch=master)
# get-docker-secrets

[![Greenkeeper badge](https://badges.greenkeeper.io/patrickleet/get-docker-secrets.svg)](https://greenkeeper.io/)

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
