// === Module 12550: EnvelopeSpotIllustration ===

// Module 12550 (EnvelopeSpotIllustration)
import assetHelpers from "assetHelpers" /* 7230 */;
import _modDef12551 from "module_12551" /* 12551 */;
import _modDef12552 from "module_12552" /* 12552 */;
import _modDef12553 from "module_12553" /* 12553 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef12551 }, 3: null };
let obj2 = { uri: _modDef12551 };
obj[2] = { uri: _modDef12552 };
const obj3 = { uri: _modDef12552 };
obj[3] = { uri: _modDef12553 };
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