// discord_app/design/void/NitroWheel/native/NitroWheel.tsx
import c from "../../../../../_runtime/00576_c.js";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import _modDef9504 from "../../../../../_runtime/metro/09504__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/void/NitroWheel/native/NitroWheel.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function NitroWheel(style) {
      const cResult = c.c(2);
      style = style.style;
      if (cResult[0] !== style) {
        const obj2 = { source: _modDef9504, style, resizeMode: "contain" };
        const tmp7 = jsx(FastImageDefault, { source: _modDef9504, style, resizeMode: "contain" });
        cResult[0] = style;
        cResult[1] = tmp7;
        let tmp3 = tmp7;
      } else {
        tmp3 = cResult[1];
      }
      return tmp3;
    }
  : function NitroWheel(style) {
      const obj = { source: _modDef9504, style: style.style, resizeMode: "contain" };
      return jsx(FastImageDefault, { source: _modDef9504, style: style.style, resizeMode: "contain" });
    };
