// === Module 15917: ? ===

// Module 15917
import useMountLayoutEffectDefault from "useMountLayoutEffect" /* 4992 */;
import _modDef14689 from "module_14689" /* 14689 */;
import apexExperimentDefault from "apexExperiment" /* 15481 */;
import importAllResult from "noop" /* 19 */;
import { initializeAndroidNotificationSettingsStore as closure_4 } from "_initializeAndroidNotificationSettingsStore" /* 15480 */;
import { jsx } from "jsxProd" /* 21 */;

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
  return jsx(_modDef14689, { node });
});
const result = require("set").fileFinishedImporting("modules/notifications/settings/native/routes/RedesignSettingsNotificationScreen.tsx");

export default memoResult;