// === Module 19083: FileUploadSpotIllustration ===

// Module 19083 (FileUploadSpotIllustration)
import assetHelpers from "assetHelpers" /* 7357 */;
import _modDef19084 from "module_19084" /* 19084 */;
import _modDef19085 from "module_19085" /* 19085 */;
import _modDef19086 from "module_19086" /* 19086 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef19084 }, 3: null };
let obj2 = { uri: _modDef19084 };
obj[2] = { uri: _modDef19085 };
const obj3 = { uri: _modDef19085 };
obj[3] = { uri: _modDef19086 };
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