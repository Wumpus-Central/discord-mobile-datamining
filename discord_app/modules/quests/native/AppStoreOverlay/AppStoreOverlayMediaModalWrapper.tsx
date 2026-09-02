// discord_app/modules/quests/native/AppStoreOverlay/AppStoreOverlayMediaModalWrapper.tsx
import closure_3 from "../../../../../_runtime/00019_noop.js";
import closure_4 from "../../../action_sheet/native/ActionSheetStore.tsx";
import { MEDIA_MODAL_KEY } from "../../../../Constants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

const require = arg1;
let result = require("set").fileFinishedImporting(
  "modules/quests/native/AppStoreOverlay/AppStoreOverlayMediaModalWrapper.tsx",
);

export default function AppStoreOverlayMediaModalWrapper(onCloseCallback) {
  onCloseCallback = onCloseCallback.onCloseCallback;
  const merged = Object.assign(onCloseCallback, Object.create(null));
  const effect = React.useEffect(
    () => () => {
      const result = callback(table[4]).clearMediaModalFooterAction();
    },
    [],
  );
  const items = [onCloseCallback];
  const callback = React.useCallback(() => {
    if (onCloseCallback != null) {
      tmp();
    }
    closure_1_1(closure_1_2[5]).popWithKey(closure_1_5);
  }, items);
  if (open.isOpen()) {
    let obj = {};
    let tmp5Result = tmp5(8598);
    const merged1 = Object.assign(merged);
    obj.onCloseCallback = onCloseCallback;
    let tmp4Result = tmp4(tmp5Result, obj);
  } else {
    obj = {};
    tmp5Result = tmp5(8599);
    const merged2 = Object.assign(merged);
    obj.onClose = callback;
    tmp4Result = tmp4(tmp5Result, obj);
  }
  return tmp4Result;
}
