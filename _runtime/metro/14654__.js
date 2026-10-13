// _runtime/metro/14654__.js
import _mod14646 from "14646__.js";

export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod14646(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
