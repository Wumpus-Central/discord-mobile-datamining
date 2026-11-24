// === Module 18588: BotIllocon ===

// Module 18588 (BotIllocon)
import FastImageDefault from "FastImage" /* 5604 */;
import assetHelpers from "assetHelpers" /* 7135 */;
import _modDef18589 from "module_18589" /* 18589 */;
import _modDef18590 from "module_18590" /* 18590 */;
import _modDef18591 from "module_18591" /* 18591 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef18589 }, 3: null };
const obj2 = { uri: _modDef18589 };
obj[2] = { uri: _modDef18590 };
const obj3 = { uri: _modDef18590 };
obj[3] = { uri: _modDef18591 };
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
  obj.source = num(7135).getAssetSource(obj);
  obj.style = memo;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return <tmp2 fadeDuration={0} source={null} style={null} accessible={null} accessibilityLabel={null} resizeMode={null} />;
}