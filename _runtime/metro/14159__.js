// _runtime/metro/14159__.js
import _mod14151 from "14151__.js";

export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod14151(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
