// discord_app/modules/activities/panel/native/InviteActivityButton.tsx
import closure_3 from "../../../../stores/LocalActivityStore.tsx";
import closure_4 from "../../../../stores/SelfPresenceStore.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import importAllResult from "../../../../../_runtime/00019_noop.js";

const require = arg1;
const memoResult = importAllResult.memo(function InviteActivityButton(applicationId) {
  applicationId = applicationId.applicationId;
  let stateFromStores;
  let obj = applicationId(589);
  const items = [closure_3, closure_4];
  const items1 = [applicationId];
  stateFromStores = obj.useStateFromStores(
    items,
    () => stateFromStores(closure_1_2[8])(closure_1_3, closure_1_4, applicationId),
    items1,
  );
  let tmp4 = null;
  if (null != stateFromStores) {
    obj = {
      onPress: null,
      icon: null,
      text: null,
      accessibilityLabel: null,
      variant: "secondary-overlay",
      size: "sm",
      shrink: true,
      maxFontSizeMultiplier: 1,
    };
    obj[0] = function onPress() {
      let obj = stateFromStores(closure_1_2[4]);
      obj = { activity: stateFromStores };
      obj.openLazy(
        applicationId(closure_1_2[6])(closure_1_2[5], closure_1_2.paths),
        "ActivityInviteSheet-" + stateFromStores.session_id,
        obj,
      );
    };
    obj[1] = stateFromStores(10114);
    const intl = tmp(1236).intl;
    obj[2] = intl.string(tmp(1236).t["OzOM/q"]);
    const intl2 = tmp(1236).intl;
    obj[3] = intl2.string(tmp(1236).t["OzOM/q"]);
    tmp4 = jsx(tmp(4928).Button, {
      onPress: null,
      icon: null,
      text: null,
      accessibilityLabel: null,
      variant: "secondary-overlay",
      size: "sm",
      shrink: true,
      maxFontSizeMultiplier: 1,
    });
  }
  return tmp4;
});
const result = require("set").fileFinishedImporting("modules/activities/panel/native/InviteActivityButton.tsx");

export default memoResult;
