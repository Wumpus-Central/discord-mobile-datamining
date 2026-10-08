// === Module 10350: useSafeAreaInsetsSharedValue ===

// Module 10350 (useSafeAreaInsetsSharedValue)
import AppEntryKeyContext from "AppEntryKeyContext" /* 1499 */;
import AppEntryKey from "AppEntryKey" /* 1643 */;
import subscribeToSafeAreaInsetsDefault from "subscribeToSafeAreaInsets" /* 10351 */;
import updateSharedValueIfChangedDefault from "updateSharedValueIfChanged" /* 10352 */;
import ReanimatedRexport_mod from "ReanimatedRexport" /* 4810 */;
import useSafeAreaInsets_mod from "useSafeAreaInsets" /* 1630 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj = { main: null, share: null };
let ReanimatedRexport = ReanimatedRexport_mod;
let useSafeAreaInsets = useSafeAreaInsets_mod;
const merged = Object.assign(useSafeAreaInsets.getSafeAreaInsets("main"));
obj.main = ReanimatedRexport.makeMutable({});
let ReanimatedRexport = ReanimatedRexport_mod;
let useSafeAreaInsets = useSafeAreaInsets_mod;
const merged1 = Object.assign(useSafeAreaInsets.getSafeAreaInsets("share"));
obj.share = ReanimatedRexport.makeMutable({});
function _loop(iter) {
  closure_0 = iter;
  subscribeToSafeAreaInsetsDefault((arg0) => {
    updateSharedValueIfChangedDefault(obj[closure_0], arg0);
  }, iter);
}
const iter = AppEntryKey.APP_ENTRY_KEYS[Symbol.iterator]();
while (iter !== undefined) {
  let _loopResult = _loop(iter.next());
  continue;
}
const __initData = { code: "function getSafeAreaInsetsWorklet_useSafeAreaInsetsSharedValueNativeTsx1(appEntryKey='main'){const{safeAreaInsetsSharedValues}=this.__closure;return safeAreaInsetsSharedValues[appEntryKey].get();}" };
const obj2 = {};
const obj3 = {};
const tmp5 = (() => {
  export function getSafeAreaInsetsWorklet() {
    let str = arg0;
    if (arg0 === undefined) {
      str = "main";
    }
    return obj[str].get();
  }
  __closure = { safeAreaInsetsSharedValues: __closure };
  getSafeAreaInsetsWorklet.__closure = __closure;
  getSafeAreaInsetsWorklet.__workletHash = 5220247127549;
  getSafeAreaInsetsWorklet.__initData = __initData;
  return getSafeAreaInsetsWorklet;
})();
const result = size.fileFinishedImporting("modules/safe_area/useSafeAreaInsetsSharedValue.native.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useSafeAreaInsetsSharedValue() {
  obj = AppEntryKeyContext;
  return obj[obj.useAppEntryKey(obj)];
}) : (function useSafeAreaInsetsSharedValue() {
  obj = AppEntryKeyContext;
  return obj[obj.useAppEntryKey(obj)];
});