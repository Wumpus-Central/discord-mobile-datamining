// === Module 12705: BeeIllocon ===

// Module 12705 (BeeIllocon)
import FastImageDefault from "FastImage" /* 5717 */;
import assetHelpers from "assetHelpers" /* 7069 */;
import _modDef12706 from "module_12706" /* 12706 */;
import _modDef12707 from "module_12707" /* 12707 */;
import _modDef12708 from "module_12708" /* 12708 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef12706 }, 3: null };
const obj2 = { uri: _modDef12706 };
obj[2] = { uri: _modDef12707 };
const obj3 = { uri: _modDef12707 };
obj[3] = { uri: _modDef12708 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/BeeIllocon.native.tsx");

export function BeeIllocon(size) {
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
  obj.source = num(7069).getAssetSource(obj);
  obj.style = memo;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return <tmp2 fadeDuration={0} source={null} style={null} accessible={null} accessibilityLabel={null} resizeMode={null} />;
}