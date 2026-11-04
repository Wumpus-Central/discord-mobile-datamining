// === Module 14472: FindFriendsSpotIllustration ===

// Module 14472 (FindFriendsSpotIllustration)
import assetHelpers from "assetHelpers" /* 7210 */;
import _modDef14473 from "module_14473" /* 14473 */;
import _modDef14474 from "module_14474" /* 14474 */;
import _modDef14475 from "module_14475" /* 14475 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef14473 }, 3: null };
let obj2 = { uri: _modDef14473 };
obj[2] = { uri: _modDef14474 };
const obj3 = { uri: _modDef14474 };
obj[3] = { uri: _modDef14475 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/FindFriendsSpotIllustration.native.tsx");

export function FindFriendsSpotIllustration(width) {
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