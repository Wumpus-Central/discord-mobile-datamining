// === Module 11391: MedalFirstBadge ===

// Module 11391 (MedalFirstBadge)
import assetHelpers from "assetHelpers" /* 7261 */;
import _modDef11392 from "module_11392" /* 11392 */;
import _modDef11393 from "module_11393" /* 11393 */;
import _modDef11394 from "module_11394" /* 11394 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef11392 }, 3: null };
let obj2 = { uri: _modDef11392 };
obj[2] = { uri: _modDef11393 };
const obj3 = { uri: _modDef11393 };
obj[3] = { uri: _modDef11394 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/MedalFirstBadge.native.tsx");

export function MedalFirstBadge(width) {
  width = width.width;
  const height = width.height;
  let num = width.scale;
  ({ accessible, accessibilityLabel, resizeMode } = width);
  if (num === undefined) {
    num = 1;
  }
  items = [width, height, num];
  const memo = noop.useMemo(() => {
    const size = { width, height, scale: num, intrinsicWidth: 24, intrinsicHeight: 24 };
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