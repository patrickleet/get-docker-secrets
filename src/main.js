import fs from 'fs'
import path from 'path'
import { expandKeys } from 'expand-keys'

export const getDockerSecrets = (secretPath = '/run/secrets') => {
  if (fs.existsSync(secretPath)) {
    let secrets = fs.readdirSync(secretPath).reduce((secrets, file) => {
      let content = fs.readFileSync(path.resolve(secretPath, file), 'utf8')
      secrets[file] = content
      return secrets
    }, {})

    return expandKeys(secrets)
  }
  return {}
}
