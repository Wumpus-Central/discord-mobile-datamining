// === Module 18481: MiniaturesSpotIllustration ===

// Module 18481 (MiniaturesSpotIllustration)
import assetHelpers from "assetHelpers" /* 7195 */;
import _modDef18482 from "module_18482" /* 18482 */;
import _modDef18483 from "module_18483" /* 18483 */;
import _modDef18484 from "module_18484" /* 18484 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef18482 }, 3: null };
let obj2 = { uri: _modDef18482 };
obj[2] = { uri: _modDef18483 };
const obj3 = { uri: _modDef18483 };
obj[3] = { uri: _modDef18484 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/MiniaturesSpotIllustration.native.tsx");

export function MiniaturesSpotIllustration(width) {
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