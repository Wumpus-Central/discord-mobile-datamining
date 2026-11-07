// === Module 20492: PlaneIllocon ===

// Module 20492 (PlaneIllocon)
import FastImageDefault from "FastImage" /* 5842 */;
import assetHelpers from "assetHelpers" /* 7135 */;
import _modDef14292 from "module_14292" /* 14292 */;
import _modDef20493 from "module_20493" /* 20493 */;
import _modDef20494 from "module_20494" /* 20494 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef20493 }, 3: null };
const obj2 = { uri: _modDef20493 };
obj[2] = { uri: _modDef14292 };
const obj3 = { uri: _modDef14292 };
obj[3] = { uri: _modDef20494 };
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
  obj.source = num(7135).getAssetSource(obj);
  obj.style = memo;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return <tmp2 fadeDuration={0} source={null} style={null} accessible={null} accessibilityLabel={null} resizeMode={null} />;
}