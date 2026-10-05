// discord_app/modules/media_keyboard/native/components/MediaKeyboardBottomSheetHeaderSimple.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import MediaKeyboardConstants from "../MediaKeyboardConstants.tsx";
import MediaKeyboardBottomSheetHandleDefault from "MediaKeyboardBottomSheetHandle.tsx";
import react from "../../../../../_runtime/00019_react.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let obj2;
const View = react_native.View;
const HEADER_HANDLE_HEIGHT = MediaKeyboardConstants.HEADER_HANDLE_HEIGHT;
const jsx = Fragment.jsx;
let obj = { headerHandleOnlyWrap: obj2 };
obj2 = { height: HEADER_HANDLE_HEIGHT, paddingBottom: nativeDefault.space.PX_4 };
let closure_5 = createStyles.createStyles(obj);
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
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
      }
    : (arg0) => {
        let animatedIndex;
        let onPress;
        ({ animatedIndex, onPress } = arg0);
        return (
          <View style={closure_5().headerHandleOnlyWrap}>
            {jsx(MediaKeyboardBottomSheetHandleDefault, { animatedIndex, onPress })}
          </View>
        );
      },
);
const result = size.fileFinishedImporting(
  "modules/media_keyboard/native/components/MediaKeyboardBottomSheetHeaderSimple.tsx",
);

export default memoResult;
