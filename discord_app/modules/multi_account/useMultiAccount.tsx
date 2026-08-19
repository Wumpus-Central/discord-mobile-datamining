// discord_app/modules/multi_account/useMultiAccount.tsx
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import noop from "../../../_runtime/00019_noop.js";
import mergeGuildAvatar from "../../stores/UserStore.tsx";
import { MultiAccountTokenStatus } from "MultiAccountStore.tsx";

require = fn;
let result = require("obj132").fileFinishedImporting("modules/multi_account/useMultiAccount.tsx");

export const useMultiAccountUsers = function useMultiAccountUsers() {
  let items = [closure_6, closure_5];
  const stateFromStoresObject = initialize.useStateFromStoresObject(items, () => {
    let obj = users;
    users = users.getUsers();
    currentUser = currentUser.getCurrentUser();
    if (null != currentUser) {
      if (!users.some((item, index) => item.id === currentUser.id)) {
        obj = { isLoading: null, multiAccountUsers: null };
        obj[0] = obj.getIsValidatingUsers();
        obj = { id: null, avatar: null, username: null, discriminator: null, tokenStatus: null, pushSyncToken: null };
        ({ id: obj4[0], avatar: obj4[1], username: obj4[2], discriminator: obj4[3] } = currentUser);
        obj[4] = constants.VALID;
        const items = [obj];
        HermesBuiltin.arraySpread(users, 1);
        obj[1] = items;
      }
      return obj;
    }
    obj = { isLoading: obj.getIsValidatingUsers(), multiAccountUsers: users };
    obj1 = { isLoading: obj.getIsValidatingUsers(), multiAccountUsers: users };
  });
  const effect = React.useEffect(() => {
    callback(table[4]).wait(() => {
      const result = callback(table[5]).validateMultiAccountTokens();
    });
  }, []);
  return stateFromStoresObject;
};