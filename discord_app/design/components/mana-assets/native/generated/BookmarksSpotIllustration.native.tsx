// === Module 11744: BookmarksSpotIllustration ===

// Module 11744 (BookmarksSpotIllustration)
import assetHelpers from "assetHelpers" /* 7261 */;
import _modDef11745 from "module_11745" /* 11745 */;
import _modDef11746 from "module_11746" /* 11746 */;
import _modDef11747 from "module_11747" /* 11747 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef11745 }, 3: null };
let obj2 = { uri: _modDef11745 };
obj[2] = { uri: _modDef11746 };
const obj3 = { uri: _modDef11746 };
obj[3] = { uri: _modDef11747 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/BookmarksSpotIllustration.native.tsx");

export function BookmarksSpotIllustration(width) {
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