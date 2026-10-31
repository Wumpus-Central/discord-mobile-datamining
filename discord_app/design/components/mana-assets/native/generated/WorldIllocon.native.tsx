// discord_app/design/components/mana-assets/native/generated/WorldIllocon.native.tsx
import FastImageDefault from "../../../../../components_native/common/FastImage.tsx";
import assetHelpers from "../assetHelpers.native.tsx";
import _modDef14302 from "../../../../../../discord_assets/assets/mana/asset-library/generated/WorldIllocon-1x.png.js";
import _modDef14303 from "../../../../../../discord_assets/assets/mana/asset-library/generated/WorldIllocon-2x.png.js";
import _modDef14304 from "../../../../../../discord_assets/assets/mana/asset-library/generated/WorldIllocon-3x.png.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef14302 }, 3: null };
const obj2 = { uri: _modDef14302 };
obj[2] = { uri: _modDef14303 };
const obj3 = { uri: _modDef14303 };
obj[3] = { uri: _modDef14304 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/WorldIllocon.native.tsx");

export function WorldIllocon(size) {
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
