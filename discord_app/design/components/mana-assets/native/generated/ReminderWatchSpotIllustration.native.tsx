// === Module 11374: ReminderWatchSpotIllustration ===

// Module 11374 (ReminderWatchSpotIllustration)
import assetHelpers from "assetHelpers" /* 7213 */;
import _modDef11375 from "module_11375" /* 11375 */;
import _modDef11376 from "module_11376" /* 11376 */;
import _modDef11377 from "module_11377" /* 11377 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef11375 }, 3: null };
let obj2 = { uri: _modDef11375 };
obj[2] = { uri: _modDef11376 };
const obj3 = { uri: _modDef11376 };
obj[3] = { uri: _modDef11377 };
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