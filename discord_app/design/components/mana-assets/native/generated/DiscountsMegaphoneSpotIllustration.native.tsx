// === Module 15185: DiscountsMegaphoneSpotIllustration ===

// Module 15185 (DiscountsMegaphoneSpotIllustration)
import assetHelpers from "assetHelpers" /* 7195 */;
import _modDef15186 from "module_15186" /* 15186 */;
import _modDef15187 from "module_15187" /* 15187 */;
import _modDef15188 from "module_15188" /* 15188 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef15186 }, 3: null };
let obj2 = { uri: _modDef15186 };
obj[2] = { uri: _modDef15187 };
const obj3 = { uri: _modDef15187 };
obj[3] = { uri: _modDef15188 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/DiscountsMegaphoneSpotIllustration.native.tsx");

export function DiscountsMegaphoneSpotIllustration(width) {
  width = width.width;
  const height = width.height;
  let num = width.scale;
  ({ accessible, accessibilityLabel, resizeMode } = width);
  if (num === undefined) {
    num = 1;
  }
  items = [width, height, num];
  const memo = noop.useMemo(() => {
    const size = { width, height, scale: num, intrinsicWidth: 288, intrinsicHeight: 192 };
    return assetHelpers.getAssetSizeStyle(size);
  }, items);
  obj = { fadeDuration: 0, source: null, style: null, accessible: null, accessibilityLabel: null, resizeMode: null };
  const tmp2 = height(num[6]);
  obj.source = width(num[5]).getAssetSource(obj);
  obj.style = memo;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  const obj2 = width(num[5]);
  obj.resizeMode = width(num[5]).getAssetResizeMode(resizeMode);
  return <tmp2 fadeDuration={0} source={null} style={null} accessible={null} accessibilityLabel={null} resizeMode={null} />;
}