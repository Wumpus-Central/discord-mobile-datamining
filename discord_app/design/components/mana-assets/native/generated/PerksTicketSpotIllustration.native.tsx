// === Module 20216: PerksTicketSpotIllustration ===

// Module 20216 (PerksTicketSpotIllustration)
import assetHelpers from "assetHelpers" /* 7261 */;
import _modDef20217 from "module_20217" /* 20217 */;
import _modDef20218 from "module_20218" /* 20218 */;
import _modDef20219 from "module_20219" /* 20219 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef20217 }, 3: null };
let obj2 = { uri: _modDef20217 };
obj[2] = { uri: _modDef20218 };
const obj3 = { uri: _modDef20218 };
obj[3] = { uri: _modDef20219 };
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