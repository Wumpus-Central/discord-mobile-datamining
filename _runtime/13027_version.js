
export default (arg0, arg1) => {
  const tmp = require(13020) /* SemVer */(arg0, arg1);
  let version = null;
  if (tmp) {
    version = tmp.version;
  }
  return version;
};