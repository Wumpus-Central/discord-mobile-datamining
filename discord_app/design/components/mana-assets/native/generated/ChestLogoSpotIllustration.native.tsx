// === Module 16337: ChestLogoSpotIllustration ===

// Module 16337 (ChestLogoSpotIllustration)
import assetHelpers from "assetHelpers" /* 7237 */;
import _modDef16338 from "module_16338" /* 16338 */;
import _modDef16339 from "module_16339" /* 16339 */;
import _modDef16340 from "module_16340" /* 16340 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef16338 }, 3: null };
let obj2 = { uri: _modDef16338 };
obj[2] = { uri: _modDef16339 };
const obj3 = { uri: _modDef16339 };
obj[3] = { uri: _modDef16340 };
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