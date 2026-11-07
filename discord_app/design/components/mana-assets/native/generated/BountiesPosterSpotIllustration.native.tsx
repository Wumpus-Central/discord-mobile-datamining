// === Module 17291: BountiesPosterSpotIllustration ===

// Module 17291 (BountiesPosterSpotIllustration)
import assetHelpers from "assetHelpers" /* 7135 */;
import _modDef17292 from "module_17292" /* 17292 */;
import _modDef17293 from "module_17293" /* 17293 */;
import _modDef17294 from "module_17294" /* 17294 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef17292 }, 3: null };
let obj2 = { uri: _modDef17292 };
obj[2] = { uri: _modDef17293 };
const obj3 = { uri: _modDef17293 };
obj[3] = { uri: _modDef17294 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/BountiesPosterSpotIllustration.native.tsx");

export function BountiesPosterSpotIllustration(width) {
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