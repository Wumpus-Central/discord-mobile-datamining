// === Module 13674: PaintIllocon ===

// Module 13674 (PaintIllocon)
import FastImageDefault from "FastImage" /* 5699 */;
import assetHelpers from "assetHelpers" /* 7230 */;
import _modDef13675 from "module_13675" /* 13675 */;
import _modDef13676 from "module_13676" /* 13676 */;
import _modDef13677 from "module_13677" /* 13677 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef13675 }, 3: null };
const obj2 = { uri: _modDef13675 };
obj[2] = { uri: _modDef13676 };
const obj3 = { uri: _modDef13676 };
obj[3] = { uri: _modDef13677 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/PaintIllocon.native.tsx");

export function PaintIllocon(size) {
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
  obj.source = num(7230).getAssetSource(obj);
  obj.style = memo;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return <tmp2 fadeDuration={0} source={null} style={null} accessible={null} accessibilityLabel={null} resizeMode={null} />;
}