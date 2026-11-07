// === Module 20327: MarketStallSpotIllustration ===

// Module 20327 (MarketStallSpotIllustration)
import assetHelpers from "assetHelpers" /* 7135 */;
import _modDef20328 from "module_20328" /* 20328 */;
import _modDef20329 from "module_20329" /* 20329 */;
import _modDef20330 from "module_20330" /* 20330 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef20328 }, 3: null };
let obj2 = { uri: _modDef20328 };
obj[2] = { uri: _modDef20329 };
const obj3 = { uri: _modDef20329 };
obj[3] = { uri: _modDef20330 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/MarketStallSpotIllustration.native.tsx");

export function MarketStallSpotIllustration(width) {
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