// === Module 18748: CompassSpotIllustration ===

// Module 18748 (CompassSpotIllustration)
import assetHelpers from "assetHelpers" /* 7237 */;
import _modDef18749 from "module_18749" /* 18749 */;
import _modDef18750 from "module_18750" /* 18750 */;
import _modDef18751 from "module_18751" /* 18751 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef18749 }, 3: null };
let obj2 = { uri: _modDef18749 };
obj[2] = { uri: _modDef18750 };
const obj3 = { uri: _modDef18750 };
obj[3] = { uri: _modDef18751 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/CompassSpotIllustration.native.tsx");

export function CompassSpotIllustration(width) {
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