// discord_app/modules/app_dms/useIsAppDM.tsx
import mergeGuildAvatar from "../../stores/UserStore.tsx";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/app_dms/useIsAppDM.tsx");

export default function useIsAppDM(arg0) {
  const _require = arg0;
  const items = [closure_2];
  return require("../../../discord_common/js/packages/flux/useStateFromStores.tsx").useStateFromStores(items, () => {
    let tmp = null != dM && dM.isDM();
    if (tmp) {
      tmp = 1 === dM.recipients.length;
    }
    if (tmp) {
      const user = closure_1_2.getUser(dM.recipients[0]);
      let bot;
      if (user != null) {
        bot = user.bot;
      }
      tmp = true === bot;
    }
    return tmp;
  });
};