// === Module 12066: MicrophoneSpotIllustration ===

// Module 12066 (MicrophoneSpotIllustration)
import assetHelpers from "assetHelpers" /* 7210 */;
import _modDef12067 from "module_12067" /* 12067 */;
import _modDef12068 from "module_12068" /* 12068 */;
import _modDef12069 from "module_12069" /* 12069 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef12067 }, 3: null };
let obj2 = { uri: _modDef12067 };
obj[2] = { uri: _modDef12068 };
const obj3 = { uri: _modDef12068 };
obj[3] = { uri: _modDef12069 };
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