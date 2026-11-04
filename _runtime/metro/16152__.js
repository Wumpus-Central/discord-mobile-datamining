// _runtime/metro/16152__.js
import _mod16144 from "16144__.js";

export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod16144(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
