// discord_app/design/components/Icon/native/redesign/generated/ConnectionFineIcon.tsx
import c from "../../../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import BaseIconImage from "../../BaseIconImage.tsx";
import _mod16382 from "../../../../../../../_runtime/metro/16382__.js";
import _objectWithoutProperties from "../../../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../../../_runtime/metro/00019__.js";

require = fn;
let closure_3 = ["style", "color"];
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/ConnectionFineIcon.tsx");

export const ConnectionFineIcon = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(9);
      if (cResult[0] !== arg0) {
        ({ style, color } = arg0);
        const tmp8 = _objectWithoutProperties(arg0, closure_3);
        cResult[0] = arg0;
        cResult[1] = tmp8;
        cResult[2] = style;
        cResult[3] = color;
        let ICON_FEEDBACK_POSITIVE = color;
        let tmp5 = style;
        let tmp4 = tmp8;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
        ICON_FEEDBACK_POSITIVE = cResult[3];
      }
      if (undefined === ICON_FEEDBACK_POSITIVE) {
        ICON_FEEDBACK_POSITIVE = nativeDefault.colors.ICON_FEEDBACK_POSITIVE;
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const tmpResult = _mod16382;
        cResult[4] = tmpResult;
        let tmp10 = tmpResult;
      } else {
        tmp10 = cResult[4];
      }
      if (cResult[5] === ICON_FEEDBACK_POSITIVE) {
        if (cResult[6] === tmp4) {
          if (cResult[7] === tmp5) {
            let tmp12 = cResult[8];
          }
          return tmp12;
        }
      }
      const merged = Object.assign(tmp4);
      const tmp14 = jsx(BaseIconImage.BaseIconImage, { source: tmp10, color: ICON_FEEDBACK_POSITIVE, style: tmp5 });
      cResult[5] = ICON_FEEDBACK_POSITIVE;
      cResult[6] = tmp4;
      cResult[7] = tmp5;
      cResult[8] = tmp14;
      tmp12 = tmp14;
      const obj2 = { source: tmp10, color: ICON_FEEDBACK_POSITIVE, style: tmp5 };
    }
  : (color) => {
      let ICON_FEEDBACK_POSITIVE = color.color;
      if (ICON_FEEDBACK_POSITIVE === undefined) {
        ICON_FEEDBACK_POSITIVE = nativeDefault.colors.ICON_FEEDBACK_POSITIVE;
      }
      const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
      const merged1 = Object.assign(merged);
      return jsx(BaseIconImage.BaseIconImage, { source: _mod16382, color: ICON_FEEDBACK_POSITIVE, style: color.style });
    };
