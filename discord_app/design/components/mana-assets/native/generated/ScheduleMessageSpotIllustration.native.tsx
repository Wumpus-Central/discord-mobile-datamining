// === Module 13317: ScheduleMessageSpotIllustration ===

// Module 13317 (ScheduleMessageSpotIllustration)
import assetHelpers from "assetHelpers" /* 7357 */;
import _modDef13318 from "module_13318" /* 13318 */;
import _modDef13319 from "module_13319" /* 13319 */;
import _modDef13320 from "module_13320" /* 13320 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef13318 }, 3: null };
let obj2 = { uri: _modDef13318 };
obj[2] = { uri: _modDef13319 };
const obj3 = { uri: _modDef13319 };
obj[3] = { uri: _modDef13320 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/ScheduleMessageSpotIllustration.native.tsx");

export function ScheduleMessageSpotIllustration(width) {
  width = width.width;
  const height = width.height;
  let num = width.scale;
  ({ accessible, accessibilityLabel, resizeMode } = width);
  if (num === undefined) {
    num = 1;
  }
  items = [width, height, num];
  const memo = noop.useMemo(() => {
    const size = { width, height, scale: num, intrinsicWidth: 288, intrinsicHeight: 192 };
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