// === Module 12892: StreamingTier10LargeBadge ===

// Module 12892 (StreamingTier10LargeBadge)
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 576 */;
import FastImageDefault from "FastImage" /* 5974 */;
import _modDef12893 from "module_12893" /* 12893 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let accessibilityLabel;
  let accessible;
  let first;
  let height;
  let resizeMode;
  let scale;
  let width;
  const obj = react;
  const cResult = obj.c(9);
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
    first = obj2;
  } else {
    first = cResult[0];
  }
  const result = num2 * num3;
  const result1 = num * num3;
  if (cResult[1] === result) {
    let tmp7;
    if (cResult[2] === result1) {
      tmp7 = cResult[3];
    }
    if (cResult[4] === accessibilityLabel) {
      if (cResult[5] === accessible) {
        if (cResult[6] === resizeMode) {
          let tmp8;
          if (cResult[7] === tmp7) {
            tmp8 = cResult[8];
          }
          return tmp8;
        }
      }
    }
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
  let accessibilityLabel;
  let accessible;
  let resizeMode;
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
  const obj2 = { uri: _modDef12893 };
  FastImageDefault;
  size = { width: num * num3, height: num2 * num3 };
  const items = [size];
  return <tmp fadeDuration={0} source={obj2} style={items} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
});
let size = size_mod;
let result = size.fileFinishedImporting("design/components/mana-assets/native/generated/StreamingTier10LargeBadge.native.tsx");

export const StreamingTier10LargeBadge = tmp2;