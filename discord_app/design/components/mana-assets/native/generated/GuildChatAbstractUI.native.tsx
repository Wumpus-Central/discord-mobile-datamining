// === Module 12925: GuildChatAbstractUI ===

// Module 12925 (GuildChatAbstractUI)
import assetHelpers from "assetHelpers" /* 7765 */;
import _modDef12926 from "module_12926" /* 12926 */;
import _modDef12927 from "module_12927" /* 12927 */;
import _modDef12928 from "module_12928" /* 12928 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef12926 }, 3: null };
let obj2 = { uri: _modDef12926 };
obj[2] = { uri: _modDef12927 };
const obj3 = { uri: _modDef12927 };
obj[3] = { uri: _modDef12928 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/GuildChatAbstractUI.native.tsx");

export function GuildChatAbstractUI(width) {
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