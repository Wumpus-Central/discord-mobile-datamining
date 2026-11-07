// === Module 7649: LaptopSpotIllustration ===

// Module 7649 (LaptopSpotIllustration)
import assetHelpers from "assetHelpers" /* 7135 */;
import _modDef7650 from "module_7650" /* 7650 */;
import _modDef7651 from "module_7651" /* 7651 */;
import _modDef7652 from "module_7652" /* 7652 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef7650 }, 3: null };
let obj2 = { uri: _modDef7650 };
obj[2] = { uri: _modDef7651 };
const obj3 = { uri: _modDef7651 };
obj[3] = { uri: _modDef7652 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/LaptopSpotIllustration.native.tsx");

export function LaptopSpotIllustration(width) {
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