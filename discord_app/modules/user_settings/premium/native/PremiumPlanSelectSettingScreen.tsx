// discord_app/modules/user_settings/premium/native/PremiumPlanSelectSettingScreen.tsx
import c from "../../../../../_runtime/00576_c.js";
import useSettingNavigationRoute from "../../core/native/useSettingNavigationRoute.tsx";
import PremiumPlanSelectDefault from "../../../premium/native/PremiumPlanSelect.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumPlanSelectSettingScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function PremiumPlanSelectSettingScreen() {
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
    }
  : function PremiumPlanSelectSettingScreen() {
      const settingNavigationRoute = useSettingNavigationRoute.useSettingNavigationRoute();
      const obj2 = {};
      const merged = Object.assign(settingNavigationRoute.params);
      return jsx(PremiumPlanSelectDefault, {});
    };
