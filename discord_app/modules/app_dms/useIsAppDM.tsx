// discord_app/modules/app_dms/useIsAppDM.tsx
import UserStore from "../../stores/UserStore.tsx";

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_dms/useIsAppDM.tsx");

export default function useIsAppDM(channel) {
  _require = channel;
  const items = [UserStore];
  return require("useStateFromStores").useStateFromStores(items, () => {
    let tmp = null != dM && dM.isDM();
    if (tmp) {
      tmp = 1 === dM.recipients.length;
    }
    if (tmp) {
      const user = UserStore.getUser(dM.recipients[0]);
      let bot;
      if (user != null) {
        bot = user.bot;
      }
      tmp = true === bot;
    }
    return tmp;
  });
}
