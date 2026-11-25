// === Module 20098: AnnouncementMegaphoneSpotIllustration ===

// Module 20098 (AnnouncementMegaphoneSpotIllustration)
import assetHelpers from "assetHelpers" /* 7230 */;
import _modDef20099 from "module_20099" /* 20099 */;
import _modDef20100 from "module_20100" /* 20100 */;
import _modDef20101 from "module_20101" /* 20101 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef20099 }, 3: null };
let obj2 = { uri: _modDef20099 };
obj[2] = { uri: _modDef20100 };
const obj3 = { uri: _modDef20100 };
obj[3] = { uri: _modDef20101 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/AnnouncementMegaphoneSpotIllustration.native.tsx");

export function AnnouncementMegaphoneSpotIllustration(width) {
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