// === Module 19995: FamilyKeysSpotIllustration ===

// Module 19995 (FamilyKeysSpotIllustration)
import assetHelpers from "assetHelpers" /* 7135 */;
import _modDef19996 from "module_19996" /* 19996 */;
import _modDef19997 from "module_19997" /* 19997 */;
import _modDef19998 from "module_19998" /* 19998 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef19996 }, 3: null };
let obj2 = { uri: _modDef19996 };
obj[2] = { uri: _modDef19997 };
const obj3 = { uri: _modDef19997 };
obj[3] = { uri: _modDef19998 };
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