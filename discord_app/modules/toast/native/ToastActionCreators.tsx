// === Module 4809: ToastActionCreators ===

// Module 4809 (ToastActionCreators)
import toastUtils from "toastUtils" /* 4810 */;
import size from "module_2" /* 2 */;

require = null;
let global = null;
const result = size.fileFinishedImporting("modules/toast/native/ToastActionCreators.tsx");

export default {
  open(arg0, arg1) {
    let tmp = global === arg0;
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
      global = arg0;
      toastUtils.showToast(arg1);
    }
  },
  close() {
    toastUtils.popToast();
  }
};