// _runtime/metro/14231__.js
import _mod14223 from "14223__.js";

export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod14223(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
