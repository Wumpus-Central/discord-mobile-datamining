// === Module 12247: HighFiveSpotIllustration ===

// Module 12247 (HighFiveSpotIllustration)
import assetHelpers from "assetHelpers" /* 7357 */;
import _modDef12248 from "module_12248" /* 12248 */;
import _modDef12249 from "module_12249" /* 12249 */;
import _modDef12250 from "module_12250" /* 12250 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef12248 }, 3: null };
let obj2 = { uri: _modDef12248 };
obj[2] = { uri: _modDef12249 };
const obj3 = { uri: _modDef12249 };
obj[3] = { uri: _modDef12250 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/HighFiveSpotIllustration.native.tsx");

export function HighFiveSpotIllustration(width) {
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