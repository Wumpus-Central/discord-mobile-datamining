// === Module 12145: useIsAppDM ===

// Module 12145 (useIsAppDM)
import UserStore from "UserStore" /* 1371 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_dms/useIsAppDM.tsx");

export default function useIsAppDM(arg0) {
  _require = arg0;
  const items = [UserStore];
  return require("useStateFromStores").useStateFromStores(items, () => {
    let tmp = null != closure_0 && obj.isDM();
    if (tmp) {
      tmp = 1 === obj.recipients.length;
    }
    if (tmp) {
      const user = UserStore.getUser(obj.recipients[0]);
      let bot;
      if (user != null) {
        bot = user.bot;
      }
      tmp = true === bot;
    }
    return tmp;
  });
};