// discord_app/modules/safe_area/useSafeAreaInsetsSharedValue.native.tsx
import AppEntryKeyContext from "../window/native/AppEntryKeyContext.tsx";
import AppEntryKey from "../window/native/AppEntryKey.tsx";
import subscribeToSafeAreaInsetsDefault from "subscribeToSafeAreaInsets.native.tsx";
import updateSharedValueIfChangedDefault from "../reanimated/utils/updateSharedValueIfChanged.native.tsx";
import ReanimatedRexport from "../reanimated/ReanimatedRexport.tsx";
import useSafeAreaInsets from "useSafeAreaInsets.native.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
const __initData = {
  code: "function getSafeAreaInsetsWorklet_useSafeAreaInsetsSharedValueNativeTsx1(appEntryKey='main'){const{safeAreaInsetsSharedValues}=this.__closure;return safeAreaInsetsSharedValues[appEntryKey].get();}",
};
const result = size.fileFinishedImporting("modules/safe_area/useSafeAreaInsetsSharedValue.native.tsx");

export default function useSafeAreaInsetsSharedValue() {
  obj = AppEntryKeyContext;
  return obj[obj.useAppEntryKey(obj)];
}
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
