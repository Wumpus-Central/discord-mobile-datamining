// === Module 7198: EnvelopeOpenSpotIllustration ===

// Module 7198 (EnvelopeOpenSpotIllustration)
import assetHelpers from "assetHelpers" /* 7195 */;
import _modDef7199 from "module_7199" /* 7199 */;
import _modDef7200 from "module_7200" /* 7200 */;
import _modDef7201 from "module_7201" /* 7201 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef7199 }, 3: null };
let obj2 = { uri: _modDef7199 };
obj[2] = { uri: _modDef7200 };
const obj3 = { uri: _modDef7200 };
obj[3] = { uri: _modDef7201 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/EnvelopeOpenSpotIllustration.native.tsx");

export function EnvelopeOpenSpotIllustration(width) {
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