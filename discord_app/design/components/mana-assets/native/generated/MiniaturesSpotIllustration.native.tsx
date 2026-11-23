// === Module 17794: MiniaturesSpotIllustration ===

// Module 17794 (MiniaturesSpotIllustration)
import assetHelpers from "assetHelpers" /* 7357 */;
import _modDef17795 from "module_17795" /* 17795 */;
import _modDef17796 from "module_17796" /* 17796 */;
import _modDef17797 from "module_17797" /* 17797 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef17795 }, 3: null };
let obj2 = { uri: _modDef17795 };
obj[2] = { uri: _modDef17796 };
const obj3 = { uri: _modDef17796 };
obj[3] = { uri: _modDef17797 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/MiniaturesSpotIllustration.native.tsx");

export function MiniaturesSpotIllustration(width) {
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