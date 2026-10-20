// _runtime/metro/15150__.js
import _mod15142 from "15142__.js";

export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod15142(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
