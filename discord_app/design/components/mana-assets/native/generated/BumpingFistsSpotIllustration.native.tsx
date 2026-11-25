// === Module 14828: BumpingFistsSpotIllustration ===

// Module 14828 (BumpingFistsSpotIllustration)
import assetHelpers from "assetHelpers" /* 7230 */;
import _modDef14829 from "module_14829" /* 14829 */;
import _modDef14830 from "module_14830" /* 14830 */;
import _modDef14831 from "module_14831" /* 14831 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef14829 }, 3: null };
let obj2 = { uri: _modDef14829 };
obj[2] = { uri: _modDef14830 };
const obj3 = { uri: _modDef14830 };
obj[3] = { uri: _modDef14831 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/BumpingFistsSpotIllustration.native.tsx");

export function BumpingFistsSpotIllustration(width) {
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