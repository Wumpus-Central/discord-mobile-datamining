// === Module 18539: SpiderIllocon ===

// Module 18539 (SpiderIllocon)
import FastImageDefault from "FastImage" /* 5600 */;
import assetHelpers from "assetHelpers" /* 7357 */;
import _modDef18540 from "module_18540" /* 18540 */;
import _modDef18541 from "module_18541" /* 18541 */;
import _modDef18542 from "module_18542" /* 18542 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef18540 }, 3: null };
const obj2 = { uri: _modDef18540 };
obj[2] = { uri: _modDef18541 };
const obj3 = { uri: _modDef18541 };
obj[3] = { uri: _modDef18542 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/SpiderIllocon.native.tsx");

export function SpiderIllocon(size) {
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