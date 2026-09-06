// === Module 8288: MediaModalSheetWrapper ===

// Module 8288 (MediaModalSheetWrapper)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import noop from "module_19" /* 19 */;

const MEDIA_MODAL_KEY = fn(1074).MEDIA_MODAL_KEY;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_viewer/native/components/MediaModalSheetWrapper.tsx");

export default function MediaModalSheetWrapper(onCloseCallback) {
  onCloseCallback = onCloseCallback.onCloseCallback;
  const merged = Object.assign(onCloseCallback, Object.assign({ onCloseCallback: 0 }));
  let context;
  context = noop.useContext(onCloseCallback(context[3]));
  const items = [context];
  const effect = noop.useEffect(() => {
    let transitionState;
    if (context != null) {
      transitionState = context.transitionState;
    }
    if ("exiting" === transitionState) {
      context.onLeave();
    }
  }, items);
  const items1 = [onCloseCallback];
  const callback = noop.useCallback(() => {
    if (onCloseCallback != null) {
      tmp();
    }
    ActionSheetActionCreatorsDefault.hideActionSheet(MEDIA_MODAL_KEY);
  }, items1);
  const obj = {};
  const merged1 = Object.assign(merged);
  obj.onClose = callback;
  return jsx(onCloseCallback(context[5]), {});
};