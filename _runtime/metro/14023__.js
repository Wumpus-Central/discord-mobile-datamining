// _runtime/metro/14023__.js
import _mod14015 from "14015__.js";

export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod14015(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
