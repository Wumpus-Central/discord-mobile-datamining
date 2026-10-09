// _runtime/metro/14255__.js
import _mod14247 from "14247__.js";

export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod14247(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
