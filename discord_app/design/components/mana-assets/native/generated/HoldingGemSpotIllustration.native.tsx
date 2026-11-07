// === Module 15796: HoldingGemSpotIllustration ===

// Module 15796 (HoldingGemSpotIllustration)
import assetHelpers from "assetHelpers" /* 7135 */;
import _modDef15797 from "module_15797" /* 15797 */;
import _modDef15798 from "module_15798" /* 15798 */;
import _modDef15799 from "module_15799" /* 15799 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef15797 }, 3: null };
let obj2 = { uri: _modDef15797 };
obj[2] = { uri: _modDef15798 };
const obj3 = { uri: _modDef15798 };
obj[3] = { uri: _modDef15799 };
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