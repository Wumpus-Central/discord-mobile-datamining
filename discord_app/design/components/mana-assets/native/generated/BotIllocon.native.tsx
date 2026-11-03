// === Module 12848: BotIllocon ===

// Module 12848 (BotIllocon)
import FastImageDefault from "FastImage" /* 5837 */;
import assetHelpers from "assetHelpers" /* 7195 */;
import _modDef12849 from "module_12849" /* 12849 */;
import _modDef12850 from "module_12850" /* 12850 */;
import _modDef12851 from "module_12851" /* 12851 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef12849 }, 3: null };
const obj2 = { uri: _modDef12849 };
obj[2] = { uri: _modDef12850 };
const obj3 = { uri: _modDef12850 };
obj[3] = { uri: _modDef12851 };
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
  obj.source = num(7195).getAssetSource(obj);
  obj.style = memo;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return <tmp2 fadeDuration={0} source={null} style={null} accessible={null} accessibilityLabel={null} resizeMode={null} />;
}