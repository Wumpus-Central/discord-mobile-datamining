// === Module 15572: TreasureChestBannerSpotIllustration ===

// Module 15572 (TreasureChestBannerSpotIllustration)
import assetHelpers from "assetHelpers" /* 7195 */;
import _modDef15573 from "module_15573" /* 15573 */;
import _modDef15574 from "module_15574" /* 15574 */;
import _modDef15575 from "module_15575" /* 15575 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef15573 }, 3: null };
let obj2 = { uri: _modDef15573 };
obj[2] = { uri: _modDef15574 };
const obj3 = { uri: _modDef15574 };
obj[3] = { uri: _modDef15575 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/TreasureChestBannerSpotIllustration.native.tsx");

export function TreasureChestBannerSpotIllustration(width) {
  width = width.width;
  const height = width.height;
  let num = width.scale;
  ({ accessible, accessibilityLabel, resizeMode } = width);
  if (num === undefined) {
    num = 1;
  }
  items = [width, height, num];
  const memo = noop.useMemo(() => {
    const size = { width, height, scale: num, intrinsicWidth: 173, intrinsicHeight: 138 };
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