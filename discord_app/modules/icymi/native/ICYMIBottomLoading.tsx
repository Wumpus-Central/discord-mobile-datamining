// discord_app/modules/icymi/native/ICYMIBottomLoading.tsx
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import react from "../../../../_runtime/00019_react.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let c3;
let closure_4;
({ View: c3, ActivityIndicator: closure_4 } = react_native);
const jsx = Fragment.jsx;
let closure_6 = createStyles.createStyles(() => {
  const obj = {
    container: {
      paddingTop: nativeDefault.space.PX_8,
      paddingBottom: nativeDefault.space.PX_24,
      alignItems: "center",
      justifyContent: "center",
    },
  };
  ({
    paddingTop: nativeDefault.space.PX_8,
    paddingBottom: nativeDefault.space.PX_24,
    alignItems: "center",
    justifyContent: "center",
  });
  return obj;
});
const tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      let tmp7;
      const obj = react2;
      const cResult = obj.c(3);
      const tmp2 = closure_6();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp6 = <React3 size="small" />;
        cResult[0] = tmp6;
        first = tmp6;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== tmp2.container) {
        const tmp10 = <_false style={tmp2.container}>{first}</_false>;
        cResult[1] = tmp2.container;
        cResult[2] = tmp10;
        tmp7 = tmp10;
      } else {
        tmp7 = cResult[2];
      }
      return tmp7;
    }
  : () => (
      <_false style={closure_6().container}>
        <React3 size="small" />
      </_false>
    );
const result = size.fileFinishedImporting("modules/icymi/native/ICYMIBottomLoading.tsx");

export const ICYMIBottomLoading = tmp4;
