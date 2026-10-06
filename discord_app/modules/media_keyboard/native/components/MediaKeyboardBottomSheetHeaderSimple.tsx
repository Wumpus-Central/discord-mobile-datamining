// === Module 10384: MediaKeyboardBottomSheetHeaderSimple ===

// Module 10384 (MediaKeyboardBottomSheetHeaderSimple)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import MediaKeyboardConstants from "MediaKeyboardConstants" /* 1614 */;
import MediaKeyboardBottomSheetHandleDefault from "MediaKeyboardBottomSheetHandle" /* 10385 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj2;
const View = react_native.View;
const HEADER_HANDLE_HEIGHT = MediaKeyboardConstants.HEADER_HANDLE_HEIGHT;
const jsx = Fragment.jsx;
let obj = { headerHandleOnlyWrap: obj2 };
obj2 = { height: HEADER_HANDLE_HEIGHT, paddingBottom: nativeDefault.space.PX_4 };
let closure_5 = createStyles.createStyles(obj);
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let animatedIndex;
  let onPress;
  const obj = react2;
  const cResult = obj.c(6);
  ({ animatedIndex, onPress } = arg0);
  const tmp3 = closure_5();
  if (cResult[0] === animatedIndex) {
    let tmp4;
    if (cResult[1] === onPress) {
      tmp4 = cResult[2];
    }
    if (cResult[3] === tmp3.headerHandleOnlyWrap) {
      let tmp6;
      if (cResult[4] === tmp4) {
        tmp6 = cResult[5];
      }
      return tmp6;
    }
    const tmp9 = <View style={tmp3.headerHandleOnlyWrap}>{tmp4}</View>;
    cResult[3] = tmp3.headerHandleOnlyWrap;
    cResult[4] = tmp4;
    cResult[5] = tmp9;
    tmp6 = tmp9;
  }
  const tmp5 = jsx(MediaKeyboardBottomSheetHandleDefault, { animatedIndex, onPress });
  cResult[0] = animatedIndex;
  cResult[1] = onPress;
  cResult[2] = tmp5;
  tmp4 = tmp5;
}) : ((arg0) => {
  let animatedIndex;
  let onPress;
  ({ animatedIndex, onPress } = arg0);
  return <View style={closure_5().headerHandleOnlyWrap}>{jsx(MediaKeyboardBottomSheetHandleDefault, { animatedIndex, onPress })}</View>;
}));
const result = size.fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardBottomSheetHeaderSimple.tsx");

export default memoResult;