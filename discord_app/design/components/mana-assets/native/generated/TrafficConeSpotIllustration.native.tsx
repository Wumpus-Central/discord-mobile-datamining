// === Module 7264: TrafficConeSpotIllustration ===

// Module 7264 (TrafficConeSpotIllustration)
import _modDef7265 from "module_7265" /* 7265 */;
import _modDef7266 from "module_7266" /* 7266 */;
import _modDef7267 from "module_7267" /* 7267 */;
import assetHelpers from "assetHelpers" /* 7268 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef7265 }, 3: null };
let obj2 = { uri: _modDef7265 };
obj[2] = { uri: _modDef7266 };
const obj3 = { uri: _modDef7266 };
obj[3] = { uri: _modDef7267 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/TrafficConeSpotIllustration.native.tsx");

export function TrafficConeSpotIllustration(width) {
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