// === Module 14852: ServerChannelsAbstractUI ===

// Module 14852 (ServerChannelsAbstractUI)
import assetHelpers from "assetHelpers" /* 7357 */;
import _modDef14853 from "module_14853" /* 14853 */;
import _modDef14854 from "module_14854" /* 14854 */;
import _modDef14855 from "module_14855" /* 14855 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef14853 }, 3: null };
let obj2 = { uri: _modDef14853 };
obj[2] = { uri: _modDef14854 };
const obj3 = { uri: _modDef14854 };
obj[3] = { uri: _modDef14855 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/ServerChannelsAbstractUI.native.tsx");

export function ServerChannelsAbstractUI(width) {
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