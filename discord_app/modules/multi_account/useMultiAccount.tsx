// === Module 15951: useMultiAccount ===

// Module 15951 (useMultiAccount)
import initialize from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;
import MultiAccountStore from "MultiAccountStore" /* 12413 */;

require = fn;
const MultiAccountTokenStatus = fn(12413).MultiAccountTokenStatus;
const size = fn(2);
let result = size.fileFinishedImporting("modules/multi_account/useMultiAccount.tsx");

export const useMultiAccountUsers = function useMultiAccountUsers() {
  let items = [MultiAccountStore, UserStore];
  const stateFromStoresObject = initialize.useStateFromStoresObject(items, () => {
    let obj = users;
    users = users.getUsers();
    currentUser = currentUser.getCurrentUser();
    if (null != currentUser) {
      if (!users.some((id) => id.id === currentUser.id)) {
        obj = { isLoading: null, multiAccountUsers: null };
        obj.isLoading = obj.getIsValidatingUsers();
        obj = { id: null, avatar: null, username: null, discriminator: null, tokenStatus: null, pushSyncToken: null };
        ({ id: obj4.id, avatar: obj4.avatar, username: obj4.username, discriminator: obj4.discriminator } = currentUser);
        obj.tokenStatus = constants.VALID;
        const items = [obj];
        HermesBuiltin.arraySpread(users, 1);
        obj.multiAccountUsers = items;
      }
      return obj;
    }
    obj = { isLoading: obj.getIsValidatingUsers(), multiAccountUsers: users };
    const obj1 = { isLoading: obj.getIsValidatingUsers(), multiAccountUsers: users };
  });
  const effect = noop.useEffect(() => {
    DispatcherDefault.wait(() => {
      const result = closure_1_2(closure_1_3[5]).validateMultiAccountTokens();
    });
  }, []);
  return stateFromStoresObject;
};