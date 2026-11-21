// _runtime/metro/15317__.js
import _mod15309 from "15309__.js";

export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod15309(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
