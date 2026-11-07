// === Module 12031: MicrophoneSpotIllustration ===

// Module 12031 (MicrophoneSpotIllustration)
import assetHelpers from "assetHelpers" /* 7135 */;
import _modDef12032 from "module_12032" /* 12032 */;
import _modDef12033 from "module_12033" /* 12033 */;
import _modDef12034 from "module_12034" /* 12034 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef12032 }, 3: null };
let obj2 = { uri: _modDef12032 };
obj[2] = { uri: _modDef12033 };
const obj3 = { uri: _modDef12033 };
obj[3] = { uri: _modDef12034 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/MicrophoneSpotIllustration.native.tsx");

export function MicrophoneSpotIllustration(width) {
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