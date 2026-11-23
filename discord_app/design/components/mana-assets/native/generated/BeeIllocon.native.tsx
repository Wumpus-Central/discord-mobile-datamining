// === Module 18543: BeeIllocon ===

// Module 18543 (BeeIllocon)
import FastImageDefault from "FastImage" /* 5600 */;
import assetHelpers from "assetHelpers" /* 7357 */;
import _modDef18544 from "module_18544" /* 18544 */;
import _modDef18545 from "module_18545" /* 18545 */;
import _modDef18546 from "module_18546" /* 18546 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef18544 }, 3: null };
const obj2 = { uri: _modDef18544 };
obj[2] = { uri: _modDef18545 };
const obj3 = { uri: _modDef18545 };
obj[3] = { uri: _modDef18546 };
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
  obj.source = num(7357).getAssetSource(obj);
  obj.style = memo;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return <tmp2 fadeDuration={0} source={null} style={null} accessible={null} accessibilityLabel={null} resizeMode={null} />;
}