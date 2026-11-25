// === Module 17940: ChatControllersSpotIllustration ===

// Module 17940 (ChatControllersSpotIllustration)
import assetHelpers from "assetHelpers" /* 7230 */;
import _modDef17941 from "module_17941" /* 17941 */;
import _modDef17942 from "module_17942" /* 17942 */;
import _modDef17943 from "module_17943" /* 17943 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef17941 }, 3: null };
let obj2 = { uri: _modDef17941 };
obj[2] = { uri: _modDef17942 };
const obj3 = { uri: _modDef17942 };
obj[3] = { uri: _modDef17943 };
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