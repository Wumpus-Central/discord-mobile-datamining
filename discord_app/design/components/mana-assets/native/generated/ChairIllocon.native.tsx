// === Module 13683: ChairIllocon ===

// Module 13683 (ChairIllocon)
import FastImageDefault from "FastImage" /* 5699 */;
import assetHelpers from "assetHelpers" /* 7230 */;
import _modDef13684 from "module_13684" /* 13684 */;
import _modDef13685 from "module_13685" /* 13685 */;
import _modDef13686 from "module_13686" /* 13686 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef13684 }, 3: null };
const obj2 = { uri: _modDef13684 };
obj[2] = { uri: _modDef13685 };
const obj3 = { uri: _modDef13685 };
obj[3] = { uri: _modDef13686 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/ChairIllocon.native.tsx");

export function ChairIllocon(size) {
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