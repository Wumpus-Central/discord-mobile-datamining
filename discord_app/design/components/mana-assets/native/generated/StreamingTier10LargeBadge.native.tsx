// === Module 15059: StreamingTier10LargeBadge ===

// Module 15059 (StreamingTier10LargeBadge)
import assetHelpers from "assetHelpers" /* 7195 */;
import _modDef15060 from "module_15060" /* 15060 */;
import _modDef15061 from "module_15061" /* 15061 */;
import _modDef15062 from "module_15062" /* 15062 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef15060 }, 3: null };
let obj2 = { uri: _modDef15060 };
obj[2] = { uri: _modDef15061 };
const obj3 = { uri: _modDef15061 };
obj[3] = { uri: _modDef15062 };
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