// discord_common/js/packages/libdiscore/js_shim/js/initLibdiscore.native.tsx
import react_native from "../../../../../../_runtime/00017_react-native.js";
import _asyncToGenerator from "../../../../../../_runtime/metro/00005__asyncToGenerator.js";
import timers_mod from "../../mobile/js/timers.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let c0;

let obj = function _initLibdiscore() {
  obj = _asyncToGenerator(async () => {
    if (c0 === 2) {
      c0 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c0 = 2;
        if (arg0 === 1) {
          c0 = 3;
          throw value;
        } else if (arg0 === 2) {
          c0 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          c0 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp3) {
        c0 = 3;
        throw tmp3;
      }
    }
  });
  return obj(...arguments);
};
const NativeModules = react_native.NativeModules;
let timers = timers_mod;
timers = timers.registerTimerPolyfills();
const result1 = size.fileFinishedImporting(
  "../discord_common/js/packages/libdiscore/js_shim/js/initLibdiscore.native.tsx",
);

export const isLibdiscoreInitialized = function isLibdiscoreInitialized() {
  return undefined !== NativeModules.LibDiscoreModule;
};
export const initLibdiscore = function initLibdiscore() {
  return obj(...arguments);
};
