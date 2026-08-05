import { n } from "../../../../_runtime/00689_n.js";
import { getGradientColorByPercentage } from "../../../modules/client_themes/native/ClientThemesUtils.tsx";
import { getGradientThemeFromFlags } from "../../components/ThemeContextProvider/native/getGradientThemeFromFlags.tsx";
// discord_app/design/tokens/native/SemanticColorContext.native.tsx
const result = require("getNodeText").fileFinishedImporting("design/tokens/native/SemanticColorContext.native.tsx");

export const getSemanticColorContextFromThemeContext = function getSemanticColorContextFromThemeContext(themeContext) {
  let contrast;
  let enabledExperiments;
  let primaryColor2;
  let saturation;
  let secondaryColor;
  let obj = getGradientThemeFromFlags /* getGradientThemeFromFlags */;
  const primaryColor = themeContext.primaryColor;
  const gradientThemeFromFlags = obj.getGradientThemeFromFlags(themeContext);
  ({ contrast, saturation, enabledExperiments } = themeContext);
  let obj1 = getGradientColorByPercentage /* getGradientColorByPercentage */;
  let gradientThemeMetadata = obj1.getGradientThemeMetadata(gradientThemeFromFlags, themeContext.gradient);
  if (null != primaryColor) {
    ({ primaryColor: primaryColor2, secondaryColor } = themeContext);
    let tmp9 = null;
    if (null != primaryColor2) {
      let tmpResult = tmp(688);
      const int2hexResult = tmpResult.int2hex(primaryColor2);
      tmpResult = tmp(688);
      if (secondaryColor == null) {
        secondaryColor = primaryColor2;
      }
      const int2hexResult1 = tmpResult.int2hex(secondaryColor);
      const obj5 = n(int2hexResult);
      const mixResult = n(int2hexResult).mix(int2hexResult1, 0.5);
      const hexResult = n(int2hexResult).mix(int2hexResult1, 0.5).hex();
      let str = "dark";
      if (tmpResult1.isThemeLight(tmp10)) {
        str = "light";
      }
      obj = { theme: null, colors: null };
      obj[0] = str;
      obj = { "gradient.start": null, "gradient.mid": null, "gradient.end": null, "gradient.top": null, "gradient.bottom": null, "gradient.primary": null, "gradient.secondary": null };
      obj[0] = int2hexResult;
      obj[1] = hexResult;
      obj[2] = int2hexResult1;
      obj[3] = int2hexResult;
      obj[4] = int2hexResult1;
      obj[5] = int2hexResult;
      obj[6] = int2hexResult1;
      obj[1] = obj;
      tmp9 = obj;
      tmpResult1 = tmp(3991);
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
  obj1[1] = num2;
  obj1[2] = gradientThemeMetadata;
  obj1[3] = null != primaryColor;
  obj1[4] = enabledExperiments;
  return obj1;
};