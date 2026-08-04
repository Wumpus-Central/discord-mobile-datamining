// _runtime/12931_version.js

export default (arg0, arg1) => {
  const tmp = require(12924) /* SemVer */(arg0, arg1);
  let version = null;
  if (tmp) {
    version = tmp.version;
  }
  return version;
};