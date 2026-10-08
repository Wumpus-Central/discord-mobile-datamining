// === Module 4766: ToastActionCreators ===

// Module 4766 (ToastActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import toastUtils from "toastUtils" /* 4767 */;
import size from "module_2" /* 2 */;

require = null;
let global = null;
const result = size.fileFinishedImporting("modules/toast/native/ToastActionCreators.tsx");

export default {
  open(key) {
    _require = key;
    let flag = false;
    if (obj.getDesignSystemsNotificationComponents("ToastActionCreators")) {
      const toManaToastResult = tmp(4773).toManaToast(key);
      let flag2 = null != toManaToastResult;
      if (flag2) {
        let tmp6 = key === key;
        if (tmp6) {
          tmp6 = null != require;
        }
        if (tmp6) {
          const useToastStore = tmp(4767).useToastStore;
          const currentToastMap = useToastStore.getState().currentToastMap;
          value = currentToastMap.get("app");
          let toast;
          if (value != null) {
            toast = value.toast;
          }
          tmp6 = toast === require;
        }
        flag2 = true;
        if (!tmp6) {
          require = toManaToastResult;
          tmp(4767).showToast(toManaToastResult);
          flag2 = true;
          const tmpResult2 = tmp(4767);
        }
      }
      flag = flag2;
      const tmpResult = tmp(4773);
    }
    if (!flag) {
      DispatcherDefault.wait(() => DispatcherDefault.dispatch({ type: "TOAST_OPEN", toastProps }));
    }
    obj = require("DesignSystemsNotificationComponentsExperiment");
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
    DispatcherDefault.wait(() => DispatcherDefault.dispatch({ type: "TOAST_CLOSE" }));
  }
};