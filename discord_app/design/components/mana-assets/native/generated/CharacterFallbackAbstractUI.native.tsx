// === Module 12029: CharacterFallbackAbstractUI ===

// Module 12029 (CharacterFallbackAbstractUI)
import assetHelpers from "assetHelpers" /* 7238 */;
import _modDef12030 from "module_12030" /* 12030 */;
import _modDef12031 from "module_12031" /* 12031 */;
import _modDef12032 from "module_12032" /* 12032 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef12030 }, 3: null };
let obj2 = { uri: _modDef12030 };
obj[2] = { uri: _modDef12031 };
const obj3 = { uri: _modDef12031 };
obj[3] = { uri: _modDef12032 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/CharacterFallbackAbstractUI.native.tsx");

export function CharacterFallbackAbstractUI(width) {
  width = width.width;
  const height = width.height;
  let num = width.scale;
  ({ accessible, accessibilityLabel, resizeMode } = width);
  if (num === undefined) {
    num = 1;
  }
  items = [width, height, num];
  const memo = noop.useMemo(() => {
    const size = { width, height, scale: num, intrinsicWidth: 144, intrinsicHeight: 144 };
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