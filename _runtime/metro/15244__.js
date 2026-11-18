// _runtime/metro/15244__.js
import _mod15236 from "15236__.js";

export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod15236(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
