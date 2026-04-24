import staticBadge from '../pages/api/static'
import github from '../pages/api/github'
import npm from '../pages/api/npm'
import codecov from '../pages/api/codecov'
import deepscan from '../pages/api/deepscan'

const badges = {
  static: staticBadge.meta,
  github: github.meta,
  npm: npm.meta,
  codecov: codecov.meta,
  deepscan: deepscan.meta,
}

export default badges
