// discord_app/modules/quests/native/AppStoreOverlay/AppStoreOverlayMediaModalWrapper.tsx
import ModalActionCreatorsDefault from "../../../../actions/ModalActionCreators.tsx";
import MediaModalSheetWrapperDefault from "../../../media_viewer/native/components/MediaModalSheetWrapper.tsx";
import MediaModalDefault from "../../../media_viewer/native/components/MediaModal.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ActionSheetStore from "../../../action_sheet/native/ActionSheetStore.tsx";

const require = fn;
const MEDIA_MODAL_KEY = fn(1074).MEDIA_MODAL_KEY;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/AppStoreOverlay/AppStoreOverlayMediaModalWrapper.tsx");

export default function AppStoreOverlayMediaModalWrapper(onCloseCallback) {
  const merged = Object.assign(onCloseCallback, Object.assign({ onCloseCallback: 0 }));
  const effect = noop.useEffect(
    () => () => {
      const result = onCloseCallback(closure_1_2[4]).clearMediaModalFooterAction();
    },
    [],
  );
  const items = [onCloseCallback.onCloseCallback];
  const callback = noop.useCallback(() => {
    if (onCloseCallback != null) {
      tmp();
    }
    ModalActionCreatorsDefault.popWithKey(MEDIA_MODAL_KEY);
  }, items);
  if (ActionSheetStore.isOpen()) {
    let obj = {};
    let tmp5Result = MediaModalSheetWrapperDefault;
    const merged1 = Object.assign(merged);
    obj.onCloseCallback = onCloseCallback;
    let tmp4Result = <tmp5Result />;
  } else {
    obj = {};
    tmp5Result = MediaModalDefault;
    const merged2 = Object.assign(merged);
    obj.onClose = callback;
    tmp4Result = <tmp5Result />;
  }
  return tmp4Result;
}
