// _runtime/metro/16219__.js
import _mod16211 from "16211__.js";

export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod16211(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
