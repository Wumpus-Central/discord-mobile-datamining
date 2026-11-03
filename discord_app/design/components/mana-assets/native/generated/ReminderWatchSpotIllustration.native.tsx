// === Module 11316: ReminderWatchSpotIllustration ===

// Module 11316 (ReminderWatchSpotIllustration)
import assetHelpers from "assetHelpers" /* 7195 */;
import _modDef11317 from "module_11317" /* 11317 */;
import _modDef11318 from "module_11318" /* 11318 */;
import _modDef11319 from "module_11319" /* 11319 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef11317 }, 3: null };
let obj2 = { uri: _modDef11317 };
obj[2] = { uri: _modDef11318 };
const obj3 = { uri: _modDef11318 };
obj[3] = { uri: _modDef11319 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/ReminderWatchSpotIllustration.native.tsx");

export function ReminderWatchSpotIllustration(width) {
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