// _runtime/metro/14379__.js
import _mod14371 from "14371__.js";

export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod14371(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
