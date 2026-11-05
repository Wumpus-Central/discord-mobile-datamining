// _runtime/metro/16165__.js
import _mod16157 from "16157__.js";

export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod16157(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
