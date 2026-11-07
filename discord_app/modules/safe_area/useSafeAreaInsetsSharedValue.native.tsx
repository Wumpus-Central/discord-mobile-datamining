// === Module 11384: useSafeAreaInsetsSharedValue ===

// Module 11384 (useSafeAreaInsetsSharedValue)
import AppEntryKeyContext from "AppEntryKeyContext" /* 1496 */;
import AppEntryKey from "AppEntryKey" /* 1640 */;
import updateSharedValueIfChangedDefault from "updateSharedValueIfChanged" /* 11367 */;
import subscribeToSafeAreaInsetsDefault from "subscribeToSafeAreaInsets" /* 11385 */;
import module_1652_mod from "module_1652" /* 1652 */;
import useSafeAreaInsets_mod from "useSafeAreaInsets" /* 1627 */;
import size from "module_2" /* 2 */;

let obj = { main: null, share: null };
let module_1652 = module_1652_mod;
let useSafeAreaInsets = useSafeAreaInsets_mod;
const merged = Object.assign(useSafeAreaInsets.getSafeAreaInsets("main"));
obj.main = module_1652.makeMutable({});
let module_1652 = module_1652_mod;
let useSafeAreaInsets = useSafeAreaInsets_mod;
const merged1 = Object.assign(useSafeAreaInsets.getSafeAreaInsets("share"));
obj.share = module_1652.makeMutable({});
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
let items = [{ code: "(function getSafeAreaInsetsWorklet_useSafeAreaInsetsSharedValueNativeTsx1(appEntryKey='main'){let[safeAreaInsetsSharedValues]=this.__closure;return safeAreaInsetsSharedValues[appEntryKey].get();})" }, obj];
const result = size.fileFinishedImporting("modules/safe_area/useSafeAreaInsetsSharedValue.native.tsx");

export default function useSafeAreaInsetsSharedValue() {
  obj = AppEntryKeyContext;
  return obj[obj.useAppEntryKey(obj)];
};
export const getSafeAreaInsetsWorklet = (function getSafeAreaInsetsWorklet_useSafeAreaInsetsSharedValueNativeTsx1Factory(items) {
  [tmp, tmp2] = items;
  function getSafeAreaInsetsWorklet() {
    let str = arg0;
    if (arg0 === undefined) {
      str = "main";
    }
    return require[str].get();
  }
  items = [tmp2];
  getSafeAreaInsetsWorklet.__closure = items;
  getSafeAreaInsetsWorklet.__workletHash = 50436263204;
  getSafeAreaInsetsWorklet.__initData = tmp;
  return getSafeAreaInsetsWorklet;
})(items);