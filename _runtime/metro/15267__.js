// _runtime/metro/15267__.js
import _mod15259 from "15259__.js";

export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod15259(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
