// === Module 8166: AgeVerificationSpotIllustration ===

// Module 8166 (AgeVerificationSpotIllustration)
import assetHelpers from "assetHelpers" /* 7213 */;
import _modDef8167 from "module_8167" /* 8167 */;
import _modDef8168 from "module_8168" /* 8168 */;
import _modDef8169 from "module_8169" /* 8169 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef8167 }, 3: null };
let obj2 = { uri: _modDef8167 };
obj[2] = { uri: _modDef8168 };
const obj3 = { uri: _modDef8168 };
obj[3] = { uri: _modDef8169 };
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