// discord_app/modules/toast/native/ToastStore.tsx
import get_initializedDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../../Dispatcher.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let key;

let c0 = null;
const Store = get_initializedDefault.Store;
class ToastStore extends Store {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.getContent = function getContent() {
      return _null;
    };
    return applyArgumentsResult;
  }
}
ToastStore.displayName = "ToastStore";
const obj = {
  TOAST_OPEN: function handleOpen(toastProps) {
    toastProps = toastProps.toastProps;
    key = undefined;
    if (key != null) {
      key = key.key;
    }
    if (key === toastProps.key) {
      return false;
    } else {
      key = toastProps;
    }
  },
  TOAST_CLOSE: function handleClose() {
    let c0 = null;
  },
};
const toastStore = new ToastStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/toast/native/ToastStore.tsx");

export default toastStore;
