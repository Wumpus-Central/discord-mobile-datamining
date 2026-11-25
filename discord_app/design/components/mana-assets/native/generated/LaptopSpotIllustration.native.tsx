// === Module 13857: LaptopSpotIllustration ===

// Module 13857 (LaptopSpotIllustration)
import assetHelpers from "assetHelpers" /* 7230 */;
import _modDef13858 from "module_13858" /* 13858 */;
import _modDef13859 from "module_13859" /* 13859 */;
import _modDef13860 from "module_13860" /* 13860 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef13858 }, 3: null };
let obj2 = { uri: _modDef13858 };
obj[2] = { uri: _modDef13859 };
const obj3 = { uri: _modDef13859 };
obj[3] = { uri: _modDef13860 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/LaptopSpotIllustration.native.tsx");

export function LaptopSpotIllustration(width) {
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