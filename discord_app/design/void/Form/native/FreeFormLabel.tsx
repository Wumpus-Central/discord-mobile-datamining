// === Module 6425: FreeFormLabel ===

// Module 6425 (FreeFormLabel)
import c from "c" /* 576 */;
import Text_Text from "Text/Text" /* 4886 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Form/native/FreeFormLabel.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
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
}) : ((arg0) => {
  ({ children, style, nativeID } = arg0);
  return jsx(Text_Text.Text, { style, variant: "text-sm/semibold", color: "text-muted", nativeID, children });
});