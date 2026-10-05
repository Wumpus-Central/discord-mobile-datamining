// discord_app/modules/stage_channels/native/components/StageChannelBackground.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import react from "../../../../../_runtime/00019_react.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let children;

let obj2;
const View = react_native.View;
const jsx = Fragment.jsx;
let obj = { container: obj2 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BLACK };
let closure_4 = createStyles.createStyles(obj);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (children) => {
      const obj = react2;
      const cResult = obj.c(3);
      children = children.children;
      const tmp2 = closure_4();
      if (cResult[0] === children) {
        let tmp3;
        if (cResult[1] === tmp2.container) {
          tmp3 = cResult[2];
        }
        return tmp3;
      }
      const tmp4 = <View style={tmp2.container}>{children}</View>;
      cResult[0] = children;
      cResult[1] = tmp2.container;
      cResult[2] = tmp4;
      tmp3 = tmp4;
    }
  : (children) => <View style={closure_4().container}>{children.children}</View>;
const result = size.fileFinishedImporting("modules/stage_channels/native/components/StageChannelBackground.tsx");

export default tmp3;
