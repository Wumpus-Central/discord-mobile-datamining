// _runtime/metro/15907__.js
import _mod15899 from "15899__.js";

export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod15899(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
