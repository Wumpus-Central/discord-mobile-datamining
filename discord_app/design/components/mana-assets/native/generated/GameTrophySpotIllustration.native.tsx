// === Module 17374: GameTrophySpotIllustration ===

// Module 17374 (GameTrophySpotIllustration)
import assetHelpers from "assetHelpers" /* 7135 */;
import _modDef17375 from "module_17375" /* 17375 */;
import _modDef17376 from "module_17376" /* 17376 */;
import _modDef17377 from "module_17377" /* 17377 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef17375 }, 3: null };
let obj2 = { uri: _modDef17375 };
obj[2] = { uri: _modDef17376 };
const obj3 = { uri: _modDef17376 };
obj[3] = { uri: _modDef17377 };
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