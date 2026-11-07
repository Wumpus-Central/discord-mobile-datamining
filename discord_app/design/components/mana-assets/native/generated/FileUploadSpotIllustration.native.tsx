// === Module 19405: FileUploadSpotIllustration ===

// Module 19405 (FileUploadSpotIllustration)
import assetHelpers from "assetHelpers" /* 7135 */;
import _modDef19406 from "module_19406" /* 19406 */;
import _modDef19407 from "module_19407" /* 19407 */;
import _modDef19408 from "module_19408" /* 19408 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef19406 }, 3: null };
let obj2 = { uri: _modDef19406 };
obj[2] = { uri: _modDef19407 };
const obj3 = { uri: _modDef19407 };
obj[3] = { uri: _modDef19408 };
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