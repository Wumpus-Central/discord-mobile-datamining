// === Module 18276: ChatControllersSpotIllustration ===

// Module 18276 (ChatControllersSpotIllustration)
import assetHelpers from "assetHelpers" /* 7063 */;
import _modDef18277 from "module_18277" /* 18277 */;
import _modDef18278 from "module_18278" /* 18278 */;
import _modDef18279 from "module_18279" /* 18279 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef18277 }, 3: null };
let obj2 = { uri: _modDef18277 };
obj[2] = { uri: _modDef18278 };
const obj3 = { uri: _modDef18278 };
obj[3] = { uri: _modDef18279 };
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
  const items = [width, height, num];
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