// _runtime/metro/15588__.js
import _mod15580 from "15580__.js";

export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod15580(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
