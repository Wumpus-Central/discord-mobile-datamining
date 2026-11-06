// === Module 12902: BotIllocon ===

// Module 12902 (BotIllocon)
import FastImageDefault from "FastImage" /* 5872 */;
import assetHelpers from "assetHelpers" /* 7160 */;
import _modDef12903 from "module_12903" /* 12903 */;
import _modDef12904 from "module_12904" /* 12904 */;
import _modDef12905 from "module_12905" /* 12905 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef12903 }, 3: null };
const obj2 = { uri: _modDef12903 };
obj[2] = { uri: _modDef12904 };
const obj3 = { uri: _modDef12904 };
obj[3] = { uri: _modDef12905 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/BotIllocon.native.tsx");

export function BotIllocon(size) {
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
  obj.source = num(7160).getAssetSource(obj);
  obj.style = memo;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return <tmp2 fadeDuration={0} source={null} style={null} accessible={null} accessibilityLabel={null} resizeMode={null} />;
}