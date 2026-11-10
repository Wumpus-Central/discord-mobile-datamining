// _runtime/metro/16246__.js
import _mod16238 from "16238__.js";

export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod16238(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
