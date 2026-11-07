// === Module 14835: NitroScheduleMessageSpotIllustration ===

// Module 14835 (NitroScheduleMessageSpotIllustration)
import assetHelpers from "assetHelpers" /* 7135 */;
import _modDef14836 from "module_14836" /* 14836 */;
import _modDef14837 from "module_14837" /* 14837 */;
import _modDef14838 from "module_14838" /* 14838 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef14836 }, 3: null };
let obj2 = { uri: _modDef14836 };
obj[2] = { uri: _modDef14837 };
const obj3 = { uri: _modDef14837 };
obj[3] = { uri: _modDef14838 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/NitroScheduleMessageSpotIllustration.native.tsx");

export function NitroScheduleMessageSpotIllustration(width) {
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