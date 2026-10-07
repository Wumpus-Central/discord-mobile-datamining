// discord_app/modules/toast/native/ToastActionCreators.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import toastUtils from "../../../design/mana/components/Toast/toastUtils.native.tsx";
import size from "../../../../_runtime/metro/00002__.js";

require = null;
let global = null;
const result = size.fileFinishedImporting("modules/toast/native/ToastActionCreators.tsx");

export default {
  open(key) {
    _require = key;
    let flag = false;
    if (obj.getDesignSystemsNotificationComponents("ToastActionCreators")) {
      const toManaToastResult = tmp(4581).toManaToast(key);
      let flag2 = null != toManaToastResult;
      if (flag2) {
        let tmp6 = key === key;
        if (tmp6) {
          tmp6 = null != require;
        }
        if (tmp6) {
          const useToastStore = tmp(4575).useToastStore;
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
          tmp(4575).showToast(toManaToastResult);
          flag2 = true;
          const tmpResult2 = tmp(4575);
        }
      }
      flag = flag2;
      const tmpResult = tmp(4581);
    }
    if (!flag) {
      DispatcherDefault.wait(() => DispatcherDefault.dispatch({ type: "TOAST_OPEN", toastProps }));
    }
    obj = require("DesignSystemsNotificationComponentsExperiment");
  },
  openMana(DEV_IN_APP_NOTIF_TEST_ERROR, toManaToastResult) {
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
      require = toManaToastResult;
      global = DEV_IN_APP_NOTIF_TEST_ERROR;
      toastUtils.showToast(toManaToastResult);
    }
  },
  close() {
    toastUtils.popToast();
    DispatcherDefault.wait(() => DispatcherDefault.dispatch({ type: "TOAST_CLOSE" }));
  },
};
