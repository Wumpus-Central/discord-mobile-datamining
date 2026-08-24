// discord_app/modules/app_dms/useIsAppDM.tsx
import closure_2 from "../../stores/UserStore.tsx";
import { defaultAreStatesEqual } from "../../../discord_common/js/packages/flux/useStateFromStores.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/app_dms/useIsAppDM.tsx");

export default function useIsAppDM(arg0) {
  const _require = arg0;
  const items = [closure_2];
  return _defaultAreStatesEqual.useStateFromStores(items, () => {
    let tmp = null != closure_0 && obj.isDM();
    if (tmp) {
      tmp = 1 === obj.recipients.length;
    }
    if (tmp) {
      const user = closure_1_2.getUser(obj.recipients[0]);
      let bot;
      if (user != null) {
        bot = user.bot;
      }
      tmp = true === bot;
    }
    return tmp;
  });
};