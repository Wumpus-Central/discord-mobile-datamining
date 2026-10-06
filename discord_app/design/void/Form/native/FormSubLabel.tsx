// === Module 6643: FormSubLabel ===

// Module 6643 (FormSubLabel)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import Text_Text from "Text/Text" /* 4892 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let accessible;
  let color;
  let numberOfLines;
  let style;
  let text;
  const obj = react2;
  const cResult = obj.c(6);
  ({ text, numberOfLines, style, accessible, color } = arg0);
  let str = "text-subtle";
  if (undefined !== color) {
    str = color;
  }
  if (cResult[0] === accessible) {
    if (cResult[1] === str) {
      if (cResult[2] === numberOfLines) {
        if (cResult[3] === style) {
          let tmp4;
          if (cResult[4] === text) {
            tmp4 = cResult[5];
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
}) : ((color) => {
  let accessible;
  let numberOfLines;
  let style;
  let text;
  color = color.color;
  ({ text, numberOfLines, style, accessible } = color);
  if (color === undefined) {
    color = "text-subtle";
  }
  return jsx(Text_Text.Text, { color, variant: "text-xs/normal", lineClamp, style, accessible, children });
});
const result = size.fileFinishedImporting("design/void/Form/native/FormSubLabel.tsx");

export default tmp3;