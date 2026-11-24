// === Module 19120: ShopIllocon ===

// Module 19120 (ShopIllocon)
import FastImageDefault from "FastImage" /* 5604 */;
import assetHelpers from "assetHelpers" /* 7135 */;
import _modDef19121 from "module_19121" /* 19121 */;
import _modDef19122 from "module_19122" /* 19122 */;
import _modDef19123 from "module_19123" /* 19123 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef19121 }, 3: null };
const obj2 = { uri: _modDef19121 };
obj[2] = { uri: _modDef19122 };
const obj3 = { uri: _modDef19122 };
obj[3] = { uri: _modDef19123 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/ShopIllocon.native.tsx");

export function ShopIllocon(size) {
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