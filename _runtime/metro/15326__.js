// _runtime/metro/15326__.js
import _mod15318 from "15318__.js";

export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod15318(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
