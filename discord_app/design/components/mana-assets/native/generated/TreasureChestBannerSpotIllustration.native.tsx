// === Module 15719: TreasureChestBannerSpotIllustration ===

// Module 15719 (TreasureChestBannerSpotIllustration)
import assetHelpers from "assetHelpers" /* 7135 */;
import _modDef15720 from "module_15720" /* 15720 */;
import _modDef15721 from "module_15721" /* 15721 */;
import _modDef15722 from "module_15722" /* 15722 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef15720 }, 3: null };
let obj2 = { uri: _modDef15720 };
obj[2] = { uri: _modDef15721 };
const obj3 = { uri: _modDef15721 };
obj[3] = { uri: _modDef15722 };
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