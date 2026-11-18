// === Module 18597: BeeIllocon ===

// Module 18597 (BeeIllocon)
import FastImageDefault from "FastImage" /* 5510 */;
import assetHelpers from "assetHelpers" /* 7268 */;
import _modDef18598 from "module_18598" /* 18598 */;
import _modDef18599 from "module_18599" /* 18599 */;
import _modDef18600 from "module_18600" /* 18600 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef18598 }, 3: null };
const obj2 = { uri: _modDef18598 };
obj[2] = { uri: _modDef18599 };
const obj3 = { uri: _modDef18599 };
obj[3] = { uri: _modDef18600 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/BeeIllocon.native.tsx");

export function BeeIllocon(size) {
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
  obj.source = num(7268).getAssetSource(obj);
  obj.style = memo;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return <tmp2 fadeDuration={0} source={null} style={null} accessible={null} accessibilityLabel={null} resizeMode={null} />;
}