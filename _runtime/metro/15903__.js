// _runtime/metro/15903__.js
import _mod15895 from "15895__.js";

export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod15895(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
