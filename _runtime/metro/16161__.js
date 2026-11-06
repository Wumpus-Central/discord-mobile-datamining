// _runtime/metro/16161__.js
import _mod16153 from "16153__.js";

export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod16153(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
