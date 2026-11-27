// === Module 13690: FindFriendsSpotIllustration ===

// Module 13690 (FindFriendsSpotIllustration)
import assetHelpers from "assetHelpers" /* 7261 */;
import _modDef13691 from "module_13691" /* 13691 */;
import _modDef13692 from "module_13692" /* 13692 */;
import _modDef13693 from "module_13693" /* 13693 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef13691 }, 3: null };
let obj2 = { uri: _modDef13691 };
obj[2] = { uri: _modDef13692 };
const obj3 = { uri: _modDef13692 };
obj[3] = { uri: _modDef13693 };
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