// _runtime/13130_version.js
import SemVer from "13122_SemVer.js";


export default (str) => {
  str = str.trim();
  const tmpResult = SemVer(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};