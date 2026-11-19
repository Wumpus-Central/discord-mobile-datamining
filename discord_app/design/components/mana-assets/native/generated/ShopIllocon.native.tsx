// === Module 19130: ShopIllocon ===

// Module 19130 (ShopIllocon)
import FastImageDefault from "FastImage" /* 5479 */;
import assetHelpers from "assetHelpers" /* 7238 */;
import _modDef19131 from "module_19131" /* 19131 */;
import _modDef19132 from "module_19132" /* 19132 */;
import _modDef19133 from "module_19133" /* 19133 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef19131 }, 3: null };
const obj2 = { uri: _modDef19131 };
obj[2] = { uri: _modDef19132 };
const obj3 = { uri: _modDef19132 };
obj[3] = { uri: _modDef19133 };
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
  obj.source = num(7238).getAssetSource(obj);
  obj.style = memo;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return <tmp2 fadeDuration={0} source={null} style={null} accessible={null} accessibilityLabel={null} resizeMode={null} />;
}