// === Module 20119: AvatarMoatmonsturrExample ===

// Module 20119 (AvatarMoatmonsturrExample)
import assetHelpers from "assetHelpers" /* 7230 */;
import _modDef20120 from "module_20120" /* 20120 */;
import _modDef20121 from "module_20121" /* 20121 */;
import _modDef20122 from "module_20122" /* 20122 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef20120 }, 3: null };
let obj2 = { uri: _modDef20120 };
obj[2] = { uri: _modDef20121 };
const obj3 = { uri: _modDef20121 };
obj[3] = { uri: _modDef20122 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/AvatarMoatmonsturrExample.native.tsx");

export function AvatarMoatmonsturrExample(width) {
  width = width.width;
  const height = width.height;
  let num = width.scale;
  ({ accessible, accessibilityLabel, resizeMode } = width);
  if (num === undefined) {
    num = 1;
  }
  items = [width, height, num];
  const memo = noop.useMemo(() => {
    const size = { width, height, scale: num, intrinsicWidth: 100, intrinsicHeight: 100 };
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