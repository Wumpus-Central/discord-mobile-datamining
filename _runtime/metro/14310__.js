// _runtime/metro/14310__.js
import _mod14302 from "14302__.js";

export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod14302(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
