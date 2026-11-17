// === Module 12909: CharacterFallbackAbstractUI ===

// Module 12909 (CharacterFallbackAbstractUI)
import assetHelpers from "assetHelpers" /* 7765 */;
import _modDef12910 from "module_12910" /* 12910 */;
import _modDef12911 from "module_12911" /* 12911 */;
import _modDef12912 from "module_12912" /* 12912 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef12910 }, 3: null };
let obj2 = { uri: _modDef12910 };
obj[2] = { uri: _modDef12911 };
const obj3 = { uri: _modDef12911 };
obj[3] = { uri: _modDef12912 };
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