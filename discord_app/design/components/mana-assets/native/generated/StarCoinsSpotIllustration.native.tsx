// === Module 20313: StarCoinsSpotIllustration ===

// Module 20313 (StarCoinsSpotIllustration)
import assetHelpers from "assetHelpers" /* 7135 */;
import _modDef20314 from "module_20314" /* 20314 */;
import _modDef20315 from "module_20315" /* 20315 */;
import _modDef20316 from "module_20316" /* 20316 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef20314 }, 3: null };
let obj2 = { uri: _modDef20314 };
obj[2] = { uri: _modDef20315 };
const obj3 = { uri: _modDef20315 };
obj[3] = { uri: _modDef20316 };
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