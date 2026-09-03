// discord_app/modules/notifications/settings/native/routes/RedesignSettingsNotificationScreen.tsx
import useMountLayoutEffectDefault from "../../../../../hooks/useMountEffect.tsx";
import _modDef14578 from "../../../../settings/native/renderer/SettingLayout.tsx";
import apexExperimentDefault from "../../../../nuf/native/ContextualOptInNudgeHoldoutExperiment.tsx";
import importAllResult from "../../../../../../_runtime/00019_noop.js";
import { initializeAndroidNotificationSettingsStore as closure_4 } from "../../../../user_settings/notifications/native/stores/AndroidNotificationSettingsStore.tsx";
import { jsx } from "../../../../../../_runtime/react/00021_jsxProd.js";

const require = arg1;
let c3 = importAllResult;
const memoResult = importAllResult.memo(() => {
  const tmp = !apexExperimentDefault.useConfig({ location: "SettingsNotificationsScreen" }).inHoldout;
  closure_0 = tmp;
  let items = [tmp];
  const node = importAllResult.useMemo(() => {
    let obj = callback(closure_1_2[5]);
    obj = { sections: null, ListHeaderComponent: null };
    const items = [callback(closure_1_2[3]).buildOverviewCategoriesSection()];
    obj[0] = items;
    let tmp2;
    if (callback) {
      tmp2 = closure_1_1(closure_1_2[6]);
    }
    obj[1] = tmp2;
    return obj.createList(obj);
  }, items);
  useMountLayoutEffectDefault(() => {
    callback2();
  });
  return jsx(_modDef14578, { node });
});
const result = require("set").fileFinishedImporting(
  "modules/notifications/settings/native/routes/RedesignSettingsNotificationScreen.tsx",
);

export default memoResult;
