// discord_app/design/components/mana-assets/native/generated/ExperimentalDiscordShopLockupExperiementLogo.native.tsx
import _mod17 from "../../../../../../_runtime/metro/00017__.js";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import useToken from "../../../../tokens/native/useToken.tsx";
import _modDef5974 from "../../../../../../discord_assets/assets/mana/asset-library/generated/ExperimentalDiscordShopLockupExperiementLogo-2x.png.js";
import size from "../../../../../../_runtime/metro/00002__.js";

const Image = _mod17.Image;
const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting(
  "design/components/mana-assets/native/generated/ExperimentalDiscordShopLockupExperiementLogo.native.tsx",
);

export const ExperimentalDiscordShopLockupExperiementLogo = function ExperimentalDiscordShopLockupExperiementLogo(
  color,
) {
  let ICON_STRONG = color.color;
  ({ accessible, accessibilityLabel, resizeMode } = color);
  if (ICON_STRONG === undefined) {
    ICON_STRONG = nativeDefault.colors.ICON_STRONG;
  }
  let num = color.width;
  if (num === undefined) {
    num = 130;
  }
  let num2 = color.height;
  if (num2 === undefined) {
    num2 = 22;
  }
  let num3 = color.scale;
  if (num3 === undefined) {
    num3 = 1;
  }
  let obj = useToken;
  const token = obj.useToken(ICON_STRONG);
  if (null != token) {
    obj = { tintColor: token };
    let tmp6 = obj;
  } else {
    if (tmp5) {
      obj = { tintColor: ICON_STRONG };
      tmp6 = obj;
    }
    tmp5 = null != ICON_STRONG && typeof ICON_STRONG === "string";
  }
  const obj1 = {
    fadeDuration: 0,
    source: { uri: _modDef5974 },
    style: null,
    accessible,
    accessibilityLabel,
    resizeMode,
  };
  const size = { width: num * num3, height: num2 * num3 };
  const items = [size, tmp6];
  obj1.style = items;
  return (
    <Image
      fadeDuration={0}
      source={{ uri: _modDef5974 }}
      style={null}
      accessible={accessible}
      accessibilityLabel={accessibilityLabel}
      resizeMode={resizeMode}
    />
  );
};
