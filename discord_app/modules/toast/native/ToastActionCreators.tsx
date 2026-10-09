// === Module 4768: ToastActionCreators ===

// Module 4768 (ToastActionCreators)
import toastUtils from "toastUtils" /* 4769 */;
import toastMapping from "toastMapping" /* 4774 */;
import size from "module_2" /* 2 */;

require = null;
let global = null;
const result = size.fileFinishedImporting("modules/toast/native/ToastActionCreators.tsx");

export default {
  open(key) {
    const toManaToastResult = toastMapping.toManaToast(key.key);
    let tmp4 = global === key;
    if (tmp4) {
      tmp4 = null != require;
    }
    if (tmp4) {
      const useToastStore = tmp(4769).useToastStore;
      const currentToastMap = useToastStore.getState().currentToastMap;
      value = currentToastMap.get("app");
      let toast;
      if (value != null) {
        toast = value.toast;
      }
      tmp4 = toast === require;
    }
    if (!tmp4) {
      require = toManaToastResult;
      global = key;
      tmp(4769).showToast(toManaToastResult);
      const tmpResult = tmp(4769);
    }
  },
  openMana(DEV_IN_APP_NOTIF_TEST_ERROR, arg1) {
    let tmp = global === DEV_IN_APP_NOTIF_TEST_ERROR;
    if (tmp) {
      tmp = null != require;
    }
    if (tmp) {
      const useToastStore = toastUtils.useToastStore;
      const currentToastMap = useToastStore.getState().currentToastMap;
      value = currentToastMap.get("app");
      let toast;
      if (value != null) {
        toast = value.toast;
      }
      tmp = toast === require;
    }
    if (!tmp) {
      require = arg1;
      global = DEV_IN_APP_NOTIF_TEST_ERROR;
      toastUtils.showToast(arg1);
    }
  },
  close() {
    toastUtils.popToast();
  }
};