// === Module 11190: NitroCoinSpotIllustration ===

// Module 11190 (NitroCoinSpotIllustration)
import assetHelpers from "assetHelpers" /* 7230 */;
import _modDef11191 from "module_11191" /* 11191 */;
import _modDef11192 from "module_11192" /* 11192 */;
import _modDef11193 from "module_11193" /* 11193 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef11191 }, 3: null };
let obj2 = { uri: _modDef11191 };
obj[2] = { uri: _modDef11192 };
const obj3 = { uri: _modDef11192 };
obj[3] = { uri: _modDef11193 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/NitroCoinSpotIllustration.native.tsx");

export function NitroCoinSpotIllustration(width) {
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