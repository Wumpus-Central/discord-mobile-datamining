// _runtime/metro/14692__.js
import _mod14684 from "14684__.js";

export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod14684(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
