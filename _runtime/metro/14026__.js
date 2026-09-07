// _runtime/metro/14026__.js
import _mod14018 from "14018__.js";

export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod14018(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
