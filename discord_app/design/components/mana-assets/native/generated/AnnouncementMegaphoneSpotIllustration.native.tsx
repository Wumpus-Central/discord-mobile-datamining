// === Module 20325: AnnouncementMegaphoneSpotIllustration ===

// Module 20325 (AnnouncementMegaphoneSpotIllustration)
import assetHelpers from "assetHelpers" /* 7138 */;
import _modDef20326 from "module_20326" /* 20326 */;
import _modDef20327 from "module_20327" /* 20327 */;
import _modDef20328 from "module_20328" /* 20328 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef20326 }, 3: null };
let obj2 = { uri: _modDef20326 };
obj[2] = { uri: _modDef20327 };
const obj3 = { uri: _modDef20327 };
obj[3] = { uri: _modDef20328 };
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