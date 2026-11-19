// discord_app/design/components/mana-assets/native/generated/BellSpotIllustration.native.tsx
import assetHelpers from "../assetHelpers.native.tsx";
import _modDef17555 from "../../../../../../discord_assets/assets/mana/asset-library/generated/BellSpotIllustration-1x.png.js";
import _modDef17556 from "../../../../../../discord_assets/assets/mana/asset-library/generated/BellSpotIllustration-2x.png.js";
import _modDef17557 from "../../../../../../discord_assets/assets/mana/asset-library/generated/BellSpotIllustration-3x.png.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef17555 }, 3: null };
let obj2 = { uri: _modDef17555 };
obj[2] = { uri: _modDef17556 };
const obj3 = { uri: _modDef17556 };
obj[3] = { uri: _modDef17557 };
let size = fn(2);
const result = size.fileFinishedImporting(
  "design/components/mana-assets/native/generated/BellSpotIllustration.native.tsx",
);

export function BellSpotIllustration(width) {
  width = width.width;
  const height = width.height;
  let num = width.scale;
  ({ accessible, accessibilityLabel, resizeMode } = width);
  if (num === undefined) {
    num = 1;
  }
  items = [width, height, num];
  const memo = noop.useMemo(() => {
    const size = { width, height, scale: num, intrinsicWidth: 288, intrinsicHeight: 192 };
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
  return (
    <tmp2 fadeDuration={0} source={null} style={null} accessible={null} accessibilityLabel={null} resizeMode={null} />
  );
}
