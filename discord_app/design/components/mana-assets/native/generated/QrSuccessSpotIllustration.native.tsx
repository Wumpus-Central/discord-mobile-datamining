// === Module 15936: QrSuccessSpotIllustration ===

// Module 15936 (QrSuccessSpotIllustration)
import assetHelpers from "assetHelpers" /* 7210 */;
import _modDef15937 from "module_15937" /* 15937 */;
import _modDef15938 from "module_15938" /* 15938 */;
import _modDef15939 from "module_15939" /* 15939 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef15937 }, 3: null };
let obj2 = { uri: _modDef15937 };
obj[2] = { uri: _modDef15938 };
const obj3 = { uri: _modDef15938 };
obj[3] = { uri: _modDef15939 };
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