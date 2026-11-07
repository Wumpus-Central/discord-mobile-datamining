// === Module 18664: CheersSpotIllustration ===

// Module 18664 (CheersSpotIllustration)
import assetHelpers from "assetHelpers" /* 7135 */;
import _modDef18665 from "module_18665" /* 18665 */;
import _modDef18666 from "module_18666" /* 18666 */;
import _modDef18667 from "module_18667" /* 18667 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef18665 }, 3: null };
let obj2 = { uri: _modDef18665 };
obj[2] = { uri: _modDef18666 };
const obj3 = { uri: _modDef18666 };
obj[3] = { uri: _modDef18667 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/CheersSpotIllustration.native.tsx");

export function CheersSpotIllustration(width) {
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