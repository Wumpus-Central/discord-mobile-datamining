// === Module 17163: WizardHatAndBookSpotIllustration ===

// Module 17163 (WizardHatAndBookSpotIllustration)
import assetHelpers from "assetHelpers" /* 7138 */;
import _modDef17164 from "module_17164" /* 17164 */;
import _modDef17165 from "module_17165" /* 17165 */;
import _modDef17166 from "module_17166" /* 17166 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef17164 }, 3: null };
let obj2 = { uri: _modDef17164 };
obj[2] = { uri: _modDef17165 };
const obj3 = { uri: _modDef17165 };
obj[3] = { uri: _modDef17166 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/WizardHatAndBookSpotIllustration.native.tsx");

export function WizardHatAndBookSpotIllustration(width) {
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