// === Module 14888: StreamingTier10LargeBadge ===

// Module 14888 (StreamingTier10LargeBadge)
import assetHelpers from "assetHelpers" /* 7063 */;
import _modDef14889 from "module_14889" /* 14889 */;
import _modDef14890 from "module_14890" /* 14890 */;
import _modDef14891 from "module_14891" /* 14891 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef14889 }, 3: null };
let obj2 = { uri: _modDef14889 };
obj[2] = { uri: _modDef14890 };
const obj3 = { uri: _modDef14890 };
obj[3] = { uri: _modDef14891 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/StreamingTier10LargeBadge.native.tsx");

export function StreamingTier10LargeBadge(width) {
  width = width.width;
  const height = width.height;
  let num = width.scale;
  ({ accessible, accessibilityLabel, resizeMode } = width);
  if (num === undefined) {
    num = 1;
  }
  const items = [width, height, num];
  const memo = noop.useMemo(() => {
    const size = { width, height, scale: num, intrinsicWidth: 156, intrinsicHeight: 100 };
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