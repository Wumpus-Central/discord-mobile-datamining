// === Module 6163: ExperimentalDiscordShopLockupExperiementLogo ===

// Module 6163 (ExperimentalDiscordShopLockupExperiementLogo)
import _mod17 from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import nativeDefault from "native" /* 576 */;
import useToken from "useToken" /* 4423 */;
import _modDef6164 from "module_6164" /* 6164 */;
import size from "module_2" /* 2 */;

const Image = _mod17.Image;
const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/ExperimentalDiscordShopLockupExperiementLogo.native.tsx");

export const ExperimentalDiscordShopLockupExperiementLogo = function ExperimentalDiscordShopLockupExperiementLogo(color) {
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
  const token = useToken.useToken(ICON_STRONG);
  if (null != token) {
    const obj2 = { tintColor: token };
    let tmp6 = obj2;
  } else {
    if (tmp5) {
      const obj3 = { tintColor: ICON_STRONG };
      tmp6 = obj3;
    }
    tmp5 = null != ICON_STRONG && typeof ICON_STRONG === "string";
  }
  const obj4 = { fadeDuration: 0, source: null, style: null, accessible: null, accessibilityLabel: null, resizeMode: null };
  obj4.source = { uri: _modDef6164 };
  const size = { width: num * num3, height: num2 * num3 };
  const items = [size, tmp6];
  obj4.style = items;
  obj4.accessible = accessible;
  obj4.accessibilityLabel = accessibilityLabel;
  obj4.resizeMode = resizeMode;
  return <Image fadeDuration={0} source={null} style={null} accessible={null} accessibilityLabel={null} resizeMode={null} />;
};