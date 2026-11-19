// === Module 12183: HighFiveSpotIllustration ===

// Module 12183 (HighFiveSpotIllustration)
import assetHelpers from "assetHelpers" /* 7238 */;
import _modDef12184 from "module_12184" /* 12184 */;
import _modDef12185 from "module_12185" /* 12185 */;
import _modDef12186 from "module_12186" /* 12186 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef12184 }, 3: null };
let obj2 = { uri: _modDef12184 };
obj[2] = { uri: _modDef12185 };
const obj3 = { uri: _modDef12185 };
obj[3] = { uri: _modDef12186 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/HighFiveSpotIllustration.native.tsx");

export function HighFiveSpotIllustration(width) {
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