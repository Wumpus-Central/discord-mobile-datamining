// discord_app/modules/applications/getApplicationFromBotUserId.tsx
import createUserWidgetFromServer from "createUserWidgetFromServer";
import { EMPTY_STRING_SNOWFLAKE_ID } from "ME";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/applications/getApplicationFromBotUserId.tsx");

export default function useGetApplicationFromBotUserId(arg0) {
  const _require = arg0;
  const items = [createUserWidgetFromServer];
  const stateFromStores = _require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => {
    let tmp = closure_0;
    let tmp2;
    if (null !== closure_0) {
      if (tmp == null) {
        tmp = outer1_3;
      }
      const userProfile = outer1_2.getUserProfile(tmp);
      let application;
      if (userProfile != null) {
        application = userProfile.application;
      }
      tmp2 = application;
    }
    return tmp2;
  });
  return stateFromStores;
};