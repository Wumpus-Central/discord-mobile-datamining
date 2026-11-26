// === Module 19627: DisguiseSpotIllustration ===

// Module 19627 (DisguiseSpotIllustration)
import assetHelpers from "assetHelpers" /* 7261 */;
import _modDef19628 from "module_19628" /* 19628 */;
import _modDef19629 from "module_19629" /* 19629 */;
import _modDef19630 from "module_19630" /* 19630 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef19628 }, 3: null };
let obj2 = { uri: _modDef19628 };
obj[2] = { uri: _modDef19629 };
const obj3 = { uri: _modDef19629 };
obj[3] = { uri: _modDef19630 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/DisguiseSpotIllustration.native.tsx");

export function DisguiseSpotIllustration(width) {
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