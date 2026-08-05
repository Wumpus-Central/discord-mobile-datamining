// _runtime/13028_version.js
import { SemVer } from "13020_SemVer.js";

export default (str) => {
  const tmp = SemVer /* SemVer */;
  const tmpResult = tmp(str.trim().replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};