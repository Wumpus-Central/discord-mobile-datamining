// === Module 18590: BeeIllocon ===

// Module 18590 (BeeIllocon)
import FastImageDefault from "FastImage" /* 5479 */;
import assetHelpers from "assetHelpers" /* 7238 */;
import _modDef18591 from "module_18591" /* 18591 */;
import _modDef18592 from "module_18592" /* 18592 */;
import _modDef18593 from "module_18593" /* 18593 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef18591 }, 3: null };
const obj2 = { uri: _modDef18591 };
obj[2] = { uri: _modDef18592 };
const obj3 = { uri: _modDef18592 };
obj[3] = { uri: _modDef18593 };
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
  obj.source = num(7238).getAssetSource(obj);
  obj.style = memo;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return <tmp2 fadeDuration={0} source={null} style={null} accessible={null} accessibilityLabel={null} resizeMode={null} />;
}