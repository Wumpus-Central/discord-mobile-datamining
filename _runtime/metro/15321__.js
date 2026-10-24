// _runtime/metro/15321__.js
import _mod15313 from "15313__.js";

export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod15313(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
