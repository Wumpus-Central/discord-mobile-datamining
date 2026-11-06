// === Module 19341: ShopIllocon ===

// Module 19341 (ShopIllocon)
import FastImageDefault from "FastImage" /* 5872 */;
import assetHelpers from "assetHelpers" /* 7160 */;
import _modDef19342 from "module_19342" /* 19342 */;
import _modDef19343 from "module_19343" /* 19343 */;
import _modDef19344 from "module_19344" /* 19344 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef19342 }, 3: null };
const obj2 = { uri: _modDef19342 };
obj[2] = { uri: _modDef19343 };
const obj3 = { uri: _modDef19343 };
obj[3] = { uri: _modDef19344 };
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
  obj.source = num(7160).getAssetSource(obj);
  obj.style = memo;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return <tmp2 fadeDuration={0} source={null} style={null} accessible={null} accessibilityLabel={null} resizeMode={null} />;
}