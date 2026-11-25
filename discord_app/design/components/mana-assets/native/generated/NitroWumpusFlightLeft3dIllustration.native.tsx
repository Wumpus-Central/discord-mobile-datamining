// === Module 13876: NitroWumpusFlightLeft3dIllustration ===

// Module 13876 (NitroWumpusFlightLeft3dIllustration)
import assetHelpers from "assetHelpers" /* 7230 */;
import _modDef13877 from "module_13877" /* 13877 */;
import _modDef13878 from "module_13878" /* 13878 */;
import _modDef13879 from "module_13879" /* 13879 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef13877 }, 3: null };
let obj2 = { uri: _modDef13877 };
obj[2] = { uri: _modDef13878 };
const obj3 = { uri: _modDef13878 };
obj[3] = { uri: _modDef13879 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/NitroWumpusFlightLeft3dIllustration.native.tsx");

export function NitroWumpusFlightLeft3dIllustration(width) {
  width = width.width;
  const height = width.height;
  let num = width.scale;
  ({ accessible, accessibilityLabel, resizeMode } = width);
  if (num === undefined) {
    num = 1;
  }
  items = [width, height, num];
  const memo = noop.useMemo(() => {
    const size = { width, height, scale: num, intrinsicWidth: 288, intrinsicHeight: 192 };
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