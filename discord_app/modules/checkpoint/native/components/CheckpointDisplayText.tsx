// discord_app/modules/checkpoint/native/components/CheckpointDisplayText.tsx
import c from "../../../../../_runtime/00576_c.js";
import CheckpointTextDefault from "CheckpointText.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
let closure_3 = ["style"];
const jsx = fn(21).jsx;
let closure_6 = { fontSize: 56, lineHeight: 72, letterSpacing: -2.24, marginTop: -15, marginBottom: -16 };
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointDisplayText.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function CheckpointDisplayText(style) {
      const cResult = c.c(8);
      if (cResult[0] !== style) {
        style = style.style;
        const tmp7 = _objectWithoutProperties(style, closure_3);
        cResult[0] = style;
        cResult[1] = tmp7;
        cResult[2] = style;
        let tmp4 = style;
        let tmp3 = tmp7;
      } else {
        tmp3 = cResult[1];
        tmp4 = cResult[2];
      }
      if (cResult[3] !== tmp4) {
        const items = [closure_6, tmp4];
        cResult[3] = tmp4;
        cResult[4] = items;
        let tmp8 = items;
      } else {
        tmp8 = cResult[4];
      }
      if (cResult[5] === tmp3) {
        if (cResult[6] === tmp8) {
          let tmp10 = cResult[7];
        }
        return tmp10;
      }
      const obj2 = {};
      const merged = Object.assign(tmp3);
      obj2.variant = "display-lg";
      obj2.style = tmp8;
      const tmp13 = jsx(CheckpointTextDefault, {});
      cResult[5] = tmp3;
      cResult[6] = tmp8;
      cResult[7] = tmp13;
      tmp10 = tmp13;
    }
  : function CheckpointDisplayText(style) {
      const merged = Object.assign(style, Object.assign({ style: 0 }));
      const obj = {};
      const merged1 = Object.assign(merged);
      obj.variant = "display-lg";
      const items = [closure_6, style.style];
      obj.style = items;
      return jsx(CheckpointTextDefault, {});
    };
