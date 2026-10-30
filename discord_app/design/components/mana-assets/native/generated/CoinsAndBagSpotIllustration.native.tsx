// === Module 19832: CoinsAndBagSpotIllustration ===

// Module 19832 (CoinsAndBagSpotIllustration)
import assetHelpers from "assetHelpers" /* 7063 */;
import _modDef19833 from "module_19833" /* 19833 */;
import _modDef19834 from "module_19834" /* 19834 */;
import _modDef19835 from "module_19835" /* 19835 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef19833 }, 3: null };
let obj2 = { uri: _modDef19833 };
obj[2] = { uri: _modDef19834 };
const obj3 = { uri: _modDef19834 };
obj[3] = { uri: _modDef19835 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/CoinsAndBagSpotIllustration.native.tsx");

export function CoinsAndBagSpotIllustration(width) {
  width = width.width;
  const height = width.height;
  let num = width.scale;
  ({ accessible, accessibilityLabel, resizeMode } = width);
  if (num === undefined) {
    num = 1;
  }
  const items = [width, height, num];
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