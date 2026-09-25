// _runtime/metro/13549__.js
import _mod13541 from "13541__.js";

export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod13541(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
