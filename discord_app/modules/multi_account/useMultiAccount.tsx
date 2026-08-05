import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";
// discord_app/modules/multi_account/useMultiAccount.tsx
import noop from "noop";
import mergeGuildAvatar from "mergeGuildAvatar";
import initialize from "initialize";
import { MultiAccountTokenStatus } from "initialize";

const require = arg1;
let result = require("initialize").fileFinishedImporting("modules/multi_account/useMultiAccount.tsx");

export const useMultiAccountUsers = function useMultiAccountUsers() {
  let items = [initialize, mergeGuildAvatar];
  const stateFromStoresObject = initialize /* initialize */.useStateFromStoresObject(items, () => {
    let obj = users;
    users = users.getUsers();
    currentUser = currentUser.getCurrentUser();
    if (null != currentUser) {
      if (!users.some((id) => id.id === currentUser.id)) {
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
  });
  const effect = React.useEffect(() => {
    callback(table[4]).wait(() => {
      const result = callback(table[5]).validateMultiAccountTokens();
    });
  }, []);
  return stateFromStoresObject;
};