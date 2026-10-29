// === Module 12494: BunnyIllocon ===

// Module 12494 (BunnyIllocon)
import c from "c" /* 576 */;
import FastImageDefault from "FastImage" /* 5707 */;
import assetHelpers from "assetHelpers" /* 7055 */;
import _modDef12495 from "module_12495" /* 12495 */;
import _modDef12496 from "module_12496" /* 12496 */;
import _modDef12497 from "module_12497" /* 12497 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef12495 }, 3: null };
const obj2 = { uri: _modDef12495 };
obj[2] = { uri: _modDef12496 };
const obj3 = { uri: _modDef12496 };
obj[3] = { uri: _modDef12497 };
const ReactCompilerGating = fn(558);
const obj4 = { uri: _modDef12497 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/BunnyIllocon.native.tsx");

export const BunnyIllocon = ReactCompilerGating.isReactCompilerEnabled() ? (function BunnyIllocon(arg0) {
  obj = c;
  const cResult = obj.c(8);
  ({ accessible, accessibilityLabel, resizeMode, size } = arg0);
  let num = 64;
  if (undefined !== size) {
    num = size;
  }
  if (cResult[0] !== num) {
    const size1 = { width: num, height: num, intrinsicWidth: 64, intrinsicHeight: 64 };
    const assetSizeStyle = assetHelpers.getAssetSizeStyle(size1);
    cResult[0] = num;
    cResult[1] = assetSizeStyle;
    let tmp4 = assetSizeStyle;
    const tmpResult = assetHelpers;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const assetSource = assetHelpers.getAssetSource(obj);
    cResult[2] = assetSource;
    let tmp6 = assetSource;
    const tmpResult2 = assetHelpers;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] === accessibilityLabel) {
    if (cResult[4] === accessible) {
      if (cResult[5] === resizeMode) {
        if (cResult[6] === tmp4) {
          let tmp9 = cResult[7];
        }
        return tmp9;
      }
    }
  }
  const tmp10 = jsx(FastImageDefault, { fadeDuration: 0, source: tmp6, style: tmp4, accessible, accessibilityLabel, resizeMode });
  cResult[3] = accessibilityLabel;
  cResult[4] = accessible;
  cResult[5] = resizeMode;
  cResult[6] = tmp4;
  cResult[7] = tmp10;
  tmp9 = tmp10;
}) : (function BunnyIllocon(size) {
  let num = size.size;
  ({ accessible, accessibilityLabel, resizeMode } = size);
  if (num === undefined) {
    num = 64;
  }
  const items = [num];
  const memo = noop.useMemo(() => {
    const size = { width: num, height: num, intrinsicWidth: 64, intrinsicHeight: 64 };
    return assetHelpers.getAssetSizeStyle(size);
  }, items);
  obj = { fadeDuration: 0, source: null, style: null, accessible: null, accessibilityLabel: null, resizeMode: null };
  obj.source = num(7055).getAssetSource(obj);
  obj.style = memo;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return <tmp2 fadeDuration={0} source={null} style={null} accessible={null} accessibilityLabel={null} resizeMode={null} />;
});