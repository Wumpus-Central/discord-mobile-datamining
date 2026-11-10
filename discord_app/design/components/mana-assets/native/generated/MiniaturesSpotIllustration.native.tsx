// === Module 18698: MiniaturesSpotIllustration ===

// Module 18698 (MiniaturesSpotIllustration)
import assetHelpers from "assetHelpers" /* 7138 */;
import _modDef18699 from "module_18699" /* 18699 */;
import _modDef18700 from "module_18700" /* 18700 */;
import _modDef18701 from "module_18701" /* 18701 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef18699 }, 3: null };
let obj2 = { uri: _modDef18699 };
obj[2] = { uri: _modDef18700 };
const obj3 = { uri: _modDef18700 };
obj[3] = { uri: _modDef18701 };
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