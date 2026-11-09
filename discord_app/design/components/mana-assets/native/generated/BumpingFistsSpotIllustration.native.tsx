// === Module 15068: BumpingFistsSpotIllustration ===

// Module 15068 (BumpingFistsSpotIllustration)
import assetHelpers from "assetHelpers" /* 7135 */;
import _modDef15069 from "module_15069" /* 15069 */;
import _modDef15070 from "module_15070" /* 15070 */;
import _modDef15071 from "module_15071" /* 15071 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef15069 }, 3: null };
let obj2 = { uri: _modDef15069 };
obj[2] = { uri: _modDef15070 };
const obj3 = { uri: _modDef15070 };
obj[3] = { uri: _modDef15071 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/BumpingFistsSpotIllustration.native.tsx");

export function BumpingFistsSpotIllustration(width) {
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