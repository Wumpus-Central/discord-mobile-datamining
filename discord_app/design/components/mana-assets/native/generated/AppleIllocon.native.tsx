// === Module 13718: AppleIllocon ===

// Module 13718 (AppleIllocon)
import FastImageDefault from "FastImage" /* 5730 */;
import assetHelpers from "assetHelpers" /* 7261 */;
import _modDef13719 from "module_13719" /* 13719 */;
import _modDef13720 from "module_13720" /* 13720 */;
import _modDef13721 from "module_13721" /* 13721 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef13719 }, 3: null };
const obj2 = { uri: _modDef13719 };
obj[2] = { uri: _modDef13720 };
const obj3 = { uri: _modDef13720 };
obj[3] = { uri: _modDef13721 };
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
  obj.source = num(7261).getAssetSource(obj);
  obj.style = memo;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return <tmp2 fadeDuration={0} source={null} style={null} accessible={null} accessibilityLabel={null} resizeMode={null} />;
}