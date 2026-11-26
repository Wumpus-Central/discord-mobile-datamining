// === Module 16665: ChestLogoSpotIllustration ===

// Module 16665 (ChestLogoSpotIllustration)
import assetHelpers from "assetHelpers" /* 7261 */;
import _modDef16666 from "module_16666" /* 16666 */;
import _modDef16667 from "module_16667" /* 16667 */;
import _modDef16668 from "module_16668" /* 16668 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef16666 }, 3: null };
let obj2 = { uri: _modDef16666 };
obj[2] = { uri: _modDef16667 };
const obj3 = { uri: _modDef16667 };
obj[3] = { uri: _modDef16668 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/ChestLogoSpotIllustration.native.tsx");

export function ChestLogoSpotIllustration(width) {
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