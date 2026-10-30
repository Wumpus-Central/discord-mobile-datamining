// discord_app/design/components/mana-assets/native/generated/PlaneIllocon.native.tsx
import FastImageDefault from "../../../../../components_native/common/FastImage.tsx";
import assetHelpers from "../assetHelpers.native.tsx";
import _modDef14004 from "../../../../../../discord_assets/assets/mana/asset-library/generated/PlaneIllocon-2x.png.js";
import _modDef20035 from "../../../../../../discord_assets/assets/mana/asset-library/generated/PlaneIllocon-1x.png.js";
import _modDef20036 from "../../../../../../discord_assets/assets/mana/asset-library/generated/PlaneIllocon-3x.png.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef20035 }, 3: null };
const obj2 = { uri: _modDef20035 };
obj[2] = { uri: _modDef14004 };
const obj3 = { uri: _modDef14004 };
obj[3] = { uri: _modDef20036 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/PlaneIllocon.native.tsx");

export function PlaneIllocon(size) {
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
  obj.source = num(7063).getAssetSource(obj);
  obj.style = memo;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return (
    <tmp2 fadeDuration={0} source={null} style={null} accessible={null} accessibilityLabel={null} resizeMode={null} />
  );
}
