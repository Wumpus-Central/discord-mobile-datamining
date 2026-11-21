// === Module 12087: GuildFallbackAbstractUI ===

// Module 12087 (GuildFallbackAbstractUI)
import assetHelpers from "assetHelpers" /* 7357 */;
import _modDef12088 from "module_12088" /* 12088 */;
import _modDef12089 from "module_12089" /* 12089 */;
import _modDef12090 from "module_12090" /* 12090 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef12088 }, 3: null };
let obj2 = { uri: _modDef12088 };
obj[2] = { uri: _modDef12089 };
const obj3 = { uri: _modDef12089 };
obj[3] = { uri: _modDef12090 };
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