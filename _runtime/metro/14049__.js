// _runtime/metro/14049__.js
import _mod14041 from "14041__.js";

export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod14041(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
