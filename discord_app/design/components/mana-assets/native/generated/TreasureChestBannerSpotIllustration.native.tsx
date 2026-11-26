// === Module 14005: TreasureChestBannerSpotIllustration ===

// Module 14005 (TreasureChestBannerSpotIllustration)
import assetHelpers from "assetHelpers" /* 7261 */;
import _modDef14006 from "module_14006" /* 14006 */;
import _modDef14007 from "module_14007" /* 14007 */;
import _modDef14008 from "module_14008" /* 14008 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef14006 }, 3: null };
let obj2 = { uri: _modDef14006 };
obj[2] = { uri: _modDef14007 };
const obj3 = { uri: _modDef14007 };
obj[3] = { uri: _modDef14008 };
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