// === Module 17656: BellSpotIllustration ===

// Module 17656 (BellSpotIllustration)
import assetHelpers from "assetHelpers" /* 7230 */;
import _modDef17657 from "module_17657" /* 17657 */;
import _modDef17658 from "module_17658" /* 17658 */;
import _modDef17659 from "module_17659" /* 17659 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef17657 }, 3: null };
let obj2 = { uri: _modDef17657 };
obj[2] = { uri: _modDef17658 };
const obj3 = { uri: _modDef17658 };
obj[3] = { uri: _modDef17659 };
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