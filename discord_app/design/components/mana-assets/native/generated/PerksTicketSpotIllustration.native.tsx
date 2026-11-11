// === Module 20516: PerksTicketSpotIllustration ===

// Module 20516 (PerksTicketSpotIllustration)
import assetHelpers from "assetHelpers" /* 7689 */;
import _modDef20517 from "module_20517" /* 20517 */;
import _modDef20518 from "module_20518" /* 20518 */;
import _modDef20519 from "module_20519" /* 20519 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef20517 }, 3: null };
let obj2 = { uri: _modDef20517 };
obj[2] = { uri: _modDef20518 };
const obj3 = { uri: _modDef20518 };
obj[3] = { uri: _modDef20519 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/PerksTicketSpotIllustration.native.tsx");

export function PerksTicketSpotIllustration(width) {
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