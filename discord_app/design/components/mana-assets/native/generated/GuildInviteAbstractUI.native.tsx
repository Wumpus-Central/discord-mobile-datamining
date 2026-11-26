// === Module 12361: GuildInviteAbstractUI ===

// Module 12361 (GuildInviteAbstractUI)
import assetHelpers from "assetHelpers" /* 7261 */;
import _modDef12362 from "module_12362" /* 12362 */;
import _modDef12363 from "module_12363" /* 12363 */;
import _modDef12364 from "module_12364" /* 12364 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef12362 }, 3: null };
let obj2 = { uri: _modDef12362 };
obj[2] = { uri: _modDef12363 };
const obj3 = { uri: _modDef12363 };
obj[3] = { uri: _modDef12364 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/GuildInviteAbstractUI.native.tsx");

export function GuildInviteAbstractUI(width) {
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