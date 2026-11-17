// === Module 8269: AgeVerificationSpotIllustration ===

// Module 8269 (AgeVerificationSpotIllustration)
import assetHelpers from "assetHelpers" /* 7765 */;
import _modDef8270 from "module_8270" /* 8270 */;
import _modDef8271 from "module_8271" /* 8271 */;
import _modDef8272 from "module_8272" /* 8272 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef8270 }, 3: null };
let obj2 = { uri: _modDef8270 };
obj[2] = { uri: _modDef8271 };
const obj3 = { uri: _modDef8271 };
obj[3] = { uri: _modDef8272 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/AgeVerificationSpotIllustration.native.tsx");

export function AgeVerificationSpotIllustration(width) {
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