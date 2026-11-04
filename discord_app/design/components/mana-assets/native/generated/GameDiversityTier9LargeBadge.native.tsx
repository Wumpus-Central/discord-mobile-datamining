// === Module 15147: GameDiversityTier9LargeBadge ===

// Module 15147 (GameDiversityTier9LargeBadge)
import assetHelpers from "assetHelpers" /* 7210 */;
import _modDef15148 from "module_15148" /* 15148 */;
import _modDef15149 from "module_15149" /* 15149 */;
import _modDef15150 from "module_15150" /* 15150 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef15148 }, 3: null };
let obj2 = { uri: _modDef15148 };
obj[2] = { uri: _modDef15149 };
const obj3 = { uri: _modDef15149 };
obj[3] = { uri: _modDef15150 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/GameDiversityTier9LargeBadge.native.tsx");

export function GameDiversityTier9LargeBadge(width) {
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