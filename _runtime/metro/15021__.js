// _runtime/metro/15021__.js
import _mod15013 from "15013__.js";

export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod15013(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
