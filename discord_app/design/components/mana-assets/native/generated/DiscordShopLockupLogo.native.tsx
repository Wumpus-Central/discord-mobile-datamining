// === Module 6125: DiscordShopLockupLogo ===

// Module 6125 (DiscordShopLockupLogo)
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const result = require("Themes").fileFinishedImporting("design/components/mana-assets/native/generated/DiscordShopLockupLogo.native.tsx");

export const DiscordShopLockupLogo = function DiscordShopLockupLogo(color) {
  let accessibilityLabel;
  let accessible;
  let resizeMode;
  let ICON_STRONG = color.color;
  ({ accessible, accessibilityLabel, resizeMode } = color);
  if (ICON_STRONG === undefined) {
    ICON_STRONG = importDefault(712).colors.ICON_STRONG;
  }
  let num = color.width;
  if (num === undefined) {
    num = 256;
  }
  let num2 = color.height;
  if (num2 === undefined) {
    num2 = 30;
  }
  let num3 = color.scale;
  if (num3 === undefined) {
    num3 = 1;
  }
  let obj = require(3959) /* map */;
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
    tmp5 = null != ICON_STRONG && typeof ICON_STRONG === "y";
  }
  const obj1 = { fadeDuration: 0, source: null, style: null, accessible: null, accessibilityLabel: null, resizeMode: null };
  obj1[1] = { uri: importDefault(6126) };
  const items = [{ width: num * num3, height: num2 * num3 }, tmp6];
  obj1[2] = items;
  obj1[3] = accessible;
  obj1[4] = accessibilityLabel;
  obj1[5] = resizeMode;
  return <Image fadeDuration={0} source={null} style={null} accessible={null} accessibilityLabel={null} resizeMode={null} />;
};