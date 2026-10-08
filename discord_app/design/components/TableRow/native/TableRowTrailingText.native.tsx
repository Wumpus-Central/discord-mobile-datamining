// === Module 6195: TableRowTrailingText ===

// Module 6195 (TableRowTrailingText)
import c from "c" /* 576 */;
import Text_Text from "Text/Text" /* 5086 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/TableRow/native/TableRowTrailingText.native.tsx");

export const TableRowTrailingText = ReactCompilerGating.isReactCompilerEnabled() ? (function TableRowTrailingText(text) {
  const cResult = c.c(2);
  text = text.text;
  if (cResult[0] !== text) {
    const obj2 = { variant: "text-sm/medium", color: "text-muted", lineClamp: 1, children: text };
    const tmp6 = jsx(Text_Text.Text, { variant: "text-sm/medium", color: "text-muted", lineClamp: 1, children: text });
    cResult[0] = text;
    cResult[1] = tmp6;
    let tmp4 = tmp6;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : (function TableRowTrailingText(children) {
  return jsx(Text_Text.Text, { variant: "text-sm/medium", color: "text-muted", lineClamp: 1, children: children.text });
});