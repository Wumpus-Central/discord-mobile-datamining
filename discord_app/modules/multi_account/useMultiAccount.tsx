// === Module 15542: useMultiAccountUsers ===

// Module 15542 (useMultiAccountUsers)
import initialize from "initialize" /* 589 */;
import closure_4 from "noop" /* 19 */;
import closure_5 from "mergeGuildAvatar" /* 1922 */;
import closure_6 from "initialize" /* 11982 */;
import { MultiAccountTokenStatus } from "initialize" /* 11982 */;

require = arg1;
let result = require("set").fileFinishedImporting("modules/multi_account/useMultiAccount.tsx");

export const useMultiAccountUsers = function useMultiAccountUsers() {
  let items = [closure_6, closure_5];
  const stateFromStoresObject = initialize.useStateFromStoresObject(items, () => {
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