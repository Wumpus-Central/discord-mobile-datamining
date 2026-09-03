// === Module 15759: ? ===

// Module 15759
import useMountLayoutEffectDefault from "useMountLayoutEffect" /* 4946 */;
import _modDef14578 from "module_14578" /* 14578 */;
import apexExperimentDefault from "apexExperiment" /* 15323 */;
import importAllResult from "noop" /* 19 */;
import { initializeAndroidNotificationSettingsStore as closure_4 } from "_initializeAndroidNotificationSettingsStore" /* 15322 */;
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
  return jsx(_modDef14578, { node });
});
const result = require("set").fileFinishedImporting("modules/notifications/settings/native/routes/RedesignSettingsNotificationScreen.tsx");

export default memoResult;