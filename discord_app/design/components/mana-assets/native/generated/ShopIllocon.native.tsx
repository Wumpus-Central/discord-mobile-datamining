// === Module 19820: ShopIllocon ===

// Module 19820 (ShopIllocon)
import FastImageDefault from "FastImage" /* 6020 */;
import assetHelpers from "assetHelpers" /* 7755 */;
import _modDef19821 from "module_19821" /* 19821 */;
import _modDef19822 from "module_19822" /* 19822 */;
import _modDef19823 from "module_19823" /* 19823 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef19821 }, 3: null };
const obj2 = { uri: _modDef19821 };
obj[2] = { uri: _modDef19822 };
const obj3 = { uri: _modDef19822 };
obj[3] = { uri: _modDef19823 };
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
  obj.source = num(7755).getAssetSource(obj);
  obj.style = memo;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return <tmp2 fadeDuration={0} source={null} style={null} accessible={null} accessibilityLabel={null} resizeMode={null} />;
}