// _runtime/13027_version.js

export default (arg0, arg1) => {
  const tmp = require("13020_SemVer.js") /* SemVer */(arg0, arg1);
  let version = null;
  if (tmp) {
    version = tmp.version;
  }
  return version;
};