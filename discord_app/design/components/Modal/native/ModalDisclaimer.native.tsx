// discord_app/design/components/Modal/native/ModalDisclaimer.native.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import Text_Text from "../../Text/native/Text.tsx";
import react from "../../../../../_runtime/00019_react.js";
import createStyles from "../../Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let children;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_4 = createStyles.createStyles({
  container: { flexDirection: "column", alignItems: "center" },
  disclaimer: { marginBottom: 12 },
});
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (children) => {
      const obj = react2;
      const cResult = obj.c(6);
      children = children.children;
      const tmp4 = closure_4();
      if (cResult[0] === children) {
        let tmp5;
        if (cResult[1] === tmp4.disclaimer) {
          tmp5 = cResult[2];
        }
        if (cResult[3] === tmp4.container) {
          let tmp7;
          if (cResult[4] === tmp5) {
            tmp7 = cResult[5];
          }
          return tmp7;
        }
        const tmp10 = <View style={tmp4.container}>{tmp5}</View>;
        cResult[3] = tmp4.container;
        cResult[4] = tmp5;
        cResult[5] = tmp10;
        tmp7 = tmp10;
      }
      const tmp6 = jsx(Text_Text.Text, {
        variant: "text-xs/medium",
        color: "text-muted",
        style: tmp4.disclaimer,
        children,
      });
      cResult[0] = children;
      cResult[1] = tmp4.disclaimer;
      cResult[2] = tmp6;
      tmp5 = tmp6;
    }
  : (children) => {
      children = children.children;
      const tmp = closure_4();
      return <View style={tmp.container}>{null}</View>;
    };
const result = size.fileFinishedImporting("design/components/Modal/native/ModalDisclaimer.native.tsx");

export const ModalDisclaimer = tmp3;
