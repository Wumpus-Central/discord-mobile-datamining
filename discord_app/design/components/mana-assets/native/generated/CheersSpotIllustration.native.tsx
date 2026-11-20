// === Module 17719: CheersSpotIllustration ===

// Module 17719 (CheersSpotIllustration)
import assetHelpers from "assetHelpers" /* 7237 */;
import _modDef17720 from "module_17720" /* 17720 */;
import _modDef17721 from "module_17721" /* 17721 */;
import _modDef17722 from "module_17722" /* 17722 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef17720 }, 3: null };
let obj2 = { uri: _modDef17720 };
obj[2] = { uri: _modDef17721 };
const obj3 = { uri: _modDef17721 };
obj[3] = { uri: _modDef17722 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/CheersSpotIllustration.native.tsx");

export function CheersSpotIllustration(width) {
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