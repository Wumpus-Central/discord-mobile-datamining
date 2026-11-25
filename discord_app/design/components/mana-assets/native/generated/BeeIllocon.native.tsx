// === Module 18695: BeeIllocon ===

// Module 18695 (BeeIllocon)
import FastImageDefault from "FastImage" /* 5699 */;
import assetHelpers from "assetHelpers" /* 7230 */;
import _modDef18696 from "module_18696" /* 18696 */;
import _modDef18697 from "module_18697" /* 18697 */;
import _modDef18698 from "module_18698" /* 18698 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef18696 }, 3: null };
const obj2 = { uri: _modDef18696 };
obj[2] = { uri: _modDef18697 };
const obj3 = { uri: _modDef18697 };
obj[3] = { uri: _modDef18698 };
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
  obj.source = num(7230).getAssetSource(obj);
  obj.style = memo;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return <tmp2 fadeDuration={0} source={null} style={null} accessible={null} accessibilityLabel={null} resizeMode={null} />;
}