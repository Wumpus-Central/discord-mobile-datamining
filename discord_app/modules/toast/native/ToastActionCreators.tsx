// === Module 4574: ToastActionCreators ===

// Module 4574 (ToastActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import toastUtils from "toastUtils" /* 4575 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c3 = null;
let c4 = null;
let obj = {
  open(key) {
    let toastProps;
    _require = key;
    let obj = require("DesignSystemsNotificationComponentsExperiment");
    let flag = false;
    if (obj.getDesignSystemsNotificationComponents("ToastActionCreators")) {
      const tmpResult = require("toastMapping");
      const toManaToastResult = tmpResult.toManaToast(key);
      let flag2 = null != toManaToastResult;
      if (flag2) {
        let tmp6 = key === key && null != c3;
        if (tmp6) {
          const useToastStore = tmp(4575).useToastStore;
          const currentToastMap = useToastStore.getState().currentToastMap;
          const value = currentToastMap.get("app");
          let toast;
          if (value != null) {
            toast = value.toast;
          }
          tmp6 = toast === c3;
        }
        flag2 = true;
        if (!tmp6) {
          c3 = toManaToastResult;
          const tmpResult2 = require("toastUtils");
          tmpResult2.showToast(toManaToastResult);
          flag2 = true;
        }
      }
      flag = flag2;
    }
    if (!flag) {
      const obj4 = DispatcherDefault;
      obj4.wait(() => {
        const obj = DispatcherDefault;
        const obj2 = { type: "TOAST_OPEN", toastProps };
        return obj.dispatch(obj2);
      });
    }
  },
  openMana(DEV_IN_APP_NOTIF_TEST_ERROR, toManaToastResult) {
    let tmp = c4 === DEV_IN_APP_NOTIF_TEST_ERROR && null != c3;
    if (tmp) {
      const useToastStore = toastUtils.useToastStore;
      const currentToastMap = useToastStore.getState().currentToastMap;
      const value = currentToastMap.get("app");
      let toast;
      if (value != null) {
        toast = value.toast;
      }
      tmp = toast === c3;
    }
    if (!tmp) {
      c3 = toManaToastResult;
      c4 = DEV_IN_APP_NOTIF_TEST_ERROR;
      const obj = toastUtils;
      obj.showToast(toManaToastResult);
    }
  },
  close() {
    let obj = toastUtils;
    obj.popToast();
    const obj2 = DispatcherDefault;
    obj2.wait(() => {
      const obj = DispatcherDefault;
      return obj.dispatch({ type: "TOAST_CLOSE" });
    });
  }
};
const result = size.fileFinishedImporting("modules/toast/native/ToastActionCreators.tsx");

export default obj;