// discord_app/design/tokens/native/SemanticColorContext.native.tsx
import _modDef672 from "../../../../_runtime/metro/00672__.js";
import utils_ColorUtils from "../../../../discord_common/js/shared/utils/ColorUtils.tsx";
import native from "../../utils/native.tsx";
import getGradientThemeFromFlags from "../../components/ThemeContextProvider/native/getGradientThemeFromFlags.tsx";
import client_themes_ClientThemesUtils from "../../../modules/client_themes/native/ClientThemesUtils.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("design/tokens/native/SemanticColorContext.native.tsx");

export const getSemanticColorContextFromThemeContext = function getSemanticColorContextFromThemeContext(themeContext) {
  let obj = getGradientThemeFromFlags;
  const primaryColor = themeContext.primaryColor;
  const gradientThemeFromFlags = obj.getGradientThemeFromFlags(themeContext);
  ({ contrast, saturation, enabledExperiments } = themeContext);
  let obj1 = client_themes_ClientThemesUtils;
  let gradientThemeMetadata = obj1.getGradientThemeMetadata(gradientThemeFromFlags, themeContext.gradient);
  if (null != primaryColor) {
    ({ primaryColor: primaryColor2, secondaryColor } = themeContext);
    let tmp9 = null;
    if (null != primaryColor2) {
      let tmpResult = utils_ColorUtils;
      const int2hexResult = tmpResult.int2hex(primaryColor2);
      tmpResult = utils_ColorUtils;
      if (secondaryColor == null) {
        secondaryColor = primaryColor2;
      }
      const int2hexResult1 = tmpResult.int2hex(secondaryColor);
      const obj5 = _modDef672(int2hexResult);
      const mixResult = _modDef672(int2hexResult).mix(int2hexResult1, 0.5);
      const hexResult = _modDef672(int2hexResult).mix(int2hexResult1, 0.5).hex();
      let str = "dark";
      if (tmpResult1.isThemeLight(tmp10)) {
        str = "light";
      }
      obj = { theme: str, colors: null };
      obj = {
        "gradient.start": int2hexResult,
        "gradient.mid": hexResult,
        "gradient.end": int2hexResult1,
        "gradient.top": int2hexResult,
        "gradient.bottom": int2hexResult1,
        "gradient.primary": int2hexResult,
        "gradient.secondary": int2hexResult1,
      };
      obj.colors = obj;
      tmp9 = obj;
      tmpResult1 = native;
    }
    gradientThemeMetadata = tmp9;
  }
  let num2 = 1;
  let num3 = 1;
  if (null == primaryColor) {
    num3 = contrast;
  }
  obj1 = { contrast: num3, saturation: null, gradient: null, isProfileTheme: null, enabledExperiments: null };
  if (null == primaryColor) {
    num2 = saturation;
  }
  obj1.saturation = num2;
  obj1.gradient = gradientThemeMetadata;
  obj1.isProfileTheme = null != primaryColor;
  obj1.enabledExperiments = enabledExperiments;
  return obj1;
};
