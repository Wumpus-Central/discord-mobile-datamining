// === Module 20208: AnnouncementMegaphoneSpotIllustration ===

// Module 20208 (AnnouncementMegaphoneSpotIllustration)
import assetHelpers from "assetHelpers" /* 7213 */;
import _modDef20209 from "module_20209" /* 20209 */;
import _modDef20210 from "module_20210" /* 20210 */;
import _modDef20211 from "module_20211" /* 20211 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef20209 }, 3: null };
let obj2 = { uri: _modDef20209 };
obj[2] = { uri: _modDef20210 };
const obj3 = { uri: _modDef20210 };
obj[3] = { uri: _modDef20211 };
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