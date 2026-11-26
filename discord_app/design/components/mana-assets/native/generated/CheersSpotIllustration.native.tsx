// === Module 18056: CheersSpotIllustration ===

// Module 18056 (CheersSpotIllustration)
import assetHelpers from "assetHelpers" /* 7261 */;
import _modDef18057 from "module_18057" /* 18057 */;
import _modDef18058 from "module_18058" /* 18058 */;
import _modDef18059 from "module_18059" /* 18059 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef18057 }, 3: null };
let obj2 = { uri: _modDef18057 };
obj[2] = { uri: _modDef18058 };
const obj3 = { uri: _modDef18058 };
obj[3] = { uri: _modDef18059 };
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