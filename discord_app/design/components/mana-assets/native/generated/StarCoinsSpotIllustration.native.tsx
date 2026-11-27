// === Module 20249: StarCoinsSpotIllustration ===

// Module 20249 (StarCoinsSpotIllustration)
import assetHelpers from "assetHelpers" /* 7261 */;
import _modDef20250 from "module_20250" /* 20250 */;
import _modDef20251 from "module_20251" /* 20251 */;
import _modDef20252 from "module_20252" /* 20252 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef20250 }, 3: null };
let obj2 = { uri: _modDef20250 };
obj[2] = { uri: _modDef20251 };
const obj3 = { uri: _modDef20251 };
obj[3] = { uri: _modDef20252 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/StarCoinsSpotIllustration.native.tsx");

export function StarCoinsSpotIllustration(width) {
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