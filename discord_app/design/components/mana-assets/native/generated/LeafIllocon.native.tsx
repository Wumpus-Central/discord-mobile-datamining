// === Module 15053: LeafIllocon ===

// Module 15053 (LeafIllocon)
import FastImageDefault from "FastImage" /* 6020 */;
import assetHelpers from "assetHelpers" /* 7755 */;
import _modDef15054 from "module_15054" /* 15054 */;
import _modDef15055 from "module_15055" /* 15055 */;
import _modDef15056 from "module_15056" /* 15056 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef15054 }, 3: null };
const obj2 = { uri: _modDef15054 };
obj[2] = { uri: _modDef15055 };
const obj3 = { uri: _modDef15055 };
obj[3] = { uri: _modDef15056 };
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
  obj.source = num(7755).getAssetSource(obj);
  obj.style = memo;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return <tmp2 fadeDuration={0} source={null} style={null} accessible={null} accessibilityLabel={null} resizeMode={null} />;
}