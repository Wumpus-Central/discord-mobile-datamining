// === Module 20154: PerksTicketSpotIllustration ===

// Module 20154 (PerksTicketSpotIllustration)
import assetHelpers from "assetHelpers" /* 7210 */;
import _modDef20155 from "module_20155" /* 20155 */;
import _modDef20156 from "module_20156" /* 20156 */;
import _modDef20157 from "module_20157" /* 20157 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef20155 }, 3: null };
let obj2 = { uri: _modDef20155 };
obj[2] = { uri: _modDef20156 };
const obj3 = { uri: _modDef20156 };
obj[3] = { uri: _modDef20157 };
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