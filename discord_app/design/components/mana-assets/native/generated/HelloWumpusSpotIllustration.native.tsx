// === Module 14281: HelloWumpusSpotIllustration ===

// Module 14281 (HelloWumpusSpotIllustration)
import assetHelpers from "assetHelpers" /* 7765 */;
import _modDef14282 from "module_14282" /* 14282 */;
import _modDef14283 from "module_14283" /* 14283 */;
import _modDef14284 from "module_14284" /* 14284 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef14282 }, 3: null };
let obj2 = { uri: _modDef14282 };
obj[2] = { uri: _modDef14283 };
const obj3 = { uri: _modDef14283 };
obj[3] = { uri: _modDef14284 };
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