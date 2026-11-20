// === Module 18390: BunnyIllocon ===

// Module 18390 (BunnyIllocon)
import FastImageDefault from "FastImage" /* 5481 */;
import assetHelpers from "assetHelpers" /* 7237 */;
import _modDef18391 from "module_18391" /* 18391 */;
import _modDef18392 from "module_18392" /* 18392 */;
import _modDef18393 from "module_18393" /* 18393 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef18391 }, 3: null };
const obj2 = { uri: _modDef18391 };
obj[2] = { uri: _modDef18392 };
const obj3 = { uri: _modDef18392 };
obj[3] = { uri: _modDef18393 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/BunnyIllocon.native.tsx");

export function BunnyIllocon(size) {
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