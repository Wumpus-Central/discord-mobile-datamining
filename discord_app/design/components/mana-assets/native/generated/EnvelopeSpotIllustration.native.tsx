// === Module 13098: EnvelopeSpotIllustration ===

// Module 13098 (EnvelopeSpotIllustration)
import assetHelpers from "assetHelpers" /* 7765 */;
import _modDef13099 from "module_13099" /* 13099 */;
import _modDef13100 from "module_13100" /* 13100 */;
import _modDef13101 from "module_13101" /* 13101 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef13099 }, 3: null };
let obj2 = { uri: _modDef13099 };
obj[2] = { uri: _modDef13100 };
const obj3 = { uri: _modDef13100 };
obj[3] = { uri: _modDef13101 };
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