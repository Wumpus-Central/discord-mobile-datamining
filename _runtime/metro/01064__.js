// === Module 1064: ? ===

// Module 1064
import _mod17 from "module_17" /* 17 */;
import _getClientIntegration from "_getClientIntegration" /* 998 */;

const Appearance = _mod17.Appearance;
let obj = { accentBackground: "rgba(88, 74, 192, 1)", accentForeground: "#ffffff", foreground: "#2b2233", background: "#ffffff", border: "rgba(41, 35, 47, 0.13)", feedbackIcon: "rgba(54, 45, 89, 1)", sentryLogo: "rgba(54, 45, 89, 1)" };
obj = { accentBackground: "rgba(88, 74, 192, 1)", accentForeground: "#ffffff", foreground: "#ebe6ef", background: "#29232f", border: "rgba(235, 230, 239, 0.15)", feedbackIcon: "#ffffff", sentryLogo: "#ffffff" };

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