// === Module 15451: TreasureChestBannerSpotIllustration ===

// Module 15451 (TreasureChestBannerSpotIllustration)
import assetHelpers from "assetHelpers" /* 7765 */;
import _modDef15452 from "module_15452" /* 15452 */;
import _modDef15453 from "module_15453" /* 15453 */;
import _modDef15454 from "module_15454" /* 15454 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef15452 }, 3: null };
let obj2 = { uri: _modDef15452 };
obj[2] = { uri: _modDef15453 };
const obj3 = { uri: _modDef15453 };
obj[3] = { uri: _modDef15454 };
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