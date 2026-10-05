// discord_app/design/components/TableRow/native/TableRowTrailingText.native.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import Text_Text from "../../Text/native/Text.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let text;

const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (text) => {
      let tmp4;
      const obj = react2;
      const cResult = obj.c(2);
      text = text.text;
      if (cResult[0] !== text) {
        const tmp6 = jsx(Text_Text.Text, {
          variant: "text-sm/medium",
          color: "text-muted",
          lineClamp: 1,
          children: text,
        });
        cResult[0] = text;
        cResult[1] = tmp6;
        tmp4 = tmp6;
      } else {
        tmp4 = cResult[1];
      }
      return tmp4;
    }
  : (children) =>
      jsx(Text_Text.Text, { variant: "text-sm/medium", color: "text-muted", lineClamp: 1, children: children.text });
const result = size.fileFinishedImporting("design/components/TableRow/native/TableRowTrailingText.native.tsx");

export const TableRowTrailingText = tmp3;
