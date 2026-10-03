// === Module 10371: MediaKeyboardBottomSheetHeaderSimple ===

// Module 10371 (MediaKeyboardBottomSheetHeaderSimple)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import MediaKeyboardBottomSheetHandleDefault from "MediaKeyboardBottomSheetHandle" /* 10372 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let obj = { headerHandleOnlyWrap: { height: fn(1614).HEADER_HANDLE_HEIGHT, paddingBottom: nativeDefault.space.PX_4 } };
let closure_5 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
const obj3 = { height: fn(1614).HEADER_HANDLE_HEIGHT, paddingBottom: nativeDefault.space.PX_4 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardBottomSheetHeaderSimple.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(6);
  ({ animatedIndex, onPress } = arg0);
  const tmp3 = closure_5();
  if (cResult[0] === animatedIndex) {
    if (cResult[1] === onPress) {
      let tmp4 = cResult[2];
    }
    if (cResult[3] === tmp3.headerHandleOnlyWrap) {
      if (cResult[4] === tmp4) {
        let tmp6 = cResult[5];
      }
      return tmp6;
    }
    const obj2 = { style: tmp3.headerHandleOnlyWrap, children: tmp4 };
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
  ({ animatedIndex, onPress } = arg0);
  return <View style={closure_5().headerHandleOnlyWrap}>{jsx(MediaKeyboardBottomSheetHandleDefault, { animatedIndex, onPress })}</View>;
}));