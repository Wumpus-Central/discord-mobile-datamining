// discord_app/design/components/Icon/native/redesign/generated/XNeutralIcon.tsx
import c from "../../../../../../../_runtime/00576_c.js";
import BaseIconImage from "../../BaseIconImage.tsx";
import _mod8133 from "../../../../../../../_runtime/metro/08133__.js";
import _objectWithoutProperties from "../../../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../../../_runtime/metro/00019__.js";

require = fn;
let closure_2 = ["style", "color"];
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/XNeutralIcon.tsx");

export const XNeutralIcon = ReactCompilerGating.isReactCompilerEnabled()
  ? function XNeutralIcon(arg0) {
      const cResult = c.c(9);
      if (cResult[0] !== arg0) {
        ({ style, color } = arg0);
        const tmp9 = _objectWithoutProperties(arg0, closure_2);
        cResult[0] = arg0;
        cResult[1] = tmp9;
        cResult[2] = style;
        cResult[3] = color;
        let tmp6 = color;
        let tmp5 = style;
        let tmp4 = tmp9;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
        tmp6 = cResult[3];
      }
      let str = "#4E5058";
      if (undefined !== tmp6) {
        str = tmp6;
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const tmpResult = _mod8133;
        cResult[4] = tmpResult;
        let tmp10 = tmpResult;
      } else {
        tmp10 = cResult[4];
      }
      if (cResult[5] === str) {
        if (cResult[6] === tmp4) {
          if (cResult[7] === tmp5) {
            let tmp12 = cResult[8];
          }
          return tmp12;
        }
      }
      const merged = Object.assign(tmp4);
      const tmp14 = jsx(BaseIconImage.BaseIconImage, { source: tmp10, color: str, style: tmp5 });
      cResult[5] = str;
      cResult[6] = tmp4;
      cResult[7] = tmp5;
      cResult[8] = tmp14;
      tmp12 = tmp14;
      const obj2 = { source: tmp10, color: str, style: tmp5 };
    }
  : function XNeutralIcon(color) {
      let str = color.color;
      if (str === undefined) {
        str = "#4E5058";
      }
      const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
      const merged1 = Object.assign(merged);
      return jsx(BaseIconImage.BaseIconImage, { source: _mod8133, color: str, style: color.style });
    };
