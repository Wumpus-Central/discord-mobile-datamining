// === Module 12662: DogIllocon ===

// Module 12662 (DogIllocon)
import FastImageDefault from "FastImage" /* 5712 */;
import assetHelpers from "assetHelpers" /* 7063 */;
import _modDef12663 from "module_12663" /* 12663 */;
import _modDef12664 from "module_12664" /* 12664 */;
import _modDef12665 from "module_12665" /* 12665 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef12663 }, 3: null };
const obj2 = { uri: _modDef12663 };
obj[2] = { uri: _modDef12664 };
const obj3 = { uri: _modDef12664 };
obj[3] = { uri: _modDef12665 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/DogIllocon.native.tsx");

export function DogIllocon(size) {
  let num = size.size;
  ({ accessible, accessibilityLabel, resizeMode } = size);
  if (num === undefined) {
    num = 64;
  }
  const items = [num];
  const memo = noop.useMemo(() => {
    const size = { width: num, height: num, intrinsicWidth: 64, intrinsicHeight: 64 };
    return assetHelpers.getAssetSizeStyle(size);
  }, items);
  obj = { fadeDuration: 0, source: null, style: null, accessible: null, accessibilityLabel: null, resizeMode: null };
  obj.source = num(7063).getAssetSource(obj);
  obj.style = memo;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return <tmp2 fadeDuration={0} source={null} style={null} accessible={null} accessibilityLabel={null} resizeMode={null} />;
}