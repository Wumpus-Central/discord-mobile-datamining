// === Module 18750: DogIllocon ===

// Module 18750 (DogIllocon)
import FastImageDefault from "FastImage" /* 5730 */;
import assetHelpers from "assetHelpers" /* 7261 */;
import _modDef18751 from "module_18751" /* 18751 */;
import _modDef18752 from "module_18752" /* 18752 */;
import _modDef18753 from "module_18753" /* 18753 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef18751 }, 3: null };
const obj2 = { uri: _modDef18751 };
obj[2] = { uri: _modDef18752 };
const obj3 = { uri: _modDef18752 };
obj[3] = { uri: _modDef18753 };
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
  obj.source = num(7261).getAssetSource(obj);
  obj.style = memo;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return <tmp2 fadeDuration={0} source={null} style={null} accessible={null} accessibilityLabel={null} resizeMode={null} />;
}