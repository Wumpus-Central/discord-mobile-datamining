// === Module 19231: ShopIllocon ===

// Module 19231 (ShopIllocon)
import FastImageDefault from "FastImage" /* 5699 */;
import assetHelpers from "assetHelpers" /* 7230 */;
import _modDef19232 from "module_19232" /* 19232 */;
import _modDef19233 from "module_19233" /* 19233 */;
import _modDef19234 from "module_19234" /* 19234 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef19232 }, 3: null };
const obj2 = { uri: _modDef19232 };
obj[2] = { uri: _modDef19233 };
const obj3 = { uri: _modDef19233 };
obj[3] = { uri: _modDef19234 };
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
  obj.source = num(7230).getAssetSource(obj);
  obj.style = memo;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return <tmp2 fadeDuration={0} source={null} style={null} accessible={null} accessibilityLabel={null} resizeMode={null} />;
}