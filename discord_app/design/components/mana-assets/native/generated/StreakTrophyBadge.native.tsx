// === Module 11395: StreakTrophyBadge ===

// Module 11395 (StreakTrophyBadge)
import assetHelpers from "assetHelpers" /* 7261 */;
import _modDef11396 from "module_11396" /* 11396 */;
import _modDef11397 from "module_11397" /* 11397 */;
import _modDef11398 from "module_11398" /* 11398 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef11396 }, 3: null };
let obj2 = { uri: _modDef11396 };
obj[2] = { uri: _modDef11397 };
const obj3 = { uri: _modDef11397 };
obj[3] = { uri: _modDef11398 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/StreakTrophyBadge.native.tsx");

export function StreakTrophyBadge(width) {
  width = width.width;
  const height = width.height;
  let num = width.scale;
  ({ accessible, accessibilityLabel, resizeMode } = width);
  if (num === undefined) {
    num = 1;
  }
  items = [width, height, num];
  const memo = noop.useMemo(() => {
    const size = { width, height, scale: num, intrinsicWidth: 24, intrinsicHeight: 24 };
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