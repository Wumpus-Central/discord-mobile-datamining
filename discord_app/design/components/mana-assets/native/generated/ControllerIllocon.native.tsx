// === Module 14522: ControllerIllocon ===

// Module 14522 (ControllerIllocon)
import FastImageDefault from "FastImage" /* 5842 */;
import assetHelpers from "assetHelpers" /* 7135 */;
import _modDef14523 from "module_14523" /* 14523 */;
import _modDef14524 from "module_14524" /* 14524 */;
import _modDef14525 from "module_14525" /* 14525 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef14523 }, 3: null };
const obj2 = { uri: _modDef14523 };
obj[2] = { uri: _modDef14524 };
const obj3 = { uri: _modDef14524 };
obj[3] = { uri: _modDef14525 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/ControllerIllocon.native.tsx");

export function ControllerIllocon(size) {
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