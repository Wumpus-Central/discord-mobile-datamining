// === Module 14795: PremiumPlanSelectSettingScreen ===

// Module 14795 (PremiumPlanSelectSettingScreen)
import c from "c" /* 576 */;
import useSettingNavigationRoute from "useSettingNavigationRoute" /* 6490 */;
import PremiumPlanSelectDefault from "PremiumPlanSelect" /* 13345 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumPlanSelectSettingScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  const settingNavigationRoute = useSettingNavigationRoute.useSettingNavigationRoute();
  if (cResult[0] !== settingNavigationRoute.params) {
    const obj3 = {};
    const merged = Object.assign(settingNavigationRoute.params);
    const tmp10 = jsx(PremiumPlanSelectDefault, {});
    cResult[0] = settingNavigationRoute.params;
    cResult[1] = tmp10;
    let tmp4 = tmp10;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : (() => {
  const settingNavigationRoute = useSettingNavigationRoute.useSettingNavigationRoute();
  const obj2 = {};
  const merged = Object.assign(settingNavigationRoute.params);
  return jsx(PremiumPlanSelectDefault, {});
});