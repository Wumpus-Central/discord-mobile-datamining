// === Module 14220: ScheduleMessageSpotIllustration ===

// Module 14220 (ScheduleMessageSpotIllustration)
import assetHelpers from "assetHelpers" /* 7210 */;
import _modDef14221 from "module_14221" /* 14221 */;
import _modDef14222 from "module_14222" /* 14222 */;
import _modDef14223 from "module_14223" /* 14223 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef14221 }, 3: null };
let obj2 = { uri: _modDef14221 };
obj[2] = { uri: _modDef14222 };
const obj3 = { uri: _modDef14222 };
obj[3] = { uri: _modDef14223 };
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