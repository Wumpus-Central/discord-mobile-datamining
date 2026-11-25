// === Module 7857: ShieldSpotIllustration ===

// Module 7857 (ShieldSpotIllustration)
import assetHelpers from "assetHelpers" /* 7230 */;
import _modDef7858 from "module_7858" /* 7858 */;
import _modDef7859 from "module_7859" /* 7859 */;
import _modDef7860 from "module_7860" /* 7860 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef7858 }, 3: null };
let obj2 = { uri: _modDef7858 };
obj[2] = { uri: _modDef7859 };
const obj3 = { uri: _modDef7859 };
obj[3] = { uri: _modDef7860 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/ShieldSpotIllustration.native.tsx");

export function ShieldSpotIllustration(width) {
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