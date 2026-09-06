// === Module 11510: AppStoreOverlayMediaModalWrapper ===

// Module 11510 (AppStoreOverlayMediaModalWrapper)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4763 */;
import noop from "module_19" /* 19 */;
import ActionSheetStore from "ActionSheetStore" /* 4251 */;

const require = fn;
const MEDIA_MODAL_KEY = fn(1074).MEDIA_MODAL_KEY;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/AppStoreOverlay/AppStoreOverlayMediaModalWrapper.tsx");

export default function AppStoreOverlayMediaModalWrapper(onCloseCallback) {
  onCloseCallback = onCloseCallback.onCloseCallback;
  const merged = Object.assign(onCloseCallback, Object.assign({ onCloseCallback: 0 }));
  const effect = noop.useEffect(() => () => {
    const result = onCloseCallback(closure_1_2[4]).clearMediaModalFooterAction();
  }, []);
  const items = [onCloseCallback];
  const callback = noop.useCallback(() => {
    if (onCloseCallback != null) {
      tmp();
    }
    ModalActionCreatorsDefault.popWithKey(MEDIA_MODAL_KEY);
  }, items);
  if (ActionSheetStore.isOpen()) {
    let obj = {};
    let tmp5Result = tmp5(8288);
    const merged1 = Object.assign(merged);
    obj.onCloseCallback = onCloseCallback;
    let tmp4Result = tmp4(tmp5Result, obj);
  } else {
    obj = {};
    tmp5Result = tmp5(8289);
    const merged2 = Object.assign(merged);
    obj.onClose = callback;
    tmp4Result = tmp4(tmp5Result, obj);
  }
  return tmp4Result;
};