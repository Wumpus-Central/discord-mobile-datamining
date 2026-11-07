// === Module 11924: CouchSpotIllustration ===

// Module 11924 (CouchSpotIllustration)
import assetHelpers from "assetHelpers" /* 7135 */;
import _modDef11925 from "module_11925" /* 11925 */;
import _modDef11926 from "module_11926" /* 11926 */;
import _modDef11927 from "module_11927" /* 11927 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef11925 }, 3: null };
let obj2 = { uri: _modDef11925 };
obj[2] = { uri: _modDef11926 };
const obj3 = { uri: _modDef11926 };
obj[3] = { uri: _modDef11927 };
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