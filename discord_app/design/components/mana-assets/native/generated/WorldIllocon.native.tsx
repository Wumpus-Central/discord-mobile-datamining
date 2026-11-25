// === Module 13687: WorldIllocon ===

// Module 13687 (WorldIllocon)
import FastImageDefault from "FastImage" /* 5699 */;
import assetHelpers from "assetHelpers" /* 7230 */;
import _modDef13688 from "module_13688" /* 13688 */;
import _modDef13689 from "module_13689" /* 13689 */;
import _modDef13690 from "module_13690" /* 13690 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef13688 }, 3: null };
const obj2 = { uri: _modDef13688 };
obj[2] = { uri: _modDef13689 };
const obj3 = { uri: _modDef13689 };
obj[3] = { uri: _modDef13690 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/WorldIllocon.native.tsx");

export function WorldIllocon(size) {
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