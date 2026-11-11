// _runtime/metro/16407__.js
import _mod16399 from "16399__.js";

export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod16399(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
