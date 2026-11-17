// === Module 7768: EnvelopeOpenSpotIllustration ===

// Module 7768 (EnvelopeOpenSpotIllustration)
import assetHelpers from "assetHelpers" /* 7765 */;
import _modDef7769 from "module_7769" /* 7769 */;
import _modDef7770 from "module_7770" /* 7770 */;
import _modDef7771 from "module_7771" /* 7771 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef7769 }, 3: null };
let obj2 = { uri: _modDef7769 };
obj[2] = { uri: _modDef7770 };
const obj3 = { uri: _modDef7770 };
obj[3] = { uri: _modDef7771 };
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