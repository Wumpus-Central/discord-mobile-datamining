// === Module 6820: FormSubLabel ===

// Module 6820 (FormSubLabel)
import c from "c" /* 576 */;
import Text_Text from "Text/Text" /* 5086 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Form/native/FormSubLabel.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function FormSubLabel(arg0) {
  const cResult = c.c(6);
  ({ text, numberOfLines, style, accessible, color } = arg0);
  let str = "text-subtle";
  if (undefined !== color) {
    str = color;
  }
  if (cResult[0] === accessible) {
    if (cResult[1] === str) {
      if (cResult[2] === numberOfLines) {
        if (cResult[3] === style) {
          if (cResult[4] === text) {
            let tmp4 = cResult[5];
          }
          return tmp4;
        }
      }
    }
  }
  const tmp5 = jsx(Text_Text.Text, { color: str, variant: "text-xs/normal", lineClamp: numberOfLines, style, accessible, children: text });
  cResult[0] = accessible;
  cResult[1] = str;
  cResult[2] = numberOfLines;
  cResult[3] = style;
  cResult[4] = text;
  cResult[5] = tmp5;
  tmp4 = tmp5;
}) : (function FormSubLabel(color) {
  color = color.color;
  ({ text, numberOfLines, style, accessible } = color);
  if (color === undefined) {
    color = "text-subtle";
  }
  return jsx(Text_Text.Text, { color, variant: "text-xs/normal", lineClamp, style, accessible, children });
});