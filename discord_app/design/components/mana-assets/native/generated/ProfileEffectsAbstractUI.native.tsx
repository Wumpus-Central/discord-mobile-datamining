// === Module 14403: ProfileEffectsAbstractUI ===

// Module 14403 (ProfileEffectsAbstractUI)
import assetHelpers from "assetHelpers" /* 7357 */;
import _modDef14404 from "module_14404" /* 14404 */;
import _modDef14405 from "module_14405" /* 14405 */;
import _modDef14406 from "module_14406" /* 14406 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef14404 }, 3: null };
let obj2 = { uri: _modDef14404 };
obj[2] = { uri: _modDef14405 };
const obj3 = { uri: _modDef14405 };
obj[3] = { uri: _modDef14406 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/ProfileEffectsAbstractUI.native.tsx");

export function ProfileEffectsAbstractUI(width) {
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