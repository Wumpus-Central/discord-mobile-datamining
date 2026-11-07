// === Module 20301: AvatarGraggleExample ===

// Module 20301 (AvatarGraggleExample)
import assetHelpers from "assetHelpers" /* 7135 */;
import _modDef20302 from "module_20302" /* 20302 */;
import _modDef20303 from "module_20303" /* 20303 */;
import _modDef20304 from "module_20304" /* 20304 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef20302 }, 3: null };
let obj2 = { uri: _modDef20302 };
obj[2] = { uri: _modDef20303 };
const obj3 = { uri: _modDef20303 };
obj[3] = { uri: _modDef20304 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/AvatarGraggleExample.native.tsx");

export function AvatarGraggleExample(width) {
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