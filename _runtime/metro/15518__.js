// _runtime/metro/15518__.js
import _mod15510 from "15510__.js";

export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod15510(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
