// === Module 14578: InkQuillSpotIllustration ===

// Module 14578 (InkQuillSpotIllustration)
import assetHelpers from "assetHelpers" /* 7135 */;
import _modDef14579 from "module_14579" /* 14579 */;
import _modDef14580 from "module_14580" /* 14580 */;
import _modDef14581 from "module_14581" /* 14581 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef14579 }, 3: null };
let obj2 = { uri: _modDef14579 };
obj[2] = { uri: _modDef14580 };
const obj3 = { uri: _modDef14580 };
obj[3] = { uri: _modDef14581 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/InkQuillSpotIllustration.native.tsx");

export function InkQuillSpotIllustration(width) {
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