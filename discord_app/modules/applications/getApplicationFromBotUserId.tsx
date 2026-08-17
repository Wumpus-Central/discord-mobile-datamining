// discord_app/modules/applications/getApplicationFromBotUserId.tsx
import closure_2 from "createUserWidgetFromServer" /* 5365 */;
import { EMPTY_STRING_SNOWFLAKE_ID } from "ME" /* 676 */;
import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/applications/getApplicationFromBotUserId.tsx");

export default function useGetApplicationFromBotUserId(arg0) {
  const _require = arg0;
  const items = [closure_2];
  const stateFromStores = _initialize.useStateFromStores(items, () => {
    let tmp = closure_0;
    let tmp2;
    if (null !== closure_0) {
      if (tmp == null) {
        tmp = closure_1_3;
      }
      const userProfile = closure_1_2.getUserProfile(tmp);
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