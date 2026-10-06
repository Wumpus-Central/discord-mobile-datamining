// === Module 4587: SemanticColorContext ===

// Module 4587 (SemanticColorContext)
import _modDef683 from "module_683" /* 683 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1103 */;
import native from "native" /* 4588 */;
import getGradientThemeFromFlags from "getGradientThemeFromFlags" /* 4594 */;
import client_themes_ClientThemesUtils from "client_themes/ClientThemesUtils" /* 4702 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("design/tokens/native/SemanticColorContext.native.tsx");

export const getSemanticColorContextFromThemeContext = function getSemanticColorContextFromThemeContext(primaryColor) {
  let contrast;
  let enabledExperiments;
  let obj5;
  let primaryColor2;
  let saturation;
  let secondaryColor;
  primaryColor = primaryColor.primaryColor;
  const obj = getGradientThemeFromFlags;
  const gradientThemeFromFlags = obj.getGradientThemeFromFlags(primaryColor);
  ({ contrast, saturation, enabledExperiments } = primaryColor);
  const obj2 = client_themes_ClientThemesUtils;
  let gradientThemeMetadata = obj2.getGradientThemeMetadata(gradientThemeFromFlags, primaryColor.gradient);
  if (null != primaryColor) {
    ({ primaryColor: primaryColor2, secondaryColor } = primaryColor);
    let tmp10 = null;
    if (null != primaryColor2) {
      const tmpResult = utils_ColorUtils;
      const int2hexResult = tmpResult.int2hex(primaryColor2);
      const int2hex = utils_ColorUtils.int2hex;
      utils_ColorUtils;
      if (secondaryColor == null) {
        secondaryColor = primaryColor2;
      }
      const int2hexResult1 = int2hex(secondaryColor);
      const obj4 = _modDef683(int2hexResult);
      const mixResult = obj4.mix(int2hexResult1, 0.5);
      let str = "dark";
      const hexResult = mixResult.hex();
      const tmpResult4 = native;
      if (tmpResult4.isThemeLight(tmp11)) {
        str = "light";
      }
      const obj3 = { theme: str, colors: obj5 };
      tmp10 = obj3;
      obj5 = { "gradient.start": int2hexResult, "gradient.mid": hexResult, "gradient.end": int2hexResult1, "gradient.top": int2hexResult, "gradient.bottom": int2hexResult1, "gradient.primary": int2hexResult, "gradient.secondary": int2hexResult1 };
    }
    gradientThemeMetadata = tmp10;
  }
  let num2 = 1;
  let num3 = 1;
  if (null == primaryColor) {
    num3 = contrast;
  }
  const obj6 = { contrast: num3, saturation: num2, gradient: gradientThemeMetadata, isProfileTheme: null != primaryColor, enabledExperiments };
  if (null == primaryColor) {
    num2 = saturation;
  }
  return obj6;
};