// === Module 18547: BotIllocon ===

// Module 18547 (BotIllocon)
import FastImageDefault from "FastImage" /* 5600 */;
import assetHelpers from "assetHelpers" /* 7357 */;
import _modDef18548 from "module_18548" /* 18548 */;
import _modDef18549 from "module_18549" /* 18549 */;
import _modDef18550 from "module_18550" /* 18550 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef18548 }, 3: null };
const obj2 = { uri: _modDef18548 };
obj[2] = { uri: _modDef18549 };
const obj3 = { uri: _modDef18549 };
obj[3] = { uri: _modDef18550 };
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
  obj.source = num(7357).getAssetSource(obj);
  obj.style = memo;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return <tmp2 fadeDuration={0} source={null} style={null} accessible={null} accessibilityLabel={null} resizeMode={null} />;
}