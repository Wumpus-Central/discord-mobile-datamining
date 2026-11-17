// === Module 16091: HoldingGemSpotIllustration ===

// Module 16091 (HoldingGemSpotIllustration)
import assetHelpers from "assetHelpers" /* 7765 */;
import _modDef16092 from "module_16092" /* 16092 */;
import _modDef16093 from "module_16093" /* 16093 */;
import _modDef16094 from "module_16094" /* 16094 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef16092 }, 3: null };
let obj2 = { uri: _modDef16092 };
obj[2] = { uri: _modDef16093 };
const obj3 = { uri: _modDef16093 };
obj[3] = { uri: _modDef16094 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/HoldingGemSpotIllustration.native.tsx");

export function HoldingGemSpotIllustration(width) {
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