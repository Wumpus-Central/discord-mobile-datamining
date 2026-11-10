// === Module 18694: ChatControllersSpotIllustration ===

// Module 18694 (ChatControllersSpotIllustration)
import assetHelpers from "assetHelpers" /* 7138 */;
import _modDef18695 from "module_18695" /* 18695 */;
import _modDef18696 from "module_18696" /* 18696 */;
import _modDef18697 from "module_18697" /* 18697 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef18695 }, 3: null };
let obj2 = { uri: _modDef18695 };
obj[2] = { uri: _modDef18696 };
const obj3 = { uri: _modDef18696 };
obj[3] = { uri: _modDef18697 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/ChatControllersSpotIllustration.native.tsx");

export function ChatControllersSpotIllustration(width) {
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