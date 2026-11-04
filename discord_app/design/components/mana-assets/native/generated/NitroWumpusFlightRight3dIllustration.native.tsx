// === Module 17936: NitroWumpusFlightRight3dIllustration ===

// Module 17936 (NitroWumpusFlightRight3dIllustration)
import assetHelpers from "assetHelpers" /* 7210 */;
import _modDef17937 from "module_17937" /* 17937 */;
import _modDef17938 from "module_17938" /* 17938 */;
import _modDef17939 from "module_17939" /* 17939 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef17937 }, 3: null };
let obj2 = { uri: _modDef17937 };
obj[2] = { uri: _modDef17938 };
const obj3 = { uri: _modDef17938 };
obj[3] = { uri: _modDef17939 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/NitroWumpusFlightRight3dIllustration.native.tsx");

export function NitroWumpusFlightRight3dIllustration(width) {
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