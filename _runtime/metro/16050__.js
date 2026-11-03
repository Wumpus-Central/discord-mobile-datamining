// _runtime/metro/16050__.js
import _mod16042 from "16042__.js";

export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod16042(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
