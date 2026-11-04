// === Module 9693: NitroCoinStackSpotIllustration ===

// Module 9693 (NitroCoinStackSpotIllustration)
import assetHelpers from "assetHelpers" /* 7210 */;
import _modDef9694 from "module_9694" /* 9694 */;
import _modDef9695 from "module_9695" /* 9695 */;
import _modDef9696 from "module_9696" /* 9696 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef9694 }, 3: null };
let obj2 = { uri: _modDef9694 };
obj[2] = { uri: _modDef9695 };
const obj3 = { uri: _modDef9695 };
obj[3] = { uri: _modDef9696 };
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