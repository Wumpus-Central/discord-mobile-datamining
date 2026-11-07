// === Module 19390: DisplayNameStylesV2AbstractUI ===

// Module 19390 (DisplayNameStylesV2AbstractUI)
import assetHelpers from "assetHelpers" /* 7135 */;
import _modDef19391 from "module_19391" /* 19391 */;
import _modDef19392 from "module_19392" /* 19392 */;
import _modDef19393 from "module_19393" /* 19393 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef19391 }, 3: null };
let obj2 = { uri: _modDef19391 };
obj[2] = { uri: _modDef19392 };
const obj3 = { uri: _modDef19392 };
obj[3] = { uri: _modDef19393 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/DisplayNameStylesV2AbstractUI.native.tsx");

export function DisplayNameStylesV2AbstractUI(width) {
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