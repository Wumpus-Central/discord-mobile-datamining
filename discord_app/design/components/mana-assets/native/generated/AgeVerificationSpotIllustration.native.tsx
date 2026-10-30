// === Module 8013: AgeVerificationSpotIllustration ===

// Module 8013 (AgeVerificationSpotIllustration)
import assetHelpers from "assetHelpers" /* 7063 */;
import _modDef8014 from "module_8014" /* 8014 */;
import _modDef8015 from "module_8015" /* 8015 */;
import _modDef8016 from "module_8016" /* 8016 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef8014 }, 3: null };
let obj2 = { uri: _modDef8014 };
obj[2] = { uri: _modDef8015 };
const obj3 = { uri: _modDef8015 };
obj[3] = { uri: _modDef8016 };
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
  const items = [width, height, num];
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