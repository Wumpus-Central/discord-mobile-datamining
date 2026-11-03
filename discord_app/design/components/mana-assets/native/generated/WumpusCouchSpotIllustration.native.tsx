// === Module 17234: WumpusCouchSpotIllustration ===

// Module 17234 (WumpusCouchSpotIllustration)
import assetHelpers from "assetHelpers" /* 7195 */;
import _modDef17235 from "module_17235" /* 17235 */;
import _modDef17236 from "module_17236" /* 17236 */;
import _modDef17237 from "module_17237" /* 17237 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef17235 }, 3: null };
let obj2 = { uri: _modDef17235 };
obj[2] = { uri: _modDef17236 };
const obj3 = { uri: _modDef17236 };
obj[3] = { uri: _modDef17237 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/WumpusCouchSpotIllustration.native.tsx");

export function WumpusCouchSpotIllustration(width) {
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