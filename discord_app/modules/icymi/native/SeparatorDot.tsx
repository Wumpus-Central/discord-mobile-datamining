// discord_app/modules/icymi/native/SeparatorDot.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import react from "../../../../_runtime/00019_react.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

let size;
const View = react_native.View;
const jsx = Fragment.jsx;
let obj = { separatorDot: size };
size = {
  width: 4,
  height: 4,
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
};
let closure_4 = createStyles.createStyles(obj);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp3;
      const obj = react2;
      const cResult = obj.c(2);
      const tmp2 = closure_4();
      if (cResult[0] !== tmp2.separatorDot) {
        const items = [tmp2.separatorDot];
        const tmp6 = <View style={items} />;
        cResult[0] = tmp2.separatorDot;
        cResult[1] = tmp6;
        tmp3 = tmp6;
      } else {
        tmp3 = cResult[1];
      }
      return tmp3;
    }
  : () => {
      const items = [closure_4().separatorDot];
      return <View style={items} />;
    };
size = size_mod;
const result = size.fileFinishedImporting("modules/icymi/native/SeparatorDot.tsx");

export default tmp3;
