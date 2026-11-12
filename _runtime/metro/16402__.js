// _runtime/metro/16402__.js
import _mod16394 from "16394__.js";

export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod16394(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
