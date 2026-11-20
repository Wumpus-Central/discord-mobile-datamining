// === Module 16332: GameTrophySpotIllustration ===

// Module 16332 (GameTrophySpotIllustration)
import assetHelpers from "assetHelpers" /* 7237 */;
import _modDef16333 from "module_16333" /* 16333 */;
import _modDef16334 from "module_16334" /* 16334 */;
import _modDef16335 from "module_16335" /* 16335 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef16333 }, 3: null };
let obj2 = { uri: _modDef16333 };
obj[2] = { uri: _modDef16334 };
const obj3 = { uri: _modDef16334 };
obj[3] = { uri: _modDef16335 };
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