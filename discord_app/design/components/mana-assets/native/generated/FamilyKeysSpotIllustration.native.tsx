// === Module 20371: FamilyKeysSpotIllustration ===

// Module 20371 (FamilyKeysSpotIllustration)
import assetHelpers from "assetHelpers" /* 7755 */;
import _modDef20372 from "module_20372" /* 20372 */;
import _modDef20373 from "module_20373" /* 20373 */;
import _modDef20374 from "module_20374" /* 20374 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef20372 }, 3: null };
let obj2 = { uri: _modDef20372 };
obj[2] = { uri: _modDef20373 };
const obj3 = { uri: _modDef20373 };
obj[3] = { uri: _modDef20374 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/FamilyKeysSpotIllustration.native.tsx");

export function FamilyKeysSpotIllustration(width) {
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