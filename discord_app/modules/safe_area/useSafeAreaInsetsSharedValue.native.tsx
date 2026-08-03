// === Module 10574: _loop ===

// Module 10574 (_loop)
import module_4116 from "module_4116";
import useSafeAreaInsets from "useSafeAreaInsets";
import module_4116 from "module_4116";
import useSafeAreaInsets from "useSafeAreaInsets";

let obj = { main: null, share: null };
obj = {};
const merged = Object.assign(useSafeAreaInsets.getSafeAreaInsets("main"));
obj[0] = module_4116.makeMutable(obj);
obj = {};
const merged1 = Object.assign(useSafeAreaInsets.getSafeAreaInsets("share"));
obj[1] = module_4116.makeMutable(obj);
function _loop(iter) {
  let closure_0 = iter;
  importDefault(10575)((arg0) => {
    outer1_1(outer1_2[3])(outer1_3[closure_0], arg0);
  }, iter);
}
const iter = require("APP_ENTRY_KEYS").APP_ENTRY_KEYS[Symbol.iterator]();
while (iter !== undefined) {
  let _loopResult = _loop(iter.next());
  continue;
}
let closure_4 = { code: "function getSafeAreaInsetsWorklet_useSafeAreaInsetsSharedValueNativeTsx1(appEntryKey='main'){const{safeAreaInsetsSharedValues}=this.__closure;return safeAreaInsetsSharedValues[appEntryKey].get();}" };
const tmp5 = (() => {
  export function getSafeAreaInsetsWorklet() {
    let str = arg0;
    if (arg0 === undefined) {
      str = "main";
    }
    return table[str].get();
  }
  obj = { safeAreaInsetsSharedValues: obj };
  getSafeAreaInsetsWorklet.__closure = obj;
  getSafeAreaInsetsWorklet.__workletHash = 5220247127549;
  getSafeAreaInsetsWorklet.__initData = closure_4;
  return getSafeAreaInsetsWorklet;
})();
const result = require("subscribeToSafeAreaInsets").fileFinishedImporting("modules/safe_area/useSafeAreaInsetsSharedValue.native.tsx");

export default function useSafeAreaInsetsSharedValue() {
  const obj = require(1477) /* context */;
  return obj[obj.useAppEntryKey(obj)];
};