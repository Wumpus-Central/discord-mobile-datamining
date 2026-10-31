// === Module 16678: SecurityKeySpotIllustration ===

// Module 16678 (SecurityKeySpotIllustration)
import assetHelpers from "assetHelpers" /* 7069 */;
import _modDef16679 from "module_16679" /* 16679 */;
import _modDef16680 from "module_16680" /* 16680 */;
import _modDef16681 from "module_16681" /* 16681 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef16679 }, 3: null };
let obj2 = { uri: _modDef16679 };
obj[2] = { uri: _modDef16680 };
const obj3 = { uri: _modDef16680 };
obj[3] = { uri: _modDef16681 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/SecurityKeySpotIllustration.native.tsx");

export function SecurityKeySpotIllustration(width) {
  width = width.width;
  const height = width.height;
  let num = width.scale;
  ({ accessible, accessibilityLabel, resizeMode } = width);
  if (num === undefined) {
    num = 1;
  }
  const items = [width, height, num];
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