// === Module 10912: WinnerTrophyBadge ===

// Module 10912 (WinnerTrophyBadge)
import assetHelpers from "assetHelpers" /* 7135 */;
import _modDef10913 from "module_10913" /* 10913 */;
import _modDef10914 from "module_10914" /* 10914 */;
import _modDef10915 from "module_10915" /* 10915 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef10913 }, 3: null };
let obj2 = { uri: _modDef10913 };
obj[2] = { uri: _modDef10914 };
const obj3 = { uri: _modDef10914 };
obj[3] = { uri: _modDef10915 };
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