// _runtime/metro/14286__.js
import _mod14278 from "14278__.js";

export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod14278(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
