// _runtime/metro/13770__.js
import _mod13762 from "13762__.js";

export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod13762(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
