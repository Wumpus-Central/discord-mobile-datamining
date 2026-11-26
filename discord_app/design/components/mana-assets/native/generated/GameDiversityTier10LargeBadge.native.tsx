// === Module 14980: GameDiversityTier10LargeBadge ===

// Module 14980 (GameDiversityTier10LargeBadge)
import assetHelpers from "assetHelpers" /* 7261 */;
import _modDef14981 from "module_14981" /* 14981 */;
import _modDef14982 from "module_14982" /* 14982 */;
import _modDef14983 from "module_14983" /* 14983 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef14981 }, 3: null };
let obj2 = { uri: _modDef14981 };
obj[2] = { uri: _modDef14982 };
const obj3 = { uri: _modDef14982 };
obj[3] = { uri: _modDef14983 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/GameDiversityTier10LargeBadge.native.tsx");

export function GameDiversityTier10LargeBadge(width) {
  width = width.width;
  const height = width.height;
  let num = width.scale;
  ({ accessible, accessibilityLabel, resizeMode } = width);
  if (num === undefined) {
    num = 1;
  }
  items = [width, height, num];
  const memo = noop.useMemo(() => {
    const size = { width, height, scale: num, intrinsicWidth: 156, intrinsicHeight: 100 };
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