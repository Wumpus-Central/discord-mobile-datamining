// _runtime/metro/15104__.js
import _mod15096 from "15096__.js";

export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod15096(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
