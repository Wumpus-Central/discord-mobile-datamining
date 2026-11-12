// === Module 19627: ShopIllocon ===

// Module 19627 (ShopIllocon)
import FastImageDefault from "FastImage" /* 5957 */;
import assetHelpers from "assetHelpers" /* 7689 */;
import _modDef19628 from "module_19628" /* 19628 */;
import _modDef19629 from "module_19629" /* 19629 */;
import _modDef19630 from "module_19630" /* 19630 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef19628 }, 3: null };
const obj2 = { uri: _modDef19628 };
obj[2] = { uri: _modDef19629 };
const obj3 = { uri: _modDef19629 };
obj[3] = { uri: _modDef19630 };
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
  obj.source = num(7689).getAssetSource(obj);
  obj.style = memo;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return <tmp2 fadeDuration={0} source={null} style={null} accessible={null} accessibilityLabel={null} resizeMode={null} />;
}