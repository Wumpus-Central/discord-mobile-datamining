// === Module 16335: ConnectionUnknownIcon ===

// Module 16335 (ConnectionUnknownIcon)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import BaseIconImage from "BaseIconImage" /* 4579 */;
import _mod16336 from "module_16336" /* 16336 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_3 = ["style", "color"];
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/ConnectionUnknownIcon.tsx");

export const ConnectionUnknownIcon = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(9);
  if (cResult[0] !== arg0) {
    ({ style, color } = arg0);
    const tmp8 = _objectWithoutProperties(arg0, closure_3);
    cResult[0] = arg0;
    cResult[1] = tmp8;
    cResult[2] = style;
    cResult[3] = color;
    let INTERACTIVE_ICON_DEFAULT = color;
    let tmp5 = style;
    let tmp4 = tmp8;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    INTERACTIVE_ICON_DEFAULT = cResult[3];
  }
  if (undefined === INTERACTIVE_ICON_DEFAULT) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const tmpResult = _mod16336;
    cResult[4] = tmpResult;
    let tmp10 = tmpResult;
  } else {
    tmp10 = cResult[4];
  }
  if (cResult[5] === INTERACTIVE_ICON_DEFAULT) {
    if (cResult[6] === tmp4) {
      if (cResult[7] === tmp5) {
        let tmp12 = cResult[8];
      }
      return tmp12;
    }
  }
  const merged = Object.assign(tmp4);
  const tmp14 = jsx(BaseIconImage.BaseIconImage, { source: tmp10, color: INTERACTIVE_ICON_DEFAULT, style: tmp5 });
  cResult[5] = INTERACTIVE_ICON_DEFAULT;
  cResult[6] = tmp4;
  cResult[7] = tmp5;
  cResult[8] = tmp14;
  tmp12 = tmp14;
  const obj2 = { source: tmp10, color: INTERACTIVE_ICON_DEFAULT, style: tmp5 };
}) : ((color) => {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod16336, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
});