// === Module 11696: useSafeAreaInsetsSharedValue ===

// Module 11696 (useSafeAreaInsetsSharedValue)
import AppEntryKeyContext from "AppEntryKeyContext" /* 1481 */;
import AppEntryKey from "AppEntryKey" /* 1625 */;
import subscribeToSafeAreaInsetsDefault from "subscribeToSafeAreaInsets" /* 9813 */;
import updateSharedValueIfChangedDefault from "updateSharedValueIfChanged" /* 11697 */;
import ReanimatedRexport_mod from "ReanimatedRexport" /* 4559 */;
import useSafeAreaInsets_mod from "useSafeAreaInsets" /* 1612 */;
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
const result = size.fileFinishedImporting("modules/safe_area/useSafeAreaInsetsSharedValue.native.tsx");

export default function useSafeAreaInsetsSharedValue() {
  obj = AppEntryKeyContext;
  return obj[obj.useAppEntryKey(obj)];
};
export const getSafeAreaInsetsWorklet = (() => {
  function getSafeAreaInsetsWorklet() {
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