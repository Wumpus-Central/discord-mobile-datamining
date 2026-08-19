// === Module 1199: getTheme ===

// Module 1199 (getTheme)
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import _getClientIntegration from "_getClientIntegration" /* 1133 */;

const Appearance = get_ActivityIndicator.Appearance;
let obj = { accentBackground: "rgba(88, 74, 192, 1)", accentForeground: "#ffffff", foreground: "#ebe6ef", background: "#29232f", border: "rgba(235, 230, 239, 0.15)", feedbackIcon: "#ffffff", sentryLogo: "#ffffff" };

export const getTheme = function getTheme() {
  obj = _getClientIntegration;
  let colorScheme = obj.getColorScheme();
  if ("system" === colorScheme) {
    colorScheme = Appearance.getColorScheme();
  }
  const merged = Object.assign({}, obj);
  let tmpResult = _getClientIntegration;
  let merged1 = Object.assign(merged, tmpResult.getFeedbackLightTheme());
  const merged2 = Object.assign({}, obj);
  tmpResult = _getClientIntegration;
  if ("dark" === colorScheme) {
    merged1 = Object.assign(merged2, tmpResult.getFeedbackDarkTheme());
  }
  return merged1;
};
export const LightTheme = obj;
export const DarkTheme = obj;