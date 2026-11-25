// === Module 10097: CouchSpotIllustration ===

// Module 10097 (CouchSpotIllustration)
import assetHelpers from "assetHelpers" /* 7230 */;
import _modDef10098 from "module_10098" /* 10098 */;
import _modDef10099 from "module_10099" /* 10099 */;
import _modDef10100 from "module_10100" /* 10100 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef10098 }, 3: null };
let obj2 = { uri: _modDef10098 };
obj[2] = { uri: _modDef10099 };
const obj3 = { uri: _modDef10099 };
obj[3] = { uri: _modDef10100 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/CouchSpotIllustration.native.tsx");

export function CouchSpotIllustration(width) {
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