// === Module 14750: ScheduleMessageSpotIllustration ===

// Module 14750 (ScheduleMessageSpotIllustration)
import assetHelpers from "assetHelpers" /* 7689 */;
import _modDef14751 from "module_14751" /* 14751 */;
import _modDef14752 from "module_14752" /* 14752 */;
import _modDef14753 from "module_14753" /* 14753 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef14751 }, 3: null };
let obj2 = { uri: _modDef14751 };
obj[2] = { uri: _modDef14752 };
const obj3 = { uri: _modDef14752 };
obj[3] = { uri: _modDef14753 };
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