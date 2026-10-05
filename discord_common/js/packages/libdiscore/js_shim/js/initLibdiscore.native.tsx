// === Module 566: initLibdiscore ===

// Module 566 (initLibdiscore)
import react_native from "react-native" /* 17 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import timers_mod from "timers" /* 567 */;
import size from "module_2" /* 2 */;

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
const result1 = size.fileFinishedImporting("../discord_common/js/packages/libdiscore/js_shim/js/initLibdiscore.native.tsx");

export const isLibdiscoreInitialized = function isLibdiscoreInitialized() {
  return undefined !== NativeModules.LibDiscoreModule;
};
export const initLibdiscore = function initLibdiscore() {
  return obj(...arguments);
};