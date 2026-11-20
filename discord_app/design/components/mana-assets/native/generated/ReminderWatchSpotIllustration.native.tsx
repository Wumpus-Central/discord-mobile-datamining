// === Module 11588: ReminderWatchSpotIllustration ===

// Module 11588 (ReminderWatchSpotIllustration)
import assetHelpers from "assetHelpers" /* 7237 */;
import _modDef11589 from "module_11589" /* 11589 */;
import _modDef11590 from "module_11590" /* 11590 */;
import _modDef11591 from "module_11591" /* 11591 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef11589 }, 3: null };
let obj2 = { uri: _modDef11589 };
obj[2] = { uri: _modDef11590 };
const obj3 = { uri: _modDef11590 };
obj[3] = { uri: _modDef11591 };
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