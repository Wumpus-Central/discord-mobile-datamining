// === Module 16623: BundleAbstractUI ===

// Module 16623 (BundleAbstractUI)
import assetHelpers from "assetHelpers" /* 7261 */;
import _modDef16624 from "module_16624" /* 16624 */;
import _modDef16625 from "module_16625" /* 16625 */;
import _modDef16626 from "module_16626" /* 16626 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef16624 }, 3: null };
let obj2 = { uri: _modDef16624 };
obj[2] = { uri: _modDef16625 };
const obj3 = { uri: _modDef16625 };
obj[3] = { uri: _modDef16626 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/BundleAbstractUI.native.tsx");

export function BundleAbstractUI(width) {
  width = width.width;
  const height = width.height;
  let num = width.scale;
  ({ accessible, accessibilityLabel, resizeMode } = width);
  if (num === undefined) {
    num = 1;
  }
  items = [width, height, num];
  const memo = noop.useMemo(() => {
    const size = { width, height, scale: num, intrinsicWidth: 288, intrinsicHeight: 162 };
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