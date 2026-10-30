// _runtime/metro/01047__.js
import _mod17 from "00017__.js";
import _mod867 from "00867__.js";

const Platform = _mod17.Platform;

export function shouldEnableNativeNagger(enableNativeNagger) {
  let tmp = enableNativeNagger;
  if (typeof enableNativeNagger !== "boolean") {
    tmp = !_mod867.isExpoGo();
  }
  return tmp;
}
