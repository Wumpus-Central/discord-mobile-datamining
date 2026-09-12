// _runtime/metro/14109__.js
import _mod14101 from "14101__.js";

export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod14101(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
