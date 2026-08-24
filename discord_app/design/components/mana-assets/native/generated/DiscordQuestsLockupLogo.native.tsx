// === Module 5653: DiscordQuestsLockupLogo ===

// Module 5653 (DiscordQuestsLockupLogo)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import ThemesDefault from "Themes" /* 712 */;
import map from "map" /* 4100 */;
import metadataDefault from "metadata" /* 5654 */;

const Image = get_ActivityIndicator.Image;
const jsx = jsxProd.jsx;
const result = set.fileFinishedImporting("design/components/mana-assets/native/generated/DiscordQuestsLockupLogo.native.tsx");

export const DiscordQuestsLockupLogo = function DiscordQuestsLockupLogo(color) {
  let ICON_STRONG = color.color;
  ({ accessible, accessibilityLabel, resizeMode } = color);
  if (ICON_STRONG === undefined) {
    ICON_STRONG = ThemesDefault.colors.ICON_STRONG;
  }
  let num = color.width;
  if (num === undefined) {
    num = 224;
  }
  let num2 = color.height;
  if (num2 === undefined) {
    num2 = 57;
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
  obj1 = { fadeDuration: 0, source: { uri: metadataDefault }, style: items, accessible, accessibilityLabel, resizeMode };
  items = [{ width: num * num3, height: num2 * num3 }, tmp6];
  return <Image fadeDuration={0} source={{ uri: metadataDefault }} style={items} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
};