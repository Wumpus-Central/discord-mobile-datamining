// === Module 16281: PasskeysSpotIllustration ===

// Module 16281 (PasskeysSpotIllustration)
import assetHelpers from "assetHelpers" /* 7261 */;
import _modDef16282 from "module_16282" /* 16282 */;
import _modDef16283 from "module_16283" /* 16283 */;
import _modDef16284 from "module_16284" /* 16284 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef16282 }, 3: null };
let obj2 = { uri: _modDef16282 };
obj[2] = { uri: _modDef16283 };
const obj3 = { uri: _modDef16283 };
obj[3] = { uri: _modDef16284 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/PasskeysSpotIllustration.native.tsx");

export function PasskeysSpotIllustration(width) {
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