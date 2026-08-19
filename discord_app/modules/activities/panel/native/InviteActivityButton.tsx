// === Module 16245: ? ===

// Module 16245
import updateActivities from "updateActivities" /* 7251 */;
import filterPlayingActivities from "filterPlayingActivities" /* 7250 */;
import { jsx } from "jsxProd" /* 21 */;
import importAllResult from "noop" /* 19 */;

const require = fn;
const memoResult = importAllResult.memo(function InviteActivityButton(applicationId) {
  applicationId = applicationId.applicationId;
  let obj = applicationId(589);
  const items = [closure_3, closure_4];
  const items1 = [applicationId];
  const stateFromStores = obj.useStateFromStores(items, () => stateFromStores(dependencyMap[8])(closure_1_3, closure_1_4, applicationId), items1);
  let tmp4 = null;
  if (null != stateFromStores) {
    obj = { onPress: null, icon: null, text: null, accessibilityLabel: null, variant: "secondary-overlay", size: "sm", shrink: true, maxFontSizeMultiplier: 1 };
    obj[0] = function onPress() {
      stateFromStores(dependencyMap[4]);
      const obj = { activity: stateFromStores };
      obj.openLazy(applicationId(dependencyMap[6])(dependencyMap[5], dependencyMap.paths), "ActivityInviteSheet-" + stateFromStores.session_id, obj);
    };
    obj[1] = stateFromStores(9992);
    const intl = tmp(1236).intl;
    obj[2] = intl.string(tmp(1236).t["OzOM/q"]);
    const intl2 = tmp(1236).intl;
    obj[3] = intl2.string(tmp(1236).t["OzOM/q"]);
    tmp4 = jsx(tmp(4745).Button, { onPress: null, icon: null, text: null, accessibilityLabel: null, variant: "secondary-overlay", size: "sm", shrink: true, maxFontSizeMultiplier: 1 });
  }
  return tmp4;
});
const result = require("obj132").fileFinishedImporting("modules/activities/panel/native/InviteActivityButton.tsx");

export default memoResult;