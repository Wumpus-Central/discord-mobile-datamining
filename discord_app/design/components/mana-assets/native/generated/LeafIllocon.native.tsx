// === Module 14292: LeafIllocon ===

// Module 14292 (LeafIllocon)
import FastImageDefault from "FastImage" /* 5717 */;
import assetHelpers from "assetHelpers" /* 7069 */;
import _modDef14293 from "module_14293" /* 14293 */;
import _modDef14294 from "module_14294" /* 14294 */;
import _modDef14295 from "module_14295" /* 14295 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef14293 }, 3: null };
const obj2 = { uri: _modDef14293 };
obj[2] = { uri: _modDef14294 };
const obj3 = { uri: _modDef14294 };
obj[3] = { uri: _modDef14295 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/LeafIllocon.native.tsx");

export function LeafIllocon(size) {
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
  obj.source = num(7069).getAssetSource(obj);
  obj.style = memo;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return <tmp2 fadeDuration={0} source={null} style={null} accessible={null} accessibilityLabel={null} resizeMode={null} />;
}