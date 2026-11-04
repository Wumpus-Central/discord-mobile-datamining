// _runtime/metro/16139__.js
import _mod16131 from "16131__.js";

export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod16131(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
