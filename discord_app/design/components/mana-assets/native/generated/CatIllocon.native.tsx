// === Module 12650: CatIllocon ===

// Module 12650 (CatIllocon)
import FastImageDefault from "FastImage" /* 5712 */;
import assetHelpers from "assetHelpers" /* 7063 */;
import _modDef12651 from "module_12651" /* 12651 */;
import _modDef12652 from "module_12652" /* 12652 */;
import _modDef12653 from "module_12653" /* 12653 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef12651 }, 3: null };
const obj2 = { uri: _modDef12651 };
obj[2] = { uri: _modDef12652 };
const obj3 = { uri: _modDef12652 };
obj[3] = { uri: _modDef12653 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/CatIllocon.native.tsx");

export function CatIllocon(size) {
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
  obj.source = num(7063).getAssetSource(obj);
  obj.style = memo;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return <tmp2 fadeDuration={0} source={null} style={null} accessible={null} accessibilityLabel={null} resizeMode={null} />;
}