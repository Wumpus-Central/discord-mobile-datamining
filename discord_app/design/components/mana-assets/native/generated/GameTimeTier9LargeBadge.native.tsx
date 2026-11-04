// === Module 15135: GameTimeTier9LargeBadge ===

// Module 15135 (GameTimeTier9LargeBadge)
import assetHelpers from "assetHelpers" /* 7210 */;
import _modDef15136 from "module_15136" /* 15136 */;
import _modDef15137 from "module_15137" /* 15137 */;
import _modDef15138 from "module_15138" /* 15138 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef15136 }, 3: null };
let obj2 = { uri: _modDef15136 };
obj[2] = { uri: _modDef15137 };
const obj3 = { uri: _modDef15137 };
obj[3] = { uri: _modDef15138 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/GameTimeTier9LargeBadge.native.tsx");

export function GameTimeTier9LargeBadge(width) {
  width = width.width;
  const height = width.height;
  let num = width.scale;
  ({ accessible, accessibilityLabel, resizeMode } = width);
  if (num === undefined) {
    num = 1;
  }
  items = [width, height, num];
  const memo = noop.useMemo(() => {
    const size = { width, height, scale: num, intrinsicWidth: 156, intrinsicHeight: 100 };
    return assetHelpers.getAssetSizeStyle(size);
  }, items);
  obj = { fadeDuration: 0, source: null, style: null, accessible: null, accessibilityLabel: null, resizeMode: null };
  const tmp2 = height(num[6]);
  obj.source = width(num[5]).getAssetSource(obj);
  obj.style = memo;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  const obj2 = width(num[5]);
  obj.resizeMode = width(num[5]).getAssetResizeMode(resizeMode);
  return <tmp2 fadeDuration={0} source={null} style={null} accessible={null} accessibilityLabel={null} resizeMode={null} />;
}