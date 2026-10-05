// === Module 7962: MediaModalSheetWrapper ===

// Module 7962 (MediaModalSheetWrapper)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1085 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, onCloseCallback;

let closure_3 = ["onCloseCallback"];
const MEDIA_MODAL_KEY = Constants.MEDIA_MODAL_KEY;
const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((onCloseCallback) => {
  let closure_0;
  let context;
  let tmp10;
  let tmp11;
  let tmp13;
  let tmp4;
  let obj = require("react");
  const cResult = obj.c(11);
  if (cResult[0] !== onCloseCallback) {
    _require = onCloseCallback;
    const tmp7 = _objectWithoutProperties(onCloseCallback.onCloseCallback, closure_3);
    cResult[0] = onCloseCallback.onCloseCallback;
    cResult[1] = onCloseCallback.onCloseCallback;
    cResult[2] = tmp7;
    tmp4 = tmp7;
  } else {
    _require = cResult[1];
    tmp4 = cResult[2];
  }
  const tmp8 = context;
  context = react.useContext(context(6647));
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
    tmp11 = items;
    tmp10 = fn;
  } else {
    tmp10 = cResult[4];
    tmp11 = cResult[5];
  }
  const effect = react.useEffect(tmp10, tmp11);
  if (cResult[6] !== tmp3) {
    const fn2 = function b() {
      if (closure_0 != null) {
        tmp();
      }
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet(MEDIA_MODAL_KEY);
    };
    cResult[6] = tmp3;
    cResult[7] = fn2;
    tmp13 = fn2;
  } else {
    tmp13 = cResult[7];
  }
  if (cResult[8] === tmp13) {
    let tmp14;
    if (cResult[9] === tmp4) {
      tmp14 = cResult[10];
    }
    return tmp14;
  }
  tmp8(7963);
  const merged = Object.assign(tmp4);
  const tmp17 = <tmp8Result onClose={tmp13} />;
  cResult[8] = tmp13;
  cResult[9] = tmp4;
  cResult[10] = tmp17;
  tmp14 = tmp17;
}) : ((onCloseCallback) => {
  onCloseCallback = onCloseCallback.onCloseCallback;
  const merged = Object.assign(onCloseCallback, Object.assign({ onCloseCallback: 0 }));
  let context;
  context = react.useContext(context(6647));
  const items = [context];
  const effect = react.useEffect(() => {
    let transitionState;
    if (context != null) {
      transitionState = context.transitionState;
    }
    if ("exiting" === transitionState) {
      context.onLeave();
    }
  }, items);
  const items1 = [onCloseCallback];
  const callback = react.useCallback(() => {
    if (onCloseCallback != null) {
      tmp();
    }
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet(MEDIA_MODAL_KEY);
  }, items1);
  context(7963);
  const merged1 = Object.assign(merged);
  return <tmp5 onClose={callback} />;
});
const result = size.fileFinishedImporting("modules/media_viewer/native/components/MediaModalSheetWrapper.tsx");

export default tmp2;