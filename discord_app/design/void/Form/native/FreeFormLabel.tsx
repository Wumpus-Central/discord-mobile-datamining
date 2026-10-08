// discord_app/design/void/Form/native/FreeFormLabel.tsx
import c from "../../../../../_runtime/00576_c.js";
import Text_Text from "../../../components/Text/native/Text.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Form/native/FreeFormLabel.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function FreeFormLabel(arg0) {
      const cResult = c.c(4);
      ({ children, style, nativeID } = arg0);
      if (cResult[0] === children) {
        if (cResult[1] === nativeID) {
          if (cResult[2] === style) {
            let tmp4 = cResult[3];
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
  : function FreeFormLabel(arg0) {
      ({ children, style, nativeID } = arg0);
      return jsx(Text_Text.Text, { style, variant: "text-sm/semibold", color: "text-muted", nativeID, children });
    };
