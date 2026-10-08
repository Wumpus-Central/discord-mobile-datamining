// === Module 7095: LaptopSpotIllustration ===

// Module 7095 (LaptopSpotIllustration)
import jsxProd from "jsxProd" /* 21 */;
import c from "c" /* 576 */;
import FastImageDefault from "FastImage" /* 6164 */;
import _modDef7096 from "module_7096" /* 7096 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
let result = size.fileFinishedImporting("design/components/mana-assets/native/generated/LaptopSpotIllustration.native.tsx");

export const LaptopSpotIllustration = ReactCompilerGating.isReactCompilerEnabled() ? (function LaptopSpotIllustration(arg0) {
  const cResult = c.c(9);
  ({ accessible, accessibilityLabel, resizeMode, width, height, scale } = arg0);
  let num = 288;
  if (undefined !== width) {
    num = width;
  }
  let num2 = 162;
  if (undefined !== height) {
    num2 = height;
  }
  let num3 = 1;
  if (undefined !== scale) {
    num3 = scale;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { uri: _modDef7096 };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  const result = num * num3;
  const result1 = num2 * num3;
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
  const size = { width: result, height: result1 };
  cResult[1] = result;
  cResult[2] = result1;
  cResult[3] = size;
  tmp7 = size;
}) : (function LaptopSpotIllustration(width) {
  let num = width.width;
  ({ accessible, accessibilityLabel, resizeMode } = width);
  if (num === undefined) {
    num = 288;
  }
  let num2 = width.height;
  if (num2 === undefined) {
    num2 = 162;
  }
  let num3 = width.scale;
  if (num3 === undefined) {
    num3 = 1;
  }
  const obj = { fadeDuration: 0, source: null, style: null, accessible: null, accessibilityLabel: null, resizeMode: null };
  const obj2 = { uri: _modDef7096 };
  obj.source = obj2;
  obj.style = { width: num * num3, height: num2 * num3 };
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return jsx(FastImageDefault, { fadeDuration: 0, source: null, style: null, accessible: null, accessibilityLabel: null, resizeMode: null });
});