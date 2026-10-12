// _runtime/metro/14333__.js
import _mod14325 from "14325__.js";

export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod14325(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
