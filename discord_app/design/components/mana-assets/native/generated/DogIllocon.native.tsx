// === Module 12917: DogIllocon ===

// Module 12917 (DogIllocon)
import FastImageDefault from "FastImage" /* 5851 */;
import assetHelpers from "assetHelpers" /* 7210 */;
import _modDef12918 from "module_12918" /* 12918 */;
import _modDef12919 from "module_12919" /* 12919 */;
import _modDef12920 from "module_12920" /* 12920 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef12918 }, 3: null };
const obj2 = { uri: _modDef12918 };
obj[2] = { uri: _modDef12919 };
const obj3 = { uri: _modDef12919 };
obj[3] = { uri: _modDef12920 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/DogIllocon.native.tsx");

export function DogIllocon(size) {
  let num = size.size;
  ({ accessible, accessibilityLabel, resizeMode } = size);
  if (num === undefined) {
    num = 64;
  }
  items = [num];
  const memo = noop.useMemo(() => {
    const size = { width: num, height: num, intrinsicWidth: 64, intrinsicHeight: 64 };
    return assetHelpers.getAssetSizeStyle(size);
  }, items);
  obj = { fadeDuration: 0, source: null, style: null, accessible: null, accessibilityLabel: null, resizeMode: null };
  obj.source = num(7210).getAssetSource(obj);
  obj.style = memo;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return <tmp2 fadeDuration={0} source={null} style={null} accessible={null} accessibilityLabel={null} resizeMode={null} />;
}