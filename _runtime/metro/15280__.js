// _runtime/metro/15280__.js
import _mod15272 from "15272__.js";

export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod15272(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
