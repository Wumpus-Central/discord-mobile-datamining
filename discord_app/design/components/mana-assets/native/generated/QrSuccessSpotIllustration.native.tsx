// === Module 15647: QrSuccessSpotIllustration ===

// Module 15647 (QrSuccessSpotIllustration)
import assetHelpers from "assetHelpers" /* 7063 */;
import _modDef15648 from "module_15648" /* 15648 */;
import _modDef15649 from "module_15649" /* 15649 */;
import _modDef15650 from "module_15650" /* 15650 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef15648 }, 3: null };
let obj2 = { uri: _modDef15648 };
obj[2] = { uri: _modDef15649 };
const obj3 = { uri: _modDef15649 };
obj[3] = { uri: _modDef15650 };
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
  const items = [width, height, num];
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