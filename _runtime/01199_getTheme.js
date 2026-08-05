// _runtime/01199_getTheme.js
import { Appearance } from "get ActivityIndicator";
import { _getClientIntegration } from "01133__getClientIntegration.js";

let obj = { accentBackground: "rgba(88, 74, 192, 1)", accentForeground: "#ffffff", foreground: "#2b2233", background: "#ffffff", border: "rgba(41, 35, 47, 0.13)", feedbackIcon: "rgba(54, 45, 89, 1)", sentryLogo: "rgba(54, 45, 89, 1)" };
obj = { accentBackground: "rgba(88, 74, 192, 1)", accentForeground: "#ffffff", foreground: "#ebe6ef", background: "#29232f", border: "rgba(235, 230, 239, 0.15)", feedbackIcon: "#ffffff", sentryLogo: "#ffffff" };

export const getTheme = function getTheme() {
  const obj = _getClientIntegration /* _getClientIntegration */;
  let colorScheme = obj.getColorScheme();
  if ("system" === colorScheme) {
    colorScheme = Appearance.getColorScheme();
  }
  const merged = Object.assign({}, obj);
  let tmpResult = tmp(1133);
  let merged1 = Object.assign(merged, tmpResult.getFeedbackLightTheme());
  const merged2 = Object.assign({}, obj);
  tmpResult = tmp(1133);
  if ("dark" === colorScheme) {
    merged1 = Object.assign(merged2, tmpResult.getFeedbackDarkTheme());
  }
  return merged1;
};
export const LightTheme = obj;
export const DarkTheme = obj;