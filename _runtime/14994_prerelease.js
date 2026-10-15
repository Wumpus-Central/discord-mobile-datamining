// _runtime/14994_prerelease.js
import _mod14980 from "metro/14980__.js";

export default (arg0, arg1) => {
  const tmp = _mod14980(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
