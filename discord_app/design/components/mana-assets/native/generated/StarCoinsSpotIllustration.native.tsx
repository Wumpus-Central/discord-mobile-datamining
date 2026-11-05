// === Module 20237: StarCoinsSpotIllustration ===

// Module 20237 (StarCoinsSpotIllustration)
import assetHelpers from "assetHelpers" /* 7213 */;
import _modDef20238 from "module_20238" /* 20238 */;
import _modDef20239 from "module_20239" /* 20239 */;
import _modDef20240 from "module_20240" /* 20240 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef20238 }, 3: null };
let obj2 = { uri: _modDef20238 };
obj[2] = { uri: _modDef20239 };
const obj3 = { uri: _modDef20239 };
obj[3] = { uri: _modDef20240 };
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