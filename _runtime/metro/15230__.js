// _runtime/metro/15230__.js
import _mod15222 from "15222__.js";

export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod15222(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
