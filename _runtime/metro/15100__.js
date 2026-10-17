// _runtime/metro/15100__.js
import _mod15092 from "15092__.js";

export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod15092(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
