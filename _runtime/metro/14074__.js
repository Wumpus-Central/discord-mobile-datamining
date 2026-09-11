// _runtime/metro/14074__.js
import _mod14066 from "14066__.js";

export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod14066(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
