// _runtime/metro/13836__.js
import _mod13828 from "13828__.js";

export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod13828(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
