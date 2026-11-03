// === Module 18592: PrivateProfileAbstractUI ===

// Module 18592 (PrivateProfileAbstractUI)
import assetHelpers from "assetHelpers" /* 7195 */;
import _modDef18593 from "module_18593" /* 18593 */;
import _modDef18594 from "module_18594" /* 18594 */;
import _modDef18595 from "module_18595" /* 18595 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef18593 }, 3: null };
let obj2 = { uri: _modDef18593 };
obj[2] = { uri: _modDef18594 };
const obj3 = { uri: _modDef18594 };
obj[3] = { uri: _modDef18595 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/PrivateProfileAbstractUI.native.tsx");

export function PrivateProfileAbstractUI(width) {
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