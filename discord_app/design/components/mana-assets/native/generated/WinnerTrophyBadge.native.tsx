// === Module 13715: WinnerTrophyBadge ===

// Module 13715 (WinnerTrophyBadge)
import assetHelpers from "assetHelpers" /* 7237 */;
import _modDef13716 from "module_13716" /* 13716 */;
import _modDef13717 from "module_13717" /* 13717 */;
import _modDef13718 from "module_13718" /* 13718 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef13716 }, 3: null };
let obj2 = { uri: _modDef13716 };
obj[2] = { uri: _modDef13717 };
const obj3 = { uri: _modDef13717 };
obj[3] = { uri: _modDef13718 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/WinnerTrophyBadge.native.tsx");

export function WinnerTrophyBadge(width) {
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