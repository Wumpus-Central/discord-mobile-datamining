// === Module 13588: EnvelopeSpotIllustration ===

// Module 13588 (EnvelopeSpotIllustration)
import assetHelpers from "assetHelpers" /* 7210 */;
import _modDef13589 from "module_13589" /* 13589 */;
import _modDef13590 from "module_13590" /* 13590 */;
import _modDef13591 from "module_13591" /* 13591 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef13589 }, 3: null };
let obj2 = { uri: _modDef13589 };
obj[2] = { uri: _modDef13590 };
const obj3 = { uri: _modDef13590 };
obj[3] = { uri: _modDef13591 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/EnvelopeSpotIllustration.native.tsx");

export function EnvelopeSpotIllustration(width) {
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