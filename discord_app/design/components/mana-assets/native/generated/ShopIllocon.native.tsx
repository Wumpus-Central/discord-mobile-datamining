// === Module 19304: ShopIllocon ===

// Module 19304 (ShopIllocon)
import FastImageDefault from "FastImage" /* 5851 */;
import assetHelpers from "assetHelpers" /* 7210 */;
import _modDef19305 from "module_19305" /* 19305 */;
import _modDef19306 from "module_19306" /* 19306 */;
import _modDef19307 from "module_19307" /* 19307 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef19305 }, 3: null };
const obj2 = { uri: _modDef19305 };
obj[2] = { uri: _modDef19306 };
const obj3 = { uri: _modDef19306 };
obj[3] = { uri: _modDef19307 };
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
  obj.source = num(7210).getAssetSource(obj);
  obj.style = memo;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return <tmp2 fadeDuration={0} source={null} style={null} accessible={null} accessibilityLabel={null} resizeMode={null} />;
}