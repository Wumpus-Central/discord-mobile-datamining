// _runtime/metro/14115__.js
import _mod14107 from "14107__.js";

export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod14107(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
