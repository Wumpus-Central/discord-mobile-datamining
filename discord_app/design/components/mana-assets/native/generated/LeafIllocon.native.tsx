// === Module 14532: LeafIllocon ===

// Module 14532 (LeafIllocon)
import FastImageDefault from "FastImage" /* 5854 */;
import assetHelpers from "assetHelpers" /* 7213 */;
import _modDef14533 from "module_14533" /* 14533 */;
import _modDef14534 from "module_14534" /* 14534 */;
import _modDef14535 from "module_14535" /* 14535 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef14533 }, 3: null };
const obj2 = { uri: _modDef14533 };
obj[2] = { uri: _modDef14534 };
const obj3 = { uri: _modDef14534 };
obj[3] = { uri: _modDef14535 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/LeafIllocon.native.tsx");

export function LeafIllocon(size) {
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
  obj.source = num(7213).getAssetSource(obj);
  obj.style = memo;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return <tmp2 fadeDuration={0} source={null} style={null} accessible={null} accessibilityLabel={null} resizeMode={null} />;
}