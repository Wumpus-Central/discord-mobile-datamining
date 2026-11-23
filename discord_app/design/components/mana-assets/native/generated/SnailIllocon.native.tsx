// === Module 18507: SnailIllocon ===

// Module 18507 (SnailIllocon)
import FastImageDefault from "FastImage" /* 5600 */;
import assetHelpers from "assetHelpers" /* 7357 */;
import _modDef18508 from "module_18508" /* 18508 */;
import _modDef18509 from "module_18509" /* 18509 */;
import _modDef18510 from "module_18510" /* 18510 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef18508 }, 3: null };
const obj2 = { uri: _modDef18508 };
obj[2] = { uri: _modDef18509 };
const obj3 = { uri: _modDef18509 };
obj[3] = { uri: _modDef18510 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/SnailIllocon.native.tsx");

export function SnailIllocon(size) {
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