// === Module 12353: FamilyShieldSpotIllustration ===

// Module 12353 (FamilyShieldSpotIllustration)
import assetHelpers from "assetHelpers" /* 7237 */;
import _modDef12354 from "module_12354" /* 12354 */;
import _modDef12355 from "module_12355" /* 12355 */;
import _modDef12356 from "module_12356" /* 12356 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef12354 }, 3: null };
let obj2 = { uri: _modDef12354 };
obj[2] = { uri: _modDef12355 };
const obj3 = { uri: _modDef12355 };
obj[3] = { uri: _modDef12356 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/FamilyShieldSpotIllustration.native.tsx");

export function FamilyShieldSpotIllustration(width) {
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