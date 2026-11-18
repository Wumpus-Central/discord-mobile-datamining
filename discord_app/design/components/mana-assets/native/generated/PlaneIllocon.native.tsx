// === Module 20201: PlaneIllocon ===

// Module 20201 (PlaneIllocon)
import FastImageDefault from "FastImage" /* 5510 */;
import assetHelpers from "assetHelpers" /* 7268 */;
import _modDef13295 from "module_13295" /* 13295 */;
import _modDef20202 from "module_20202" /* 20202 */;
import _modDef20203 from "module_20203" /* 20203 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef20202 }, 3: null };
const obj2 = { uri: _modDef20202 };
obj[2] = { uri: _modDef13295 };
const obj3 = { uri: _modDef13295 };
obj[3] = { uri: _modDef20203 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/PlaneIllocon.native.tsx");

export function PlaneIllocon(size) {
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
  obj.source = num(7268).getAssetSource(obj);
  obj.style = memo;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return <tmp2 fadeDuration={0} source={null} style={null} accessible={null} accessibilityLabel={null} resizeMode={null} />;
}