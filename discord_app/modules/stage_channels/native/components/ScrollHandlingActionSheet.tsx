// === Module 9479: ScrollHandlingActionSheet ===

// Module 9479 (ScrollHandlingActionSheet)
import c from "c" /* 576 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 6652 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_2 = ["children", "scrollableDeviceHeightBreakpoint"];
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/native/components/ScrollHandlingActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(6);
  if (cResult[0] !== arg0) {
    ({ children, scrollableDeviceHeightBreakpoint } = arg0);
    const tmp8 = _objectWithoutProperties(arg0, closure_2);
    cResult[0] = arg0;
    cResult[1] = children;
    cResult[2] = tmp8;
    let tmp5 = tmp8;
    let tmp4 = children;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  if (cResult[3] === tmp4) {
    if (cResult[4] === tmp5) {
      let tmp9 = cResult[5];
    }
    return tmp9;
  }
  const obj2 = { startExpanded: true };
  const merged = Object.assign(tmp5);
  obj2.children = tmp4;
  const tmp11 = jsx(Sheet_BottomSheet.BottomSheet, { startExpanded: true });
  cResult[3] = tmp4;
  cResult[4] = tmp5;
  cResult[5] = tmp11;
  tmp9 = tmp11;
}) : ((children) => {
  const merged = Object.assign(children, Object.assign({ children: 0, scrollableDeviceHeightBreakpoint: 0 }));
  const obj = { startExpanded: true };
  const merged1 = Object.assign(merged);
  obj.children = children.children;
  return jsx(Sheet_BottomSheet.BottomSheet, { startExpanded: true });
});