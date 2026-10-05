// === Module 1075: ? ===

// Module 1075
import react_native from "react-native" /* 17 */;
import MOBILE_FEEDBACK_INTEGRATION_NAME from "MOBILE_FEEDBACK_INTEGRATION_NAME" /* 1009 */;

const Appearance = react_native.Appearance;
const LightTheme = { accentBackground: "rgba(88, 74, 192, 1)", accentForeground: "#ffffff", foreground: "#2b2233", background: "#ffffff", border: "rgba(41, 35, 47, 0.13)", feedbackIcon: "rgba(54, 45, 89, 1)", sentryLogo: "rgba(54, 45, 89, 1)" };
let obj2 = { accentBackground: "rgba(88, 74, 192, 1)", accentForeground: "#ffffff", foreground: "#ebe6ef", background: "#29232f", border: "rgba(235, 230, 239, 0.15)", feedbackIcon: "#ffffff", sentryLogo: "#ffffff" };

export const getTheme = function getTheme() {
  const obj = MOBILE_FEEDBACK_INTEGRATION_NAME;
  let colorScheme = obj.getColorScheme();
  if ("system" === colorScheme) {
    colorScheme = Appearance.getColorScheme();
  }
  const merged = Object.assign({}, obj);
  const tmpResult = MOBILE_FEEDBACK_INTEGRATION_NAME;
  obj2 = assign(merged, tmpResult.getFeedbackLightTheme());
  const assign2 = Object.assign;
  const merged1 = Object.assign({}, obj2);
  const tmpResult2 = MOBILE_FEEDBACK_INTEGRATION_NAME;
  if ("dark" === colorScheme) {
    obj2 = assign2(merged1, tmpResult2.getFeedbackDarkTheme());
  }
  return obj2;
};
export { LightTheme };
export const DarkTheme = obj2;