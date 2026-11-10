// === Module 14565: PaintIllocon ===

// Module 14565 (PaintIllocon)
import FastImageDefault from "FastImage" /* 5844 */;
import assetHelpers from "assetHelpers" /* 7138 */;
import _modDef14566 from "module_14566" /* 14566 */;
import _modDef14567 from "module_14567" /* 14567 */;
import _modDef14568 from "module_14568" /* 14568 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef14566 }, 3: null };
const obj2 = { uri: _modDef14566 };
obj[2] = { uri: _modDef14567 };
const obj3 = { uri: _modDef14567 };
obj[3] = { uri: _modDef14568 };
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
  obj.source = num(7138).getAssetSource(obj);
  obj.style = memo;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return <tmp2 fadeDuration={0} source={null} style={null} accessible={null} accessibilityLabel={null} resizeMode={null} />;
}