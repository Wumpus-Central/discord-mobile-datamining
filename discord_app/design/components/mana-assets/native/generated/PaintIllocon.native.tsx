// === Module 14538: PaintIllocon ===

// Module 14538 (PaintIllocon)
import FastImageDefault from "FastImage" /* 5842 */;
import assetHelpers from "assetHelpers" /* 7135 */;
import _modDef14539 from "module_14539" /* 14539 */;
import _modDef14540 from "module_14540" /* 14540 */;
import _modDef14541 from "module_14541" /* 14541 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef14539 }, 3: null };
const obj2 = { uri: _modDef14539 };
obj[2] = { uri: _modDef14540 };
const obj3 = { uri: _modDef14540 };
obj[3] = { uri: _modDef14541 };
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
  obj.source = num(7135).getAssetSource(obj);
  obj.style = memo;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return <tmp2 fadeDuration={0} source={null} style={null} accessible={null} accessibilityLabel={null} resizeMode={null} />;
}