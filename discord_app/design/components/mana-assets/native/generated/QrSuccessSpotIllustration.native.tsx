// === Module 15991: QrSuccessSpotIllustration ===

// Module 15991 (QrSuccessSpotIllustration)
import assetHelpers from "assetHelpers" /* 7135 */;
import _modDef15992 from "module_15992" /* 15992 */;
import _modDef15993 from "module_15993" /* 15993 */;
import _modDef15994 from "module_15994" /* 15994 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef15992 }, 3: null };
let obj2 = { uri: _modDef15992 };
obj[2] = { uri: _modDef15993 };
const obj3 = { uri: _modDef15993 };
obj[3] = { uri: _modDef15994 };
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