// _runtime/metro/14298__.js
import _mod14290 from "14290__.js";

export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod14290(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
