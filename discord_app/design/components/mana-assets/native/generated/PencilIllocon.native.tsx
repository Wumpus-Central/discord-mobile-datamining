// === Module 15030: PencilIllocon ===

// Module 15030 (PencilIllocon)
import FastImageDefault from "FastImage" /* 6020 */;
import assetHelpers from "assetHelpers" /* 7755 */;
import _modDef14915 from "module_14915" /* 14915 */;
import _modDef15031 from "module_15031" /* 15031 */;
import _modDef15032 from "module_15032" /* 15032 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef15031 }, 3: null };
const obj2 = { uri: _modDef15031 };
obj[2] = { uri: _modDef14915 };
const obj3 = { uri: _modDef14915 };
obj[3] = { uri: _modDef15032 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/PencilIllocon.native.tsx");

export function PencilIllocon(size) {
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