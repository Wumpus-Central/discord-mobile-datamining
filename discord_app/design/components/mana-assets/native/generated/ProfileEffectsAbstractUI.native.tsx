// === Module 14283: ProfileEffectsAbstractUI ===

// Module 14283 (ProfileEffectsAbstractUI)
import assetHelpers from "assetHelpers" /* 7237 */;
import _modDef14284 from "module_14284" /* 14284 */;
import _modDef14285 from "module_14285" /* 14285 */;
import _modDef14286 from "module_14286" /* 14286 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef14284 }, 3: null };
let obj2 = { uri: _modDef14284 };
obj[2] = { uri: _modDef14285 };
const obj3 = { uri: _modDef14285 };
obj[3] = { uri: _modDef14286 };
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