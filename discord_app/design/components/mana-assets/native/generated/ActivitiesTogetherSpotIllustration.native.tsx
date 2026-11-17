// === Module 18816: ActivitiesTogetherSpotIllustration ===

// Module 18816 (ActivitiesTogetherSpotIllustration)
import assetHelpers from "assetHelpers" /* 7765 */;
import _modDef18817 from "module_18817" /* 18817 */;
import _modDef18818 from "module_18818" /* 18818 */;
import _modDef18819 from "module_18819" /* 18819 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef18817 }, 3: null };
let obj2 = { uri: _modDef18817 };
obj[2] = { uri: _modDef18818 };
const obj3 = { uri: _modDef18818 };
obj[3] = { uri: _modDef18819 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/ActivitiesTogetherSpotIllustration.native.tsx");

export function ActivitiesTogetherSpotIllustration(width) {
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