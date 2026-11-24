// _runtime/metro/15338__.js
import _mod15330 from "15330__.js";

export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod15330(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
