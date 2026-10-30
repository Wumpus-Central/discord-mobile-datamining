// discord_app/design/components/mana-assets/native/generated/MemberRolesAbstractUI.native.tsx
import assetHelpers from "../assetHelpers.native.tsx";
import _modDef19723 from "../../../../../../discord_assets/assets/mana/asset-library/generated/MemberRolesAbstractUI-1x.png.js";
import _modDef19724 from "../../../../../../discord_assets/assets/mana/asset-library/generated/MemberRolesAbstractUI-2x.png.js";
import _modDef19725 from "../../../../../../discord_assets/assets/mana/asset-library/generated/MemberRolesAbstractUI-3x.png.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef19723 }, 3: null };
let obj2 = { uri: _modDef19723 };
obj[2] = { uri: _modDef19724 };
const obj3 = { uri: _modDef19724 };
obj[3] = { uri: _modDef19725 };
let size = fn(2);
const result = size.fileFinishedImporting(
  "design/components/mana-assets/native/generated/MemberRolesAbstractUI.native.tsx",
);

export function MemberRolesAbstractUI(width) {
  width = width.width;
  const height = width.height;
  let num = width.scale;
  ({ accessible, accessibilityLabel, resizeMode } = width);
  if (num === undefined) {
    num = 1;
  }
  const items = [width, height, num];
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
