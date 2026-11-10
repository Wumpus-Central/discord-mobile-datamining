// === Module 16028: QrSuccessSpotIllustration ===

// Module 16028 (QrSuccessSpotIllustration)
import assetHelpers from "assetHelpers" /* 7138 */;
import _modDef16029 from "module_16029" /* 16029 */;
import _modDef16030 from "module_16030" /* 16030 */;
import _modDef16031 from "module_16031" /* 16031 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef16029 }, 3: null };
let obj2 = { uri: _modDef16029 };
obj[2] = { uri: _modDef16030 };
const obj3 = { uri: _modDef16030 };
obj[3] = { uri: _modDef16031 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/QrSuccessSpotIllustration.native.tsx");

export function QrSuccessSpotIllustration(width) {
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