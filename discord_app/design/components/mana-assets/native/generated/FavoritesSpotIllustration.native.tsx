// === Module 11106: FavoritesSpotIllustration ===

// Module 11106 (FavoritesSpotIllustration)
import assetHelpers from "assetHelpers" /* 7237 */;
import _modDef11107 from "module_11107" /* 11107 */;
import _modDef11108 from "module_11108" /* 11108 */;
import _modDef11109 from "module_11109" /* 11109 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef11107 }, 3: null };
let obj2 = { uri: _modDef11107 };
obj[2] = { uri: _modDef11108 };
const obj3 = { uri: _modDef11108 };
obj[3] = { uri: _modDef11109 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/FavoritesSpotIllustration.native.tsx");

export function FavoritesSpotIllustration(width) {
  width = width.width;
  const height = width.height;
  let num = width.scale;
  ({ accessible, accessibilityLabel, resizeMode } = width);
  if (num === undefined) {
    num = 1;
  }
  items = [width, height, num];
  const memo = noop.useMemo(() => {
    const size = { width, height, scale: num, intrinsicWidth: 288, intrinsicHeight: 162 };
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