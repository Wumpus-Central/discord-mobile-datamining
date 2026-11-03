// === Module 9928: ReactionsSpotIllustration ===

// Module 9928 (ReactionsSpotIllustration)
import assetHelpers from "assetHelpers" /* 7195 */;
import _modDef9929 from "module_9929" /* 9929 */;
import _modDef9930 from "module_9930" /* 9930 */;
import _modDef9931 from "module_9931" /* 9931 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef9929 }, 3: null };
let obj2 = { uri: _modDef9929 };
obj[2] = { uri: _modDef9930 };
const obj3 = { uri: _modDef9930 };
obj[3] = { uri: _modDef9931 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/ReactionsSpotIllustration.native.tsx");

export function ReactionsSpotIllustration(width) {
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