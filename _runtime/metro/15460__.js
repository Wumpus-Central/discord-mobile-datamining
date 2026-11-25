// _runtime/metro/15460__.js
import _mod15452 from "15452__.js";

export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod15452(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
