// _runtime/metro/13567__.js
import _mod13559 from "13559__.js";

export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod13559(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
