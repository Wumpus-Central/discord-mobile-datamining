// _runtime/metro/15315__.js
import _mod15307 from "15307__.js";

export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod15307(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
