// === Module 14778: HoldingGemSpotIllustration ===

// Module 14778 (HoldingGemSpotIllustration)
import assetHelpers from "assetHelpers" /* 7230 */;
import _modDef14779 from "module_14779" /* 14779 */;
import _modDef14780 from "module_14780" /* 14780 */;
import _modDef14781 from "module_14781" /* 14781 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef14779 }, 3: null };
let obj2 = { uri: _modDef14779 };
obj[2] = { uri: _modDef14780 };
const obj3 = { uri: _modDef14780 };
obj[3] = { uri: _modDef14781 };
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