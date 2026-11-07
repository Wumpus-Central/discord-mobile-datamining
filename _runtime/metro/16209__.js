// _runtime/metro/16209__.js
import _mod16201 from "16201__.js";

export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod16201(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
