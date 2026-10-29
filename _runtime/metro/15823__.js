// _runtime/metro/15823__.js
import _mod15815 from "15815__.js";

export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod15815(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
