// === Module 15153: StreamingTier10LargeBadge ===

// Module 15153 (StreamingTier10LargeBadge)
import assetHelpers from "assetHelpers" /* 7213 */;
import _modDef15154 from "module_15154" /* 15154 */;
import _modDef15155 from "module_15155" /* 15155 */;
import _modDef15156 from "module_15156" /* 15156 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef15154 }, 3: null };
let obj2 = { uri: _modDef15154 };
obj[2] = { uri: _modDef15155 };
const obj3 = { uri: _modDef15155 };
obj[3] = { uri: _modDef15156 };
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
  items = [width, height, num];
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