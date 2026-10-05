// discord_app/design/components/Modal/native/ModalFooter.native.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import react from "../../../../../_runtime/00019_react.js";
import createStyles from "../../Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let children;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_4 = createStyles.createStyles({
  footer: { flexDirection: "column", paddingVertical: 16, paddingHorizontal: 24 },
});
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (children) => {
      const obj = react2;
      const cResult = obj.c(3);
      children = children.children;
      const tmp2 = closure_4();
      if (cResult[0] === children) {
        let tmp3;
        if (cResult[1] === tmp2.footer) {
          tmp3 = cResult[2];
        }
        return tmp3;
      }
      const tmp4 = <View style={tmp2.footer}>{children}</View>;
      cResult[0] = children;
      cResult[1] = tmp2.footer;
      cResult[2] = tmp4;
      tmp3 = tmp4;
    }
  : (children) => <View style={closure_4().footer}>{children.children}</View>;
const result = size.fileFinishedImporting("design/components/Modal/native/ModalFooter.native.tsx");

export const ModalFooter = tmp3;
