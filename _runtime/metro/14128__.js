// _runtime/metro/14128__.js
import _mod14120 from "14120__.js";

export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod14120(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
