// === Module 20033: StarCoinsSpotIllustration ===

// Module 20033 (StarCoinsSpotIllustration)
import assetHelpers from "assetHelpers" /* 7238 */;
import _modDef20034 from "module_20034" /* 20034 */;
import _modDef20035 from "module_20035" /* 20035 */;
import _modDef20036 from "module_20036" /* 20036 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef20034 }, 3: null };
let obj2 = { uri: _modDef20034 };
obj[2] = { uri: _modDef20035 };
const obj3 = { uri: _modDef20035 };
obj[3] = { uri: _modDef20036 };
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