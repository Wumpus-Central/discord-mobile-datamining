// === Module 10990: _loop ===

// Module 10990 (_loop)
import set from "set" /* 2 */;
import context from "context" /* 1496 */;
import APP_ENTRY_KEYS from "APP_ENTRY_KEYS" /* 1641 */;
import subscribeToSafeAreaInsetsDefault from "subscribeToSafeAreaInsets" /* 9615 */;
import module_4217 from "module_4217" /* 4217 */;
import useSafeAreaInsets from "useSafeAreaInsets" /* 1628 */;

let obj = { main: null, share: null };
obj = {};
const merged = Object.assign(useSafeAreaInsets.getSafeAreaInsets("main"));
obj[0] = module_4217.makeMutable(obj);
obj = {};
const merged1 = Object.assign(useSafeAreaInsets.getSafeAreaInsets("share"));
obj[1] = module_4217.makeMutable(obj);
function _loop(iter) {
  closure_0 = iter;
  subscribeToSafeAreaInsetsDefault((arg0) => {
    closure_1_1(closure_1_2[3])(closure_1_3[closure_0], arg0);
  }, iter);
}
const iter = APP_ENTRY_KEYS.APP_ENTRY_KEYS[Symbol.iterator]();
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
const result = set.fileFinishedImporting("modules/safe_area/useSafeAreaInsetsSharedValue.native.tsx");

export default function useSafeAreaInsetsSharedValue() {
  obj = context;
  return obj[obj.useAppEntryKey(obj)];
};