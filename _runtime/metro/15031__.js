// _runtime/metro/15031__.js
import _mod15023 from "15023__.js";

export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod15023(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
