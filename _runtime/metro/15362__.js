// _runtime/metro/15362__.js
import _mod15354 from "15354__.js";

export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod15354(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
