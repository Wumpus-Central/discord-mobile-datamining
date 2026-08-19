// discord_app/design/components/mana-assets/native/generated/DiscordNitroLockupLogo.native.tsx
import obj132 from "../../../../../../_runtime/00002_obj132.js";
import get_ActivityIndicator from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import map from "../../../../tokens/native/useToken.tsx";
import metadataDefault from "../../../../../../discord_assets/assets/mana/asset-library/generated/DiscordNitroLockupLogo-2x.png.js";

const Image = get_ActivityIndicator.Image;
const jsx = jsxProd.jsx;
const result = obj132.fileFinishedImporting("design/components/mana-assets/native/generated/DiscordNitroLockupLogo.native.tsx");

export const DiscordNitroLockupLogo = function DiscordNitroLockupLogo(color) {
  let ICON_STRONG = color.color;
  ({ accessible, accessibilityLabel, resizeMode } = color);
  if (ICON_STRONG === undefined) {
    ICON_STRONG = ThemesDefault.colors.ICON_STRONG;
  }
  let num = color.width;
  if (num === undefined) {
    num = 200;
  }
  let num2 = color.height;
  if (num2 === undefined) {
    num2 = 61;
  }
  let num3 = color.scale;
  if (num3 === undefined) {
    num3 = 1;
  }
  let obj = map;
  const token = obj.useToken(ICON_STRONG);
  if (null != token) {
    obj = { tintColor: null };
    obj[0] = token;
    let tmp6 = obj;
  } else {
    if (tmp5) {
      obj = { tintColor: null };
      obj[0] = ICON_STRONG;
      tmp6 = obj;
    }
    tmp5 = null != ICON_STRONG && typeof ICON_STRONG === "string";
  }
  const items = [{ width: num * num3, height: num2 * num3 }, tmp6];
  return <Image fadeDuration={0} source={{ uri: metadataDefault }} style={items} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
};