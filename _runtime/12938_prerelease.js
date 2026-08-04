// _runtime/12938_prerelease.js

export default (arg0, arg1) => {
  const tmp = require(12924) /* SemVer */(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};