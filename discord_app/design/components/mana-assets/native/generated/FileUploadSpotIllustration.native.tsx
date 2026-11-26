// === Module 19299: FileUploadSpotIllustration ===

// Module 19299 (FileUploadSpotIllustration)
import assetHelpers from "assetHelpers" /* 7261 */;
import _modDef19300 from "module_19300" /* 19300 */;
import _modDef19301 from "module_19301" /* 19301 */;
import _modDef19302 from "module_19302" /* 19302 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef19300 }, 3: null };
let obj2 = { uri: _modDef19300 };
obj[2] = { uri: _modDef19301 };
const obj3 = { uri: _modDef19301 };
obj[3] = { uri: _modDef19302 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/FileUploadSpotIllustration.native.tsx");

export function FileUploadSpotIllustration(width) {
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