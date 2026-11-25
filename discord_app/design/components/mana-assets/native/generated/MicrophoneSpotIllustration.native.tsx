// === Module 10247: MicrophoneSpotIllustration ===

// Module 10247 (MicrophoneSpotIllustration)
import assetHelpers from "assetHelpers" /* 7230 */;
import _modDef10248 from "module_10248" /* 10248 */;
import _modDef10249 from "module_10249" /* 10249 */;
import _modDef10250 from "module_10250" /* 10250 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef10248 }, 3: null };
let obj2 = { uri: _modDef10248 };
obj[2] = { uri: _modDef10249 };
const obj3 = { uri: _modDef10249 };
obj[3] = { uri: _modDef10250 };
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