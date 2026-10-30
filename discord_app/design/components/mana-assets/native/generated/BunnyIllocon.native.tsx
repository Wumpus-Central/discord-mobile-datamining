// discord_app/design/components/mana-assets/native/generated/BunnyIllocon.native.tsx
import FastImageDefault from "../../../../../components_native/common/FastImage.tsx";
import assetHelpers from "../assetHelpers.native.tsx";
import _modDef12647 from "../../../../../../discord_assets/assets/mana/asset-library/generated/BunnyIllocon-1x.png.js";
import _modDef12648 from "../../../../../../discord_assets/assets/mana/asset-library/generated/BunnyIllocon-2x.png.js";
import _modDef12649 from "../../../../../../discord_assets/assets/mana/asset-library/generated/BunnyIllocon-3x.png.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef12647 }, 3: null };
const obj2 = { uri: _modDef12647 };
obj[2] = { uri: _modDef12648 };
const obj3 = { uri: _modDef12648 };
obj[3] = { uri: _modDef12649 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/BunnyIllocon.native.tsx");

export function BunnyIllocon(size) {
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
