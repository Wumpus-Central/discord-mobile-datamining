// === Module 18378: SnailIllocon ===

// Module 18378 (SnailIllocon)
import FastImageDefault from "FastImage" /* 5481 */;
import assetHelpers from "assetHelpers" /* 7237 */;
import _modDef18379 from "module_18379" /* 18379 */;
import _modDef18380 from "module_18380" /* 18380 */;
import _modDef18381 from "module_18381" /* 18381 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef18379 }, 3: null };
const obj2 = { uri: _modDef18379 };
obj[2] = { uri: _modDef18380 };
const obj3 = { uri: _modDef18380 };
obj[3] = { uri: _modDef18381 };
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
  obj.source = num(7237).getAssetSource(obj);
  obj.style = memo;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return <tmp2 fadeDuration={0} source={null} style={null} accessible={null} accessibilityLabel={null} resizeMode={null} />;
}