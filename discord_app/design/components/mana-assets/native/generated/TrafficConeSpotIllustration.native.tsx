// === Module 7134: TrafficConeSpotIllustration ===

// Module 7134 (TrafficConeSpotIllustration)
import _modDef7135 from "module_7135" /* 7135 */;
import _modDef7136 from "module_7136" /* 7136 */;
import _modDef7137 from "module_7137" /* 7137 */;
import assetHelpers from "assetHelpers" /* 7138 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef7135 }, 3: null };
let obj2 = { uri: _modDef7135 };
obj[2] = { uri: _modDef7136 };
const obj3 = { uri: _modDef7136 };
obj[3] = { uri: _modDef7137 };
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