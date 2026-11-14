// _runtime/metro/16525__.js
import _mod16517 from "16517__.js";

export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod16517(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
