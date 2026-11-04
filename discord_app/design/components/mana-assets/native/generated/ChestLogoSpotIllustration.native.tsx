// === Module 17270: ChestLogoSpotIllustration ===

// Module 17270 (ChestLogoSpotIllustration)
import assetHelpers from "assetHelpers" /* 7210 */;
import _modDef17271 from "module_17271" /* 17271 */;
import _modDef17272 from "module_17272" /* 17272 */;
import _modDef17273 from "module_17273" /* 17273 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef17271 }, 3: null };
let obj2 = { uri: _modDef17271 };
obj[2] = { uri: _modDef17272 };
const obj3 = { uri: _modDef17272 };
obj[3] = { uri: _modDef17273 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/ChestLogoSpotIllustration.native.tsx");

export function ChestLogoSpotIllustration(width) {
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