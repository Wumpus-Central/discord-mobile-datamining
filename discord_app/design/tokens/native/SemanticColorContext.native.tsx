// === Module 4263: SemanticColorContext ===

// Module 4263 (SemanticColorContext)
import _modDef672 from "module_672" /* 672 */;
import getGradientThemeFromFlags from "getGradientThemeFromFlags" /* 4270 */;
import client_themes_ClientThemesUtils from "client_themes/ClientThemesUtils" /* 4378 */;
import size from "module_2" /* 2 */;

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
      let tmpResult = tmp(1091);
      const int2hexResult = tmpResult.int2hex(primaryColor2);
      tmpResult = tmp(1091);
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
      obj = { "gradient.start": int2hexResult, "gradient.mid": hexResult, "gradient.end": int2hexResult1, "gradient.top": int2hexResult, "gradient.bottom": int2hexResult1, "gradient.primary": int2hexResult, "gradient.secondary": int2hexResult1 };
      obj.colors = obj;
      tmp9 = obj;
      tmpResult1 = tmp(4264);
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