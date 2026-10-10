// === Module 14198: PassthroughTouchView ===

// Module 14198 (PassthroughTouchView)
import c from "c" /* 576 */;
import PassthroughTouchNativeComponentDefault from "PassthroughTouchNativeComponent" /* 14199 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_3 = ["onTouchDown"];
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/void/PassthroughTouchView/native/PassthroughTouchView.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function PassthroughTouchView(onTouchDown) {
  const cResult = c.c(6);
  if (cResult[0] !== onTouchDown) {
    onTouchDown = onTouchDown.onTouchDown;
    const tmp7 = _objectWithoutProperties(onTouchDown, closure_3);
    cResult[0] = onTouchDown;
    cResult[1] = onTouchDown;
    cResult[2] = tmp7;
    let tmp4 = tmp7;
    let tmp3 = onTouchDown;
  } else {
    tmp3 = cResult[1];
    tmp4 = cResult[2];
  }
  if (cResult[3] === tmp3) {
    if (cResult[4] === tmp4) {
      let tmp8 = cResult[5];
    }
    return tmp8;
  }
  const obj2 = {};
  const merged = Object.assign(tmp4);
  obj2.onTouchDown = tmp3;
  obj2.pointerEvents = "box-none";
  const tmp11 = jsx(PassthroughTouchNativeComponentDefault, {});
  cResult[3] = tmp3;
  cResult[4] = tmp4;
  cResult[5] = tmp11;
  tmp8 = tmp11;
}) : (function PassthroughTouchView(onTouchDown) {
  const merged = Object.assign(onTouchDown, Object.assign({ onTouchDown: 0 }));
  const obj = {};
  const merged1 = Object.assign(merged);
  obj.onTouchDown = onTouchDown.onTouchDown;
  obj.pointerEvents = "box-none";
  return jsx(PassthroughTouchNativeComponentDefault, {});
});