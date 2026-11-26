// === Module 14881: BumpingFistsSpotIllustration ===

// Module 14881 (BumpingFistsSpotIllustration)
import assetHelpers from "assetHelpers" /* 7261 */;
import _modDef14882 from "module_14882" /* 14882 */;
import _modDef14883 from "module_14883" /* 14883 */;
import _modDef14884 from "module_14884" /* 14884 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef14882 }, 3: null };
let obj2 = { uri: _modDef14882 };
obj[2] = { uri: _modDef14883 };
const obj3 = { uri: _modDef14883 };
obj[3] = { uri: _modDef14884 };
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