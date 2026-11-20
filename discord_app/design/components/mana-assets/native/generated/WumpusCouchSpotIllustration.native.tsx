// === Module 16373: WumpusCouchSpotIllustration ===

// Module 16373 (WumpusCouchSpotIllustration)
import assetHelpers from "assetHelpers" /* 7237 */;
import _modDef16374 from "module_16374" /* 16374 */;
import _modDef16375 from "module_16375" /* 16375 */;
import _modDef16376 from "module_16376" /* 16376 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef16374 }, 3: null };
let obj2 = { uri: _modDef16374 };
obj[2] = { uri: _modDef16375 };
const obj3 = { uri: _modDef16375 };
obj[3] = { uri: _modDef16376 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/WumpusCouchSpotIllustration.native.tsx");

export function WumpusCouchSpotIllustration(width) {
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