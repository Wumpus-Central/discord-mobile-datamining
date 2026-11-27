// === Module 12135: GuildFallbackAbstractUI ===

// Module 12135 (GuildFallbackAbstractUI)
import assetHelpers from "assetHelpers" /* 7261 */;
import _modDef12136 from "module_12136" /* 12136 */;
import _modDef12137 from "module_12137" /* 12137 */;
import _modDef12138 from "module_12138" /* 12138 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef12136 }, 3: null };
let obj2 = { uri: _modDef12136 };
obj[2] = { uri: _modDef12137 };
const obj3 = { uri: _modDef12137 };
obj[3] = { uri: _modDef12138 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/GuildFallbackAbstractUI.native.tsx");

export function GuildFallbackAbstractUI(width) {
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