// discord_app/design/components/mana-assets/native/generated/ExperimentalDiscordShopLockupExperiementLogo.native.tsx
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import { metadata } from "../../../../../../discord_assets/assets/mana/asset-library/generated/ExperimentalDiscordShopLockupExperiementLogo-2x.png.js";
import { Themes } from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import { map } from "../../../../tokens/native/useToken.tsx";

const result = require("Themes").fileFinishedImporting("design/components/mana-assets/native/generated/ExperimentalDiscordShopLockupExperiementLogo.native.tsx");

export const ExperimentalDiscordShopLockupExperiementLogo = function ExperimentalDiscordShopLockupExperiementLogo(color) {
  let accessibilityLabel;
  let accessible;
  let resizeMode;
  let ICON_STRONG = color.color;
  ({ accessible, accessibilityLabel, resizeMode } = color);
  if (ICON_STRONG === undefined) {
    ICON_STRONG = Themes.colors.ICON_STRONG;
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
  let obj = map /* map */;
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
  const obj1 = { fadeDuration: 0, source: null, style: null, accessible: null, accessibilityLabel: null, resizeMode: null };
  obj1[1] = { uri: metadata };
  const items = [{ width: num * num3, height: num2 * num3 }, tmp6];
  obj1[2] = items;
  obj1[3] = accessible;
  obj1[4] = accessibilityLabel;
  obj1[5] = resizeMode;
  return <Image fadeDuration={0} source={null} style={null} accessible={null} accessibilityLabel={null} resizeMode={null} />;
};