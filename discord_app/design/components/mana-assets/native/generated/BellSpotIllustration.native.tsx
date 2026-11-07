// === Module 18367: BellSpotIllustration ===

// Module 18367 (BellSpotIllustration)
import assetHelpers from "assetHelpers" /* 7135 */;
import _modDef18368 from "module_18368" /* 18368 */;
import _modDef18369 from "module_18369" /* 18369 */;
import _modDef18370 from "module_18370" /* 18370 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef18368 }, 3: null };
let obj2 = { uri: _modDef18368 };
obj[2] = { uri: _modDef18369 };
const obj3 = { uri: _modDef18369 };
obj[3] = { uri: _modDef18370 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/BellSpotIllustration.native.tsx");

export function BellSpotIllustration(width) {
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