// === Module 10904: ConjureAppInstallSheet ===

// Module 10904 (ConjureAppInstallSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import noop from "module_19" /* 19 */;

let jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/shared/native/ConjureAppInstallSheet.tsx");

export default function ConjureAppInstallSheet(sheetKey) {
  sheetKey = sheetKey.sheetKey;
  const dismissOAuthModal = sheetKey.dismissOAuthModal;
  const merged = Object.assign(sheetKey, Object.assign({ sheetKey: 0, dismissOAuthModal: 0 }));
  let context;
  context = context.useContext(sheetKey(dismissOAuthModal[2]));
  jsx = context.useRef(false);
  const items = [dismissOAuthModal];
  const callback = context.useCallback(() => {
    if (!ref.current) {
      tmp.current = true;
      if (dismissOAuthModal != null) {
        tmp2();
      }
    }
  }, items);
  const items1 = [context, callback];
  const effect = context.useEffect(() => {
    let transitionState;
    if (context != null) {
      transitionState = context.transitionState;
    }
    if ("exiting" === transitionState) {
      callback();
      context.onLeave();
    }
  }, items1);
  const items2 = [callback];
  const effect1 = context.useEffect(() => callback, items2);
  const items3 = [callback, sheetKey];
  const callback1 = context.useCallback(() => {
    callback();
    ActionSheetActionCreatorsDefault.hideActionSheet(sheetKey);
  }, items3);
  const obj = {};
  const merged1 = Object.assign(merged);
  obj.dismissOAuthModal = callback1;
  return jsx(sheetKey(dismissOAuthModal[4]), {});
};