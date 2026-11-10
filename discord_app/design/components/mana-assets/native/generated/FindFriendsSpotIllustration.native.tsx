// === Module 14522: FindFriendsSpotIllustration ===

// Module 14522 (FindFriendsSpotIllustration)
import assetHelpers from "assetHelpers" /* 7138 */;
import _modDef14523 from "module_14523" /* 14523 */;
import _modDef14524 from "module_14524" /* 14524 */;
import _modDef14525 from "module_14525" /* 14525 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef14523 }, 3: null };
let obj2 = { uri: _modDef14523 };
obj[2] = { uri: _modDef14524 };
const obj3 = { uri: _modDef14524 };
obj[3] = { uri: _modDef14525 };
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