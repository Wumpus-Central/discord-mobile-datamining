// === Module 16535: BountiesPosterSpotIllustration ===

// Module 16535 (BountiesPosterSpotIllustration)
import assetHelpers from "assetHelpers" /* 7230 */;
import _modDef16536 from "module_16536" /* 16536 */;
import _modDef16537 from "module_16537" /* 16537 */;
import _modDef16538 from "module_16538" /* 16538 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef16536 }, 3: null };
let obj2 = { uri: _modDef16536 };
obj[2] = { uri: _modDef16537 };
const obj3 = { uri: _modDef16537 };
obj[3] = { uri: _modDef16538 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/BountiesPosterSpotIllustration.native.tsx");

export function BountiesPosterSpotIllustration(width) {
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