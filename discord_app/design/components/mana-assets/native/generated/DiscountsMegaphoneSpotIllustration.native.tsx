// === Module 15317: DiscountsMegaphoneSpotIllustration ===

// Module 15317 (DiscountsMegaphoneSpotIllustration)
import assetHelpers from "assetHelpers" /* 7135 */;
import _modDef15318 from "module_15318" /* 15318 */;
import _modDef15319 from "module_15319" /* 15319 */;
import _modDef15320 from "module_15320" /* 15320 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef15318 }, 3: null };
let obj2 = { uri: _modDef15318 };
obj[2] = { uri: _modDef15319 };
const obj3 = { uri: _modDef15319 };
obj[3] = { uri: _modDef15320 };
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