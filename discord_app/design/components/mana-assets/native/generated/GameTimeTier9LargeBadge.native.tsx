// === Module 13189: GameTimeTier9LargeBadge ===

// Module 13189 (GameTimeTier9LargeBadge)
import c from "c" /* 576 */;
import FastImageDefault from "FastImage" /* 6156 */;
import assetHelpers from "assetHelpers" /* 6272 */;
import _modDef13190 from "module_13190" /* 13190 */;
import _modDef13191 from "module_13191" /* 13191 */;
import _modDef13192 from "module_13192" /* 13192 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef13190 }, 3: null };
let obj2 = { uri: _modDef13190 };
obj[2] = { uri: _modDef13191 };
const obj3 = { uri: _modDef13191 };
obj[3] = { uri: _modDef13192 };
const ReactCompilerGating = fn(558);
const obj4 = { uri: _modDef13192 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/GameTimeTier9LargeBadge.native.tsx");

export const GameTimeTier9LargeBadge = ReactCompilerGating.isReactCompilerEnabled() ? (function GameTimeTier9LargeBadge(arg0) {
  obj = c;
  const cResult = obj.c(12);
  ({ accessible, accessibilityLabel, resizeMode, width, height, scale } = arg0);
  let num = 1;
  if (undefined !== scale) {
    num = scale;
  }
  if (cResult[0] === height) {
    if (cResult[1] === num) {
      if (cResult[2] === width) {
        let tmp4 = cResult[3];
      }
      const _Symbol = Symbol;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const assetSource = assetHelpers.getAssetSource(obj);
        cResult[4] = assetSource;
        let tmp7 = assetSource;
        const tmpResult = assetHelpers;
      } else {
        tmp7 = cResult[4];
      }
      if (cResult[5] !== resizeMode) {
        const assetResizeMode = assetHelpers.getAssetResizeMode(resizeMode);
        cResult[5] = resizeMode;
        cResult[6] = assetResizeMode;
        let tmp10 = assetResizeMode;
        const tmpResult3 = assetHelpers;
      } else {
        tmp10 = cResult[6];
      }
      if (cResult[7] === accessibilityLabel) {
        if (cResult[8] === accessible) {
          if (cResult[9] === tmp4) {
            if (cResult[10] === tmp10) {
              let tmp12 = cResult[11];
            }
            return tmp12;
          }
        }
      }
      const obj2 = { fadeDuration: 0, source: tmp7, style: tmp4, accessible, accessibilityLabel, resizeMode: tmp10 };
      const tmp15 = jsx(FastImageDefault, { fadeDuration: 0, source: tmp7, style: tmp4, accessible, accessibilityLabel, resizeMode: tmp10 });
      cResult[7] = accessibilityLabel;
      cResult[8] = accessible;
      cResult[9] = tmp4;
      cResult[10] = tmp10;
      cResult[11] = tmp15;
      tmp12 = tmp15;
    }
  }
  const assetSizeStyle = assetHelpers.getAssetSizeStyle({ width, height, scale: num, intrinsicWidth: 149, intrinsicHeight: 100 });
  cResult[0] = height;
  cResult[1] = num;
  cResult[2] = width;
  cResult[3] = assetSizeStyle;
  tmp4 = assetSizeStyle;
  const tmpResult4 = assetHelpers;
}) : (function GameTimeTier9LargeBadge(width) {
  width = width.width;
  const height = width.height;
  let num = width.scale;
  ({ accessible, accessibilityLabel, resizeMode } = width);
  if (num === undefined) {
    num = 1;
  }
  const items = [width, height, num];
  const memo = noop.useMemo(() => {
    const size = { width, height, scale: num, intrinsicWidth: 149, intrinsicHeight: 100 };
    return assetHelpers.getAssetSizeStyle(size);
  }, items);
  obj = { fadeDuration: 0, source: null, style: null, accessible: null, accessibilityLabel: null, resizeMode: null };
  const tmp2 = height(num[8]);
  obj.source = width(num[7]).getAssetSource(obj);
  obj.style = memo;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  const obj2 = width(num[7]);
  obj.resizeMode = width(num[7]).getAssetResizeMode(resizeMode);
  return <tmp2 fadeDuration={0} source={null} style={null} accessible={null} accessibilityLabel={null} resizeMode={null} />;
});