// === Module 5911: DiscordShopLockupLogo ===

// Module 5911 (DiscordShopLockupLogo)
import _mod17 from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import nativeDefault from "native" /* 576 */;
import useToken from "useToken" /* 4262 */;
import _modDef5912 from "module_5912" /* 5912 */;
import size from "module_2" /* 2 */;

const Image = _mod17.Image;
const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/DiscordShopLockupLogo.native.tsx");

export const DiscordShopLockupLogo = function DiscordShopLockupLogo(color) {
  let ICON_STRONG = color.color;
  ({ accessible, accessibilityLabel, resizeMode } = color);
  if (ICON_STRONG === undefined) {
    ICON_STRONG = nativeDefault.colors.ICON_STRONG;
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
  const obj1 = { fadeDuration: 0, source: { uri: _modDef5912 }, style: null, accessible, accessibilityLabel, resizeMode };
  const size = { width: num * num3, height: num2 * num3 };
  const items = [size, tmp6];
  obj1.style = items;
  return <Image fadeDuration={0} source={{ uri: _modDef5912 }} style={null} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
};