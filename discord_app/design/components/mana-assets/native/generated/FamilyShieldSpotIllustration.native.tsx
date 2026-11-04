// === Module 13593: FamilyShieldSpotIllustration ===

// Module 13593 (FamilyShieldSpotIllustration)
import assetHelpers from "assetHelpers" /* 7210 */;
import _modDef13594 from "module_13594" /* 13594 */;
import _modDef13595 from "module_13595" /* 13595 */;
import _modDef13596 from "module_13596" /* 13596 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef13594 }, 3: null };
let obj2 = { uri: _modDef13594 };
obj[2] = { uri: _modDef13595 };
const obj3 = { uri: _modDef13595 };
obj[3] = { uri: _modDef13596 };
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