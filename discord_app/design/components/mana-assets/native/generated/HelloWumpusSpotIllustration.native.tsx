// === Module 13692: HelloWumpusSpotIllustration ===

// Module 13692 (HelloWumpusSpotIllustration)
import assetHelpers from "assetHelpers" /* 7230 */;
import _modDef13693 from "module_13693" /* 13693 */;
import _modDef13694 from "module_13694" /* 13694 */;
import _modDef13695 from "module_13695" /* 13695 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef13693 }, 3: null };
let obj2 = { uri: _modDef13693 };
obj[2] = { uri: _modDef13694 };
const obj3 = { uri: _modDef13694 };
obj[3] = { uri: _modDef13695 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/HelloWumpusSpotIllustration.native.tsx");

export function HelloWumpusSpotIllustration(width) {
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