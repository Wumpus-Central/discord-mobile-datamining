// === Module 7973: MediaModalSheetWrapper ===

// Module 7973 (MediaModalSheetWrapper)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
let closure_3 = ["onCloseCallback"];
const MEDIA_MODAL_KEY = fn(1085).MEDIA_MODAL_KEY;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_viewer/native/components/MediaModalSheetWrapper.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((onCloseCallback) => {
  const cResult = require("c").c(11);
  if (cResult[0] !== onCloseCallback) {
    _require = onCloseCallback;
    const tmp7 = _objectWithoutProperties(onCloseCallback.onCloseCallback, closure_3);
    cResult[0] = onCloseCallback.onCloseCallback;
    cResult[1] = onCloseCallback.onCloseCallback;
    cResult[2] = tmp7;
    let tmp4 = tmp7;
  } else {
    _require = cResult[1];
    tmp4 = cResult[2];
  }
  context = noop.useContext(context(6654));
  if (cResult[3] !== context) {
    const fn = function f() {
      let transitionState;
      if (context != null) {
        transitionState = context.transitionState;
      }
      if ("exiting" === transitionState) {
        context.onLeave();
      }
    };
    const items = [context];
    cResult[3] = context;
    cResult[4] = fn;
    cResult[5] = items;
    let tmp11 = items;
    let tmp10 = fn;
  } else {
    tmp10 = cResult[4];
    tmp11 = cResult[5];
  }
  const effect = noop.useEffect(tmp10, tmp11);
  if (cResult[6] !== tmp3) {
    const fn2 = function b() {
      if (closure_0 != null) {
        tmp();
      }
      ActionSheetActionCreatorsDefault.hideActionSheet(MEDIA_MODAL_KEY);
    };
    cResult[6] = tmp3;
    cResult[7] = fn2;
    let tmp13 = fn2;
  } else {
    tmp13 = cResult[7];
  }
  if (cResult[8] === tmp13) {
    if (cResult[9] === tmp4) {
      let tmp14 = cResult[10];
    }
    return tmp14;
  }
  const obj3 = {};
  const obj = require("c");
  const merged = Object.assign(tmp4);
  obj3.onClose = tmp13;
  const tmp17 = jsx(context(7974), {});
  cResult[8] = tmp13;
  cResult[9] = tmp4;
  cResult[10] = tmp17;
  tmp14 = tmp17;
  const tmp8Result = context(7974);
}) : ((onCloseCallback) => {
  onCloseCallback = onCloseCallback.onCloseCallback;
  const merged = Object.assign(onCloseCallback, Object.assign({ onCloseCallback: 0 }));
  let context;
  context = noop.useContext(context(6654));
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
  return jsx(context(7974), {});
});