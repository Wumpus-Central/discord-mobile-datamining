// === Module 14927: AppleIllocon ===

// Module 14927 (AppleIllocon)
import FastImageDefault from "FastImage" /* 5957 */;
import assetHelpers from "assetHelpers" /* 7689 */;
import _modDef14928 from "module_14928" /* 14928 */;
import _modDef14929 from "module_14929" /* 14929 */;
import _modDef14930 from "module_14930" /* 14930 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef14928 }, 3: null };
const obj2 = { uri: _modDef14928 };
obj[2] = { uri: _modDef14929 };
const obj3 = { uri: _modDef14929 };
obj[3] = { uri: _modDef14930 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/AppleIllocon.native.tsx");

export function AppleIllocon(size) {
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
  obj.source = num(7689).getAssetSource(obj);
  obj.style = memo;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return <tmp2 fadeDuration={0} source={null} style={null} accessible={null} accessibilityLabel={null} resizeMode={null} />;
}