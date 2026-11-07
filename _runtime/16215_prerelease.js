// _runtime/16215_prerelease.js
import _mod16201 from "metro/16201__.js";

export default (arg0, arg1) => {
  const tmp = _mod16201(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
