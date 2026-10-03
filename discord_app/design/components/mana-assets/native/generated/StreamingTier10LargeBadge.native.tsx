// === Module 12892: StreamingTier10LargeBadge ===

// Module 12892 (StreamingTier10LargeBadge)
import jsxProd from "jsxProd" /* 21 */;
import c from "c" /* 576 */;
import FastImageDefault from "FastImage" /* 5974 */;
import _modDef12893 from "module_12893" /* 12893 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
let result = size.fileFinishedImporting("design/components/mana-assets/native/generated/StreamingTier10LargeBadge.native.tsx");

export const StreamingTier10LargeBadge = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(9);
  ({ accessible, accessibilityLabel, resizeMode, width, height, scale } = arg0);
  let num = 100;
  let num2 = 100;
  if (undefined !== width) {
    num2 = width;
  }
  if (undefined !== height) {
    num = height;
  }
  let num3 = 1;
  if (undefined !== scale) {
    num3 = scale;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { uri: _modDef12893 };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  const result = num2 * num3;
  const result1 = num * num3;
  if (cResult[1] === result) {
    if (cResult[2] === result1) {
      let tmp7 = cResult[3];
    }
    if (cResult[4] === accessibilityLabel) {
      if (cResult[5] === accessible) {
        if (cResult[6] === resizeMode) {
          if (cResult[7] === tmp7) {
            let tmp8 = cResult[8];
          }
          return tmp8;
        }
      }
    }
    const obj3 = { fadeDuration: 0, source: first, style: tmp7, accessible, accessibilityLabel, resizeMode };
    const tmp11 = jsx(FastImageDefault, { fadeDuration: 0, source: first, style: tmp7, accessible, accessibilityLabel, resizeMode });
    cResult[4] = accessibilityLabel;
    cResult[5] = accessible;
    cResult[6] = resizeMode;
    cResult[7] = tmp7;
    cResult[8] = tmp11;
    tmp8 = tmp11;
  }
  const items = [{ width: result, height: result1 }];
  cResult[1] = result;
  cResult[2] = result1;
  cResult[3] = items;
  tmp7 = items;
}) : ((width) => {
  let num = width.width;
  ({ accessible, accessibilityLabel, resizeMode } = width);
  if (num === undefined) {
    num = 100;
  }
  let num2 = width.height;
  if (num2 === undefined) {
    num2 = 100;
  }
  let num3 = width.scale;
  if (num3 === undefined) {
    num3 = 1;
  }
  const obj = { fadeDuration: 0, source: null, style: null, accessible: null, accessibilityLabel: null, resizeMode: null };
  const obj2 = { uri: _modDef12893 };
  obj.source = obj2;
  const size = { width: num * num3, height: num2 * num3 };
  const items = [size];
  obj.style = items;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return jsx(FastImageDefault, { fadeDuration: 0, source: null, style: null, accessible: null, accessibilityLabel: null, resizeMode: null });
});