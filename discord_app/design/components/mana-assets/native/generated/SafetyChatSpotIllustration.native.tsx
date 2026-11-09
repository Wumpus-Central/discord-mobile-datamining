// === Module 18059: SafetyChatSpotIllustration ===

// Module 18059 (SafetyChatSpotIllustration)
import assetHelpers from "assetHelpers" /* 7135 */;
import _modDef18060 from "module_18060" /* 18060 */;
import _modDef18061 from "module_18061" /* 18061 */;
import _modDef18062 from "module_18062" /* 18062 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef18060 }, 3: null };
let obj2 = { uri: _modDef18060 };
obj[2] = { uri: _modDef18061 };
const obj3 = { uri: _modDef18061 };
obj[3] = { uri: _modDef18062 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/SafetyChatSpotIllustration.native.tsx");

export function SafetyChatSpotIllustration(width) {
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