// === Module 19828: AnnouncementMegaphoneSpotIllustration ===

// Module 19828 (AnnouncementMegaphoneSpotIllustration)
import assetHelpers from "assetHelpers" /* 7063 */;
import _modDef19829 from "module_19829" /* 19829 */;
import _modDef19830 from "module_19830" /* 19830 */;
import _modDef19831 from "module_19831" /* 19831 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef19829 }, 3: null };
let obj2 = { uri: _modDef19829 };
obj[2] = { uri: _modDef19830 };
const obj3 = { uri: _modDef19830 };
obj[3] = { uri: _modDef19831 };
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
  const items = [width, height, num];
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