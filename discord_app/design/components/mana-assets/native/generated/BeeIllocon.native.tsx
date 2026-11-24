// === Module 18584: BeeIllocon ===

// Module 18584 (BeeIllocon)
import FastImageDefault from "FastImage" /* 5604 */;
import assetHelpers from "assetHelpers" /* 7135 */;
import _modDef18585 from "module_18585" /* 18585 */;
import _modDef18586 from "module_18586" /* 18586 */;
import _modDef18587 from "module_18587" /* 18587 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef18585 }, 3: null };
const obj2 = { uri: _modDef18585 };
obj[2] = { uri: _modDef18586 };
const obj3 = { uri: _modDef18586 };
obj[3] = { uri: _modDef18587 };
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
  obj.source = num(7135).getAssetSource(obj);
  obj.style = memo;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return <tmp2 fadeDuration={0} source={null} style={null} accessible={null} accessibilityLabel={null} resizeMode={null} />;
}