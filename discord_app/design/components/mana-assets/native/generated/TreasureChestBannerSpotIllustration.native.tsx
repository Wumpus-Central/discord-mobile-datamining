// === Module 15747: TreasureChestBannerSpotIllustration ===

// Module 15747 (TreasureChestBannerSpotIllustration)
import assetHelpers from "assetHelpers" /* 7138 */;
import _modDef15748 from "module_15748" /* 15748 */;
import _modDef15749 from "module_15749" /* 15749 */;
import _modDef15750 from "module_15750" /* 15750 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef15748 }, 3: null };
let obj2 = { uri: _modDef15748 };
obj[2] = { uri: _modDef15749 };
const obj3 = { uri: _modDef15749 };
obj[3] = { uri: _modDef15750 };
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