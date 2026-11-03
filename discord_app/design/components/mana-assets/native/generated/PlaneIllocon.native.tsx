// === Module 20252: PlaneIllocon ===

// Module 20252 (PlaneIllocon)
import FastImageDefault from "FastImage" /* 5837 */;
import assetHelpers from "assetHelpers" /* 7195 */;
import _modDef14185 from "module_14185" /* 14185 */;
import _modDef20253 from "module_20253" /* 20253 */;
import _modDef20254 from "module_20254" /* 20254 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef20253 }, 3: null };
const obj2 = { uri: _modDef20253 };
obj[2] = { uri: _modDef14185 };
const obj3 = { uri: _modDef14185 };
obj[3] = { uri: _modDef20254 };
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
  obj.source = num(7195).getAssetSource(obj);
  obj.style = memo;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return <tmp2 fadeDuration={0} source={null} style={null} accessible={null} accessibilityLabel={null} resizeMode={null} />;
}