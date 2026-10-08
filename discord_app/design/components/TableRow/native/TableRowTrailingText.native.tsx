// discord_app/design/components/TableRow/native/TableRowTrailingText.native.tsx
import c from "../../../../../_runtime/00576_c.js";
import Text_Text from "../../Text/native/Text.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/TableRow/native/TableRowTrailingText.native.tsx");

export const TableRowTrailingText = ReactCompilerGating.isReactCompilerEnabled()
  ? function TableRowTrailingText(text) {
      const cResult = c.c(2);
      text = text.text;
      if (cResult[0] !== text) {
        const obj2 = { variant: "text-sm/medium", color: "text-muted", lineClamp: 1, children: text };
        const tmp6 = jsx(Text_Text.Text, {
          variant: "text-sm/medium",
          color: "text-muted",
          lineClamp: 1,
          children: text,
        });
        cResult[0] = text;
        cResult[1] = tmp6;
        let tmp4 = tmp6;
      } else {
        tmp4 = cResult[1];
      }
      return tmp4;
    }
  : function TableRowTrailingText(children) {
      return jsx(Text_Text.Text, {
        variant: "text-sm/medium",
        color: "text-muted",
        lineClamp: 1,
        children: children.text,
      });
    };
