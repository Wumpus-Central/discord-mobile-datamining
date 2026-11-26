// === Module 11240: NitroCoinStackSpotIllustration ===

// Module 11240 (NitroCoinStackSpotIllustration)
import assetHelpers from "assetHelpers" /* 7261 */;
import _modDef11241 from "module_11241" /* 11241 */;
import _modDef11242 from "module_11242" /* 11242 */;
import _modDef11243 from "module_11243" /* 11243 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef11241 }, 3: null };
let obj2 = { uri: _modDef11241 };
obj[2] = { uri: _modDef11242 };
const obj3 = { uri: _modDef11242 };
obj[3] = { uri: _modDef11243 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/NitroCoinStackSpotIllustration.native.tsx");

export function NitroCoinStackSpotIllustration(width) {
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