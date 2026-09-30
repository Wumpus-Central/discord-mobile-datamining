// _runtime/metro/13762__.js
import _mod13754 from "13754__.js";

export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod13754(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
