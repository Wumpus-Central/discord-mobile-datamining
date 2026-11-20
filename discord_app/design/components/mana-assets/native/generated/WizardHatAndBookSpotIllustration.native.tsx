// === Module 16094: WizardHatAndBookSpotIllustration ===

// Module 16094 (WizardHatAndBookSpotIllustration)
import assetHelpers from "assetHelpers" /* 7237 */;
import _modDef16095 from "module_16095" /* 16095 */;
import _modDef16096 from "module_16096" /* 16096 */;
import _modDef16097 from "module_16097" /* 16097 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef16095 }, 3: null };
let obj2 = { uri: _modDef16095 };
obj[2] = { uri: _modDef16096 };
const obj3 = { uri: _modDef16096 };
obj[3] = { uri: _modDef16097 };
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