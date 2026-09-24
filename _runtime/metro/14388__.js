// _runtime/metro/14388__.js
import _mod14380 from "14380__.js";

export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod14380(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
