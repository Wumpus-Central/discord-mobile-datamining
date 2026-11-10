// === Module 14549: ControllerIllocon ===

// Module 14549 (ControllerIllocon)
import FastImageDefault from "FastImage" /* 5844 */;
import assetHelpers from "assetHelpers" /* 7138 */;
import _modDef14550 from "module_14550" /* 14550 */;
import _modDef14551 from "module_14551" /* 14551 */;
import _modDef14552 from "module_14552" /* 14552 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef14550 }, 3: null };
const obj2 = { uri: _modDef14550 };
obj[2] = { uri: _modDef14551 };
const obj3 = { uri: _modDef14551 };
obj[3] = { uri: _modDef14552 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/ControllerIllocon.native.tsx");

export function ControllerIllocon(size) {
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
  obj.source = num(7138).getAssetSource(obj);
  obj.style = memo;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return <tmp2 fadeDuration={0} source={null} style={null} accessible={null} accessibilityLabel={null} resizeMode={null} />;
}