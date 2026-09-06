// _runtime/metro/14023__.js
import _mod14015 from "14015__.js";

export default (str, arg1) => {
  const tmp = _mod14015;
  const tmpResult = tmp(str.trim().replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
