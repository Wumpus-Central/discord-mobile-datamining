// === Module 18580: SpiderIllocon ===

// Module 18580 (SpiderIllocon)
import FastImageDefault from "FastImage" /* 5604 */;
import assetHelpers from "assetHelpers" /* 7135 */;
import _modDef18581 from "module_18581" /* 18581 */;
import _modDef18582 from "module_18582" /* 18582 */;
import _modDef18583 from "module_18583" /* 18583 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef18581 }, 3: null };
const obj2 = { uri: _modDef18581 };
obj[2] = { uri: _modDef18582 };
const obj3 = { uri: _modDef18582 };
obj[3] = { uri: _modDef18583 };
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
  obj.source = num(7135).getAssetSource(obj);
  obj.style = memo;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return <tmp2 fadeDuration={0} source={null} style={null} accessible={null} accessibilityLabel={null} resizeMode={null} />;
}