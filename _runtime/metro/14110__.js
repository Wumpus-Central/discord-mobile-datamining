// _runtime/metro/14110__.js
import _mod14102 from "14102__.js";

export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod14102(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
