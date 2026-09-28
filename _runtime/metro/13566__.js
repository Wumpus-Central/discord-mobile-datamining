// _runtime/metro/13566__.js
import _mod13558 from "13558__.js";

export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod13558(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
