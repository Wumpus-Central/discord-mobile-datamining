// === Module 18990: ChatControllersSpotIllustration ===

// Module 18990 (ChatControllersSpotIllustration)
import assetHelpers from "assetHelpers" /* 7755 */;
import _modDef18991 from "module_18991" /* 18991 */;
import _modDef18992 from "module_18992" /* 18992 */;
import _modDef18993 from "module_18993" /* 18993 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef18991 }, 3: null };
let obj2 = { uri: _modDef18991 };
obj[2] = { uri: _modDef18992 };
const obj3 = { uri: _modDef18992 };
obj[3] = { uri: _modDef18993 };
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