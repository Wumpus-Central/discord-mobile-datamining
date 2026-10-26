// _runtime/metro/15325__.js
import _mod15317 from "15317__.js";

export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod15317(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
