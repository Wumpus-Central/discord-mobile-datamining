// _runtime/metro/15511__.js
import _mod15503 from "15503__.js";

export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod15503(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
