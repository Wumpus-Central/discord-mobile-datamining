// discord_app/design/components/mana-assets/native/generated/AvatarGraggleExample.native.tsx
import assetHelpers from "../assetHelpers.native.tsx";
import _modDef19903 from "../../../../../../discord_assets/assets/mana/asset-library/generated/AvatarGraggleExample-1x.png.js";
import _modDef19904 from "../../../../../../discord_assets/assets/mana/asset-library/generated/AvatarGraggleExample-2x.png.js";
import _modDef19905 from "../../../../../../discord_assets/assets/mana/asset-library/generated/AvatarGraggleExample-3x.png.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef19903 }, 3: null };
let obj2 = { uri: _modDef19903 };
obj[2] = { uri: _modDef19904 };
const obj3 = { uri: _modDef19904 };
obj[3] = { uri: _modDef19905 };
let size = fn(2);
const result = size.fileFinishedImporting(
  "design/components/mana-assets/native/generated/AvatarGraggleExample.native.tsx",
);

export function AvatarGraggleExample(width) {
  width = width.width;
  const height = width.height;
  let num = width.scale;
  ({ accessible, accessibilityLabel, resizeMode } = width);
  if (num === undefined) {
    num = 1;
  }
  const items = [width, height, num];
  const memo = noop.useMemo(() => {
    const size = { width, height, scale: num, intrinsicWidth: 100, intrinsicHeight: 100 };
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
