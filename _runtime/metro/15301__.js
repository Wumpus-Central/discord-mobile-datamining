// _runtime/metro/15301__.js
import _mod15293 from "15293__.js";

export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod15293(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
