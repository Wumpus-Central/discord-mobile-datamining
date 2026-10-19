// _runtime/metro/15132__.js
import _mod15124 from "15124__.js";

export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod15124(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
