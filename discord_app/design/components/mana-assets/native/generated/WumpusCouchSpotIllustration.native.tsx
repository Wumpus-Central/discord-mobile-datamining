// === Module 17604: WumpusCouchSpotIllustration ===

// Module 17604 (WumpusCouchSpotIllustration)
import assetHelpers from "assetHelpers" /* 7689 */;
import _modDef17605 from "module_17605" /* 17605 */;
import _modDef17606 from "module_17606" /* 17606 */;
import _modDef17607 from "module_17607" /* 17607 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef17605 }, 3: null };
let obj2 = { uri: _modDef17605 };
obj[2] = { uri: _modDef17606 };
const obj3 = { uri: _modDef17606 };
obj[3] = { uri: _modDef17607 };
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