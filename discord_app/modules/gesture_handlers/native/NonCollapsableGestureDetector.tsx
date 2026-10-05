// === Module 16303: NonCollapsableGestureDetector ===

// Module 16303 (NonCollapsableGestureDetector)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6140 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let children;

let closure_2 = ["children"];
let closure_3 = ["children"];
const View = react_native.View;
const jsx = Fragment.jsx;
const style = { flex: 1 };
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((children) => {
  let tmp4;
  let tmp5;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(8);
  if (cResult[0] !== children) {
    children = children.children;
    const tmp8 = _objectWithoutProperties(children, closure_2);
    cResult[0] = children;
    cResult[1] = children;
    cResult[2] = tmp8;
    tmp5 = tmp8;
    tmp4 = children;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  if (cResult[3] !== tmp4) {
    const tmp13 = <View style={style} collapsable={false}>{tmp4}</View>;
    cResult[3] = tmp4;
    cResult[4] = tmp13;
    tmp9 = tmp13;
  } else {
    tmp9 = cResult[4];
  }
  if (cResult[5] === tmp5) {
    let tmp14;
    if (cResult[6] === tmp9) {
      tmp14 = cResult[7];
    }
    return tmp14;
  }
  const GestureDetector = LegacyBaseButton.GestureDetector;
  const merged = Object.assign(tmp5);
  const tmp16 = <GestureDetector>{tmp9}</GestureDetector>;
  cResult[5] = tmp5;
  cResult[6] = tmp9;
  cResult[7] = tmp16;
  tmp14 = tmp16;
}) : ((children) => {
  children = children.children;
  const tmp = _objectWithoutProperties(children, closure_3);
  const GestureDetector = LegacyBaseButton.GestureDetector;
  const merged = Object.assign(tmp);
  return <GestureDetector><View style={style} collapsable={false}>{children}</View></GestureDetector>;
});
const result = size.fileFinishedImporting("modules/gesture_handlers/native/NonCollapsableGestureDetector.tsx");

export const NonCollapsableGestureDetector = tmp3;