// discord_app/design/void/Form/native/FormLabel.tsx
import c from "../../../../../_runtime/00576_c.js";
import Text_Text from "../../../components/Text/native/Text.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Form/native/FormLabel.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(6);
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
              if (cResult[4] === text) {
                let tmp4 = cResult[5];
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
  : (children) => {
      let lineClamp = children.numberOfLines;
      if (lineClamp === undefined) {
        lineClamp = 0;
      }
      ({ color, style, accessible } = children);
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
        children: children.text,
      });
    };
