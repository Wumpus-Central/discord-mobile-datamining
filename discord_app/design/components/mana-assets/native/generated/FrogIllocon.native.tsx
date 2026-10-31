// discord_app/design/components/mana-assets/native/generated/FrogIllocon.native.tsx
import FastImageDefault from "../../../../../components_native/common/FastImage.tsx";
import assetHelpers from "../assetHelpers.native.tsx";
import _modDef12678 from "../../../../../../discord_assets/assets/mana/asset-library/generated/FrogIllocon-1x.png.js";
import _modDef12679 from "../../../../../../discord_assets/assets/mana/asset-library/generated/FrogIllocon-2x.png.js";
import _modDef12680 from "../../../../../../discord_assets/assets/mana/asset-library/generated/FrogIllocon-3x.png.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef12678 }, 3: null };
const obj2 = { uri: _modDef12678 };
obj[2] = { uri: _modDef12679 };
const obj3 = { uri: _modDef12679 };
obj[3] = { uri: _modDef12680 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/FrogIllocon.native.tsx");

export function FrogIllocon(size) {
  let num = size.size;
  ({ accessible, accessibilityLabel, resizeMode } = size);
  if (num === undefined) {
    num = 64;
  }
  const items = [num];
  const memo = noop.useMemo(() => {
    const size = { width: num, height: num, intrinsicWidth: 64, intrinsicHeight: 64 };
    return assetHelpers.getAssetSizeStyle(size);
  }, items);
  obj = { fadeDuration: 0, source: null, style: null, accessible: null, accessibilityLabel: null, resizeMode: null };
  obj.source = num(7069).getAssetSource(obj);
  obj.style = memo;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return (
    <tmp2 fadeDuration={0} source={null} style={null} accessible={null} accessibilityLabel={null} resizeMode={null} />
  );
}
