// discord_app/design/void/Form/native/FormLabel.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import Text_Text from "../../../components/Text/native/Text.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let accessible;
      let color;
      let numberOfLines;
      let style;
      let text;
      const obj = react2;
      const cResult = obj.c(6);
      ({ text, numberOfLines, style, accessible, color } = arg0);
      let num = 0;
      if (undefined !== numberOfLines) {
        num = numberOfLines;
      }
      let str = "mobile-text-heading-primary";
      if (undefined !== color) {
        str = color;
      }
      if (cResult[0] === accessible) {
        if (cResult[1] === str) {
          if (cResult[2] === num) {
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
      const tmp5 = jsx(Text_Text.Text, {
        variant: "heading-md/semibold",
        color: str,
        lineClamp: num,
        style,
        maxFontSizeMultiplier: 2,
        accessible,
        children: text,
      });
      cResult[0] = accessible;
      cResult[1] = str;
      cResult[2] = num;
      cResult[3] = style;
      cResult[4] = text;
      cResult[5] = tmp5;
      tmp4 = tmp5;
    }
  : (numberOfLines) => {
      let accessible;
      let color;
      let style;
      let lineClamp = numberOfLines.numberOfLines;
      const children = numberOfLines.text;
      if (lineClamp === undefined) {
        lineClamp = 0;
      }
      ({ color, style, accessible } = numberOfLines);
      if (color === undefined) {
        color = "mobile-text-heading-primary";
      }
      return jsx(Text_Text.Text, {
        variant: "heading-md/semibold",
        color,
        lineClamp,
        style,
        maxFontSizeMultiplier: 2,
        accessible,
        children,
      });
    };
const result = size.fileFinishedImporting("design/void/Form/native/FormLabel.tsx");

export default tmp3;
