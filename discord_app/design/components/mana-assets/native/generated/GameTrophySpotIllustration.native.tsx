// === Module 17363: GameTrophySpotIllustration ===

// Module 17363 (GameTrophySpotIllustration)
import assetHelpers from "assetHelpers" /* 7135 */;
import _modDef17364 from "module_17364" /* 17364 */;
import _modDef17365 from "module_17365" /* 17365 */;
import _modDef17366 from "module_17366" /* 17366 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef17364 }, 3: null };
let obj2 = { uri: _modDef17364 };
obj[2] = { uri: _modDef17365 };
const obj3 = { uri: _modDef17365 };
obj[3] = { uri: _modDef17366 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/GameTrophySpotIllustration.native.tsx");

export function GameTrophySpotIllustration(width) {
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