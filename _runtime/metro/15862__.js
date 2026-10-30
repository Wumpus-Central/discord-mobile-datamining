// _runtime/metro/15862__.js
import _mod15854 from "15854__.js";

export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod15854(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
