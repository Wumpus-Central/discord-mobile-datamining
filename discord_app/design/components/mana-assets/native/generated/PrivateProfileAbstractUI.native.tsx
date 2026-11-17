// === Module 19187: PrivateProfileAbstractUI ===

// Module 19187 (PrivateProfileAbstractUI)
import assetHelpers from "assetHelpers" /* 7765 */;
import _modDef19188 from "module_19188" /* 19188 */;
import _modDef19189 from "module_19189" /* 19189 */;
import _modDef19190 from "module_19190" /* 19190 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef19188 }, 3: null };
let obj2 = { uri: _modDef19188 };
obj[2] = { uri: _modDef19189 };
const obj3 = { uri: _modDef19189 };
obj[3] = { uri: _modDef19190 };
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