// === Module 18699: BotIllocon ===

// Module 18699 (BotIllocon)
import FastImageDefault from "FastImage" /* 5699 */;
import assetHelpers from "assetHelpers" /* 7230 */;
import _modDef18700 from "module_18700" /* 18700 */;
import _modDef18701 from "module_18701" /* 18701 */;
import _modDef18702 from "module_18702" /* 18702 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef18700 }, 3: null };
const obj2 = { uri: _modDef18700 };
obj[2] = { uri: _modDef18701 };
const obj3 = { uri: _modDef18701 };
obj[3] = { uri: _modDef18702 };
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
  obj.source = num(7230).getAssetSource(obj);
  obj.style = memo;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return <tmp2 fadeDuration={0} source={null} style={null} accessible={null} accessibilityLabel={null} resizeMode={null} />;
}