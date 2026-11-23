// === Module 19963: AvatarLokyExample ===

// Module 19963 (AvatarLokyExample)
import assetHelpers from "assetHelpers" /* 7357 */;
import _modDef19964 from "module_19964" /* 19964 */;
import _modDef19965 from "module_19965" /* 19965 */;
import _modDef19966 from "module_19966" /* 19966 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef19964 }, 3: null };
let obj2 = { uri: _modDef19964 };
obj[2] = { uri: _modDef19965 };
const obj3 = { uri: _modDef19965 };
obj[3] = { uri: _modDef19966 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/AvatarLokyExample.native.tsx");

export function AvatarLokyExample(width) {
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