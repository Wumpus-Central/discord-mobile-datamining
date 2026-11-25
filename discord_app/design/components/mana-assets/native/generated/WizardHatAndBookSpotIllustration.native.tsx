// === Module 16371: WizardHatAndBookSpotIllustration ===

// Module 16371 (WizardHatAndBookSpotIllustration)
import assetHelpers from "assetHelpers" /* 7230 */;
import _modDef16372 from "module_16372" /* 16372 */;
import _modDef16373 from "module_16373" /* 16373 */;
import _modDef16374 from "module_16374" /* 16374 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef16372 }, 3: null };
let obj2 = { uri: _modDef16372 };
obj[2] = { uri: _modDef16373 };
const obj3 = { uri: _modDef16373 };
obj[3] = { uri: _modDef16374 };
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