// _runtime/metro/15223__.js
import _mod15215 from "15215__.js";

export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod15215(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
