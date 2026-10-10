// discord_app/modules/toast/native/ToastActionCreators.tsx
import toastUtils from "../../../design/mana/components/Toast/toastUtils.native.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
  },
};
