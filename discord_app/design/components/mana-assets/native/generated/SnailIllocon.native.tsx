// discord_app/design/components/mana-assets/native/generated/SnailIllocon.native.tsx
import FastImageDefault from "../../../../../components_native/common/FastImage.tsx";
import assetHelpers from "../assetHelpers.native.tsx";
import _modDef12670 from "../../../../../../discord_assets/assets/mana/asset-library/generated/SnailIllocon-1x.png.js";
import _modDef12671 from "../../../../../../discord_assets/assets/mana/asset-library/generated/SnailIllocon-2x.png.js";
import _modDef12672 from "../../../../../../discord_assets/assets/mana/asset-library/generated/SnailIllocon-3x.png.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef12670 }, 3: null };
const obj2 = { uri: _modDef12670 };
obj[2] = { uri: _modDef12671 };
const obj3 = { uri: _modDef12671 };
obj[3] = { uri: _modDef12672 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/SnailIllocon.native.tsx");

export function SnailIllocon(size) {
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
