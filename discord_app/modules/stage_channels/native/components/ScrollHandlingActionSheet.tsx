// === Module 9466: ScrollHandlingActionSheet ===

// Module 9466 (ScrollHandlingActionSheet)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 6645 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let BottomSheet;

let closure_2 = ["children", "scrollableDeviceHeightBreakpoint"];
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let children;
  let scrollableDeviceHeightBreakpoint;
  let tmp4;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(6);
  if (cResult[0] !== arg0) {
    ({ children, scrollableDeviceHeightBreakpoint } = arg0);
    const tmp8 = _objectWithoutProperties(arg0, closure_2);
    cResult[0] = arg0;
    cResult[1] = children;
    cResult[2] = tmp8;
    tmp5 = tmp8;
    tmp4 = children;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  if (cResult[3] === tmp4) {
    let tmp9;
    if (cResult[4] === tmp5) {
      tmp9 = cResult[5];
    }
    return tmp9;
  }
  BottomSheet = Sheet_BottomSheet.BottomSheet;
  const merged = Object.assign(tmp5);
  const tmp11 = <BottomSheet startExpanded>{tmp4}</BottomSheet>;
  cResult[3] = tmp4;
  cResult[4] = tmp5;
  cResult[5] = tmp11;
  tmp9 = tmp11;
}) : ((children) => {
  children = children.children;
  const merged = Object.assign(children, Object.assign({ children: 0, scrollableDeviceHeightBreakpoint: 0 }));
  BottomSheet = Sheet_BottomSheet.BottomSheet;
  const merged1 = Object.assign(merged);
  return <BottomSheet startExpanded>{children}</BottomSheet>;
});
const result = size.fileFinishedImporting("modules/stage_channels/native/components/ScrollHandlingActionSheet.tsx");

export default tmp3;