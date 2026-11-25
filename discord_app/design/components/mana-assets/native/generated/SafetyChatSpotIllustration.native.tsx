// === Module 17309: SafetyChatSpotIllustration ===

// Module 17309 (SafetyChatSpotIllustration)
import assetHelpers from "assetHelpers" /* 7230 */;
import _modDef17310 from "module_17310" /* 17310 */;
import _modDef17311 from "module_17311" /* 17311 */;
import _modDef17312 from "module_17312" /* 17312 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef17310 }, 3: null };
let obj2 = { uri: _modDef17310 };
obj[2] = { uri: _modDef17311 };
const obj3 = { uri: _modDef17311 };
obj[3] = { uri: _modDef17312 };
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