import { SemVer } from "13020_SemVer.js";
// _runtime/13028_version.js

export default (str) => {
  const tmp = SemVer /* SemVer */;
  const tmpResult = tmp(str.trim().replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};