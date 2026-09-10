// _runtime/metro/14098__.js
import _mod14090 from "14090__.js";

export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod14090(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
