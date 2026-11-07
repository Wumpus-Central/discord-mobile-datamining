// === Module 20178: MemberRolesAbstractUI ===

// Module 20178 (MemberRolesAbstractUI)
import assetHelpers from "assetHelpers" /* 7135 */;
import _modDef20179 from "module_20179" /* 20179 */;
import _modDef20180 from "module_20180" /* 20180 */;
import _modDef20181 from "module_20181" /* 20181 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef20179 }, 3: null };
let obj2 = { uri: _modDef20179 };
obj[2] = { uri: _modDef20180 };
const obj3 = { uri: _modDef20180 };
obj[3] = { uri: _modDef20181 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/MemberRolesAbstractUI.native.tsx");

export function MemberRolesAbstractUI(width) {
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