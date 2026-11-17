// _runtime/metro/16561__.js
import _mod16553 from "16553__.js";

export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod16553(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
