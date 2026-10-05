// discord_app/design/void/Form/native/FreeFormLabel.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import Text_Text from "../../../components/Text/native/Text.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let children;
      let nativeID;
      let style;
      const obj = react2;
      const cResult = obj.c(4);
      ({ children, style, nativeID } = arg0);
      if (cResult[0] === children) {
        if (cResult[1] === nativeID) {
          let tmp4;
          if (cResult[2] === style) {
            tmp4 = cResult[3];
          }
          return tmp4;
        }
      }
      const tmp5 = jsx(Text_Text.Text, { style, variant: "text-sm/semibold", color: "text-muted", nativeID, children });
      cResult[0] = children;
      cResult[1] = nativeID;
      cResult[2] = style;
      cResult[3] = tmp5;
      tmp4 = tmp5;
    }
  : (arg0) => {
      let children;
      let nativeID;
      let style;
      ({ children, style, nativeID } = arg0);
      return jsx(Text_Text.Text, { style, variant: "text-sm/semibold", color: "text-muted", nativeID, children });
    };
const result = size.fileFinishedImporting("design/void/Form/native/FreeFormLabel.tsx");

export default tmp3;
