// === Module 9626: NitroCoinSpotIllustration ===

// Module 9626 (NitroCoinSpotIllustration)
import assetHelpers from "assetHelpers" /* 7135 */;
import _modDef9627 from "module_9627" /* 9627 */;
import _modDef9628 from "module_9628" /* 9628 */;
import _modDef9629 from "module_9629" /* 9629 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef9627 }, 3: null };
let obj2 = { uri: _modDef9627 };
obj[2] = { uri: _modDef9628 };
const obj3 = { uri: _modDef9628 };
obj[3] = { uri: _modDef9629 };
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