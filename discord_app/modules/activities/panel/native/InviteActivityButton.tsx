// discord_app/modules/activities/panel/native/InviteActivityButton.tsx
import updateActivities from "updateActivities";
import filterPlayingActivities from "filterPlayingActivities";
import { jsx } from "jsxProd";
import importAllResult from "noop";

const require = arg1;
const memoResult = require("noop").memo(function InviteActivityButton(applicationId) {
  applicationId = applicationId.applicationId;
  let stateFromStores;
  let obj = applicationId(589);
  const items = [updateActivities, filterPlayingActivities];
  const items1 = [applicationId];
  stateFromStores = obj.useStateFromStores(items, () => stateFromStores(outer1_2[8])(outer1_3, outer1_4, applicationId), items1);
  let tmp4 = null;
  if (null != stateFromStores) {
    obj = { onPress: null, icon: null, text: null, accessibilityLabel: null, variant: "secondary-overlay", size: "sm", shrink: true, maxFontSizeMultiplier: 1 };
    obj[0] = function onPress() {
      let obj = stateFromStores(outer1_2[4]);
      obj = { activity: stateFromStores };
      obj.openLazy(applicationId(outer1_2[6])(outer1_2[5], outer1_2.paths), "ActivityInviteSheet-" + stateFromStores.session_id, obj);
    };
    obj[1] = stateFromStores(9783);
    const intl = tmp(1236).intl;
    obj[2] = intl.string(tmp(1236).t["OzOM/q"]);
    const intl2 = tmp(1236).intl;
    obj[3] = intl2.string(tmp(1236).t["OzOM/q"]);
    tmp4 = jsx(tmp(4777).Button, { onPress: null, icon: null, text: null, accessibilityLabel: null, variant: "secondary-overlay", size: "sm", shrink: true, maxFontSizeMultiplier: 1 });
  }
  return tmp4;
});
const result = require("filterPlayingActivities").fileFinishedImporting("modules/activities/panel/native/InviteActivityButton.tsx");

export default memoResult;