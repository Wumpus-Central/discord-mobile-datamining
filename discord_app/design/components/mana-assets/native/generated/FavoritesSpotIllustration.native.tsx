// === Module 10703: FavoritesSpotIllustration ===

// Module 10703 (FavoritesSpotIllustration)
import assetHelpers from "assetHelpers" /* 7230 */;
import _modDef10704 from "module_10704" /* 10704 */;
import _modDef10705 from "module_10705" /* 10705 */;
import _modDef10706 from "module_10706" /* 10706 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef10704 }, 3: null };
let obj2 = { uri: _modDef10704 };
obj[2] = { uri: _modDef10705 };
const obj3 = { uri: _modDef10705 };
obj[3] = { uri: _modDef10706 };
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