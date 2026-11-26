// === Module 20370: PlaneIllocon ===

// Module 20370 (PlaneIllocon)
import FastImageDefault from "FastImage" /* 5730 */;
import assetHelpers from "assetHelpers" /* 7261 */;
import _modDef13465 from "module_13465" /* 13465 */;
import _modDef20371 from "module_20371" /* 20371 */;
import _modDef20372 from "module_20372" /* 20372 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef20371 }, 3: null };
const obj2 = { uri: _modDef20371 };
obj[2] = { uri: _modDef13465 };
const obj3 = { uri: _modDef13465 };
obj[3] = { uri: _modDef20372 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/PlaneIllocon.native.tsx");

export function PlaneIllocon(size) {
  let num = size.size;
  ({ accessible, accessibilityLabel, resizeMode } = size);
  if (num === undefined) {
    num = 64;
  }
  items = [num];
  const memo = noop.useMemo(() => {
    const size = { width: num, height: num, intrinsicWidth: 64, intrinsicHeight: 64 };
    return assetHelpers.getAssetSizeStyle(size);
  }, items);
  obj = { fadeDuration: 0, source: null, style: null, accessible: null, accessibilityLabel: null, resizeMode: null };
  obj.source = num(7261).getAssetSource(obj);
  obj.style = memo;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return <tmp2 fadeDuration={0} source={null} style={null} accessible={null} accessibilityLabel={null} resizeMode={null} />;
}