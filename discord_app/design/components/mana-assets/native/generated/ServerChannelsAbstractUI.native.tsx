// === Module 16117: ServerChannelsAbstractUI ===

// Module 16117 (ServerChannelsAbstractUI)
import assetHelpers from "assetHelpers" /* 7765 */;
import _modDef16118 from "module_16118" /* 16118 */;
import _modDef16119 from "module_16119" /* 16119 */;
import _modDef16120 from "module_16120" /* 16120 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef16118 }, 3: null };
let obj2 = { uri: _modDef16118 };
obj[2] = { uri: _modDef16119 };
const obj3 = { uri: _modDef16119 };
obj[3] = { uri: _modDef16120 };
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