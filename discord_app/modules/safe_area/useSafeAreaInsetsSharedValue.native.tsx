// === Module 11353: useSafeAreaInsetsSharedValue ===

// Module 11353 (useSafeAreaInsetsSharedValue)
import AppEntryKeyContext from "AppEntryKeyContext" /* 1480 */;
import AppEntryKey from "AppEntryKey" /* 1624 */;
import subscribeToSafeAreaInsetsDefault from "subscribeToSafeAreaInsets" /* 9646 */;
import updateSharedValueIfChangedDefault from "updateSharedValueIfChanged" /* 11354 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4296 */;
import useSafeAreaInsets from "useSafeAreaInsets" /* 1611 */;
import size from "module_2" /* 2 */;

let obj = { main: null, share: null };
obj = {};
const merged = Object.assign(useSafeAreaInsets.getSafeAreaInsets("main"));
obj.main = ReanimatedRexport.makeMutable(obj);
obj = {};
const merged1 = Object.assign(useSafeAreaInsets.getSafeAreaInsets("share"));
obj.share = ReanimatedRexport.makeMutable(obj);
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