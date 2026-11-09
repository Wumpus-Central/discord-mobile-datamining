// === Module 15642: NitroWumpusFlightLeft3dIllustration ===

// Module 15642 (NitroWumpusFlightLeft3dIllustration)
import assetHelpers from "assetHelpers" /* 7135 */;
import _modDef15643 from "module_15643" /* 15643 */;
import _modDef15644 from "module_15644" /* 15644 */;
import _modDef15645 from "module_15645" /* 15645 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef15643 }, 3: null };
let obj2 = { uri: _modDef15643 };
obj[2] = { uri: _modDef15644 };
const obj3 = { uri: _modDef15644 };
obj[3] = { uri: _modDef15645 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/NitroWumpusFlightLeft3dIllustration.native.tsx");

export function NitroWumpusFlightLeft3dIllustration(width) {
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