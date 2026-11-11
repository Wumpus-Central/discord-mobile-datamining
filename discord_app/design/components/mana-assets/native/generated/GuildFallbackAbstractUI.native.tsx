// discord_app/design/components/mana-assets/native/generated/GuildFallbackAbstractUI.native.tsx
import assetHelpers from "../assetHelpers.native.tsx";
import _modDef13992 from "../../../../../../discord_assets/assets/mana/asset-library/generated/GuildFallbackAbstractUI-1x.png.js";
import _modDef13993 from "../../../../../../discord_assets/assets/mana/asset-library/generated/GuildFallbackAbstractUI-2x.png.js";
import _modDef13994 from "../../../../../../discord_assets/assets/mana/asset-library/generated/GuildFallbackAbstractUI-3x.png.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef13992 }, 3: null };
let obj2 = { uri: _modDef13992 };
obj[2] = { uri: _modDef13993 };
const obj3 = { uri: _modDef13993 };
obj[3] = { uri: _modDef13994 };
let size = fn(2);
const result = size.fileFinishedImporting(
  "design/components/mana-assets/native/generated/GuildFallbackAbstractUI.native.tsx",
);

export function GuildFallbackAbstractUI(width) {
  width = width.width;
  const height = width.height;
  let num = width.scale;
  ({ accessible, accessibilityLabel, resizeMode } = width);
  if (num === undefined) {
    num = 1;
  }
  items = [width, height, num];
  const memo = noop.useMemo(() => {
    const size = { width, height, scale: num, intrinsicWidth: 144, intrinsicHeight: 144 };
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
