// === Module 12870: FrogIllocon ===

// Module 12870 (FrogIllocon)
import FastImageDefault from "FastImage" /* 5872 */;
import assetHelpers from "assetHelpers" /* 7160 */;
import _modDef12871 from "module_12871" /* 12871 */;
import _modDef12872 from "module_12872" /* 12872 */;
import _modDef12873 from "module_12873" /* 12873 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef12871 }, 3: null };
const obj2 = { uri: _modDef12871 };
obj[2] = { uri: _modDef12872 };
const obj3 = { uri: _modDef12872 };
obj[3] = { uri: _modDef12873 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/FrogIllocon.native.tsx");

export function FrogIllocon(size) {
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
  obj.source = num(7160).getAssetSource(obj);
  obj.style = memo;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return <tmp2 fadeDuration={0} source={null} style={null} accessible={null} accessibilityLabel={null} resizeMode={null} />;
}