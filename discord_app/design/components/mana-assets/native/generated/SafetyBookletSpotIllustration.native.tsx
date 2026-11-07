// === Module 11416: SafetyBookletSpotIllustration ===

// Module 11416 (SafetyBookletSpotIllustration)
import assetHelpers from "assetHelpers" /* 7135 */;
import _modDef11417 from "module_11417" /* 11417 */;
import _modDef11418 from "module_11418" /* 11418 */;
import _modDef11419 from "module_11419" /* 11419 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef11417 }, 3: null };
let obj2 = { uri: _modDef11417 };
obj[2] = { uri: _modDef11418 };
const obj3 = { uri: _modDef11418 };
obj[3] = { uri: _modDef11419 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/SafetyBookletSpotIllustration.native.tsx");

export function SafetyBookletSpotIllustration(width) {
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