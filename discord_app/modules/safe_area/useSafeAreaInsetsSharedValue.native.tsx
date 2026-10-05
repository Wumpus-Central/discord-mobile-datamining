// === Module 9773: useSafeAreaInsetsSharedValue ===

// Module 9773 (useSafeAreaInsetsSharedValue)
import AppEntryKeyContext from "AppEntryKeyContext" /* 1487 */;
import AppEntryKey from "AppEntryKey" /* 1631 */;
import subscribeToSafeAreaInsetsDefault from "subscribeToSafeAreaInsets" /* 9141 */;
import updateSharedValueIfChangedDefault from "updateSharedValueIfChanged" /* 9774 */;
import ReanimatedRexport_mod from "ReanimatedRexport" /* 4612 */;
import useSafeAreaInsets_mod from "useSafeAreaInsets" /* 1618 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let makeMutable;
let makeMutable2;
let obj2;
let obj3;
let obj = { main: makeMutable(obj2), share: makeMutable2(obj3) };
let ReanimatedRexport = ReanimatedRexport_mod;
makeMutable = ReanimatedRexport.makeMutable;
obj2 = {};
let useSafeAreaInsets = useSafeAreaInsets_mod;
const merged = Object.assign(useSafeAreaInsets.getSafeAreaInsets("main"));
ReanimatedRexport = ReanimatedRexport_mod;
makeMutable2 = ReanimatedRexport.makeMutable;
obj3 = {};
useSafeAreaInsets = useSafeAreaInsets_mod;
const merged1 = Object.assign(useSafeAreaInsets.getSafeAreaInsets("share"));
function _loop(iter) {
  let closure_0 = iter;
  subscribeToSafeAreaInsetsDefault((arg0) => {
    updateSharedValueIfChangedDefault(obj[iter], arg0);
  }, iter);
}
const iter = AppEntryKey.APP_ENTRY_KEYS[Symbol.iterator]();
while (iter !== undefined) {
  let _loopResult = _loop(iter.next());
  continue;
}
const __initData = { code: "function getSafeAreaInsetsWorklet_useSafeAreaInsetsSharedValueNativeTsx1(appEntryKey='main'){const{safeAreaInsetsSharedValues}=this.__closure;return safeAreaInsetsSharedValues[appEntryKey].get();}" };
const tmp7 = (() => {
  let __closure;
  function getSafeAreaInsetsWorklet() {
    let str = arg0;
    if (arg0 === undefined) {
      str = "main";
    }
    obj = closure_1_3[str];
    return obj.get();
  }
  __closure = { safeAreaInsetsSharedValues: __closure };
  getSafeAreaInsetsWorklet.__closure = __closure;
  getSafeAreaInsetsWorklet.__workletHash = 5220247127549;
  getSafeAreaInsetsWorklet.__initData = __initData;
  return getSafeAreaInsetsWorklet;
})();
const tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  obj = AppEntryKeyContext;
  return obj[obj.useAppEntryKey(obj)];
}) : (() => {
  obj = AppEntryKeyContext;
  return obj[obj.useAppEntryKey(obj)];
});
const result = size.fileFinishedImporting("modules/safe_area/useSafeAreaInsetsSharedValue.native.tsx");

export default tmp8;