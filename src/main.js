import fs from 'fs'
import path from 'path'
import { expandKeys } from 'expand-keys'

export const getDockerSecrets = (secretPath = '/run/secrets') => {
  if (fs.existsSync(secretPath)) {
    const secrets = fs.readdirSync(secretPath).reduce((secrets, file) => {
      const content = fs.readFileSync(path.resolve(secretPath, file), 'utf8')
      secrets[file] = content
      return secrets
    }, {})

    return expandKeys(secrets)
  }
  return {}
}
