// discord_app/modules/safe_area/useSafeAreaInsetsSharedValue.native.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import context from "../window/native/AppEntryKeyContext.tsx";
import APP_ENTRY_KEYS from "../window/native/AppEntryKey.tsx";
import subscribeToSafeAreaInsetsDefault from "subscribeToSafeAreaInsets.native.tsx";
import uDefault from "../reanimated/utils/updateSharedValueIfChanged.native.tsx";
import ReanimatedRexport from "../reanimated/ReanimatedRexport.tsx";
import useSafeAreaInsets from "useSafeAreaInsets.native.tsx";

let obj = {};
const merged = Object.assign(useSafeAreaInsets.getSafeAreaInsets("main"));
obj[0] = module_4115.makeMutable(obj);
obj = {};
const merged1 = Object.assign(useSafeAreaInsets.getSafeAreaInsets("share"));
obj[1] = module_4115.makeMutable(obj);
function _loop(iter) {
  closure_0 = iter;
  subscribeToSafeAreaInsetsDefault((arg0) => {
    uDefault(obj[closure_0], arg0);
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
const result = obj132.fileFinishedImporting("modules/safe_area/useSafeAreaInsetsSharedValue.native.tsx");

export default function useSafeAreaInsetsSharedValue() {
  obj = context;
  return obj[obj.useAppEntryKey(obj)];
};