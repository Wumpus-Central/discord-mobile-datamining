// === Module 20000: PerksTicketSpotIllustration ===

// Module 20000 (PerksTicketSpotIllustration)
import assetHelpers from "assetHelpers" /* 7238 */;
import _modDef20001 from "module_20001" /* 20001 */;
import _modDef20002 from "module_20002" /* 20002 */;
import _modDef20003 from "module_20003" /* 20003 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef20001 }, 3: null };
let obj2 = { uri: _modDef20001 };
obj[2] = { uri: _modDef20002 };
const obj3 = { uri: _modDef20002 };
obj[3] = { uri: _modDef20003 };
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