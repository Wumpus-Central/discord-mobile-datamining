// _runtime/metro/13856__.js
import _mod13848 from "13848__.js";

export default (str, arg1) => {
  const tmp = _mod13848;
  str = str.trim();
  const tmpResult = tmp(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
