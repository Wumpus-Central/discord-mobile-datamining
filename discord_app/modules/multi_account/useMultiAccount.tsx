// === Module 18329: useMultiAccount ===

// Module 18329 (useMultiAccount)
import initialize from "initialize" /* 504 */;
import MultiAccountActionCreatorsAll from "MultiAccountActionCreators" /* 14215 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1385 */;
import MultiAccountStore from "MultiAccountStore" /* 14211 */;

require = fn;
const MultiAccountTokenStatus = fn(14211).MultiAccountTokenStatus;
const size = fn(2);
let result = size.fileFinishedImporting("modules/multi_account/useMultiAccount.tsx");

export function useMultiAccountUsers() {
  items = [MultiAccountStore, UserStore];
  const stateFromStoresObject = initialize.useStateFromStoresObject(items, () => {
    users = users.getUsers();
    currentUser = currentUser.getCurrentUser();
    if (null != currentUser) {
      if (!users.some((id) => id.id === currentUser.id)) {
        let obj2 = { isLoading: obj.getIsValidatingUsers(), multiAccountUsers: null };
        const obj3 = { id: null, avatar: null, username: null, discriminator: null, tokenStatus: null, pushSyncToken: null };
        ({ id: obj4.id, avatar: obj4.avatar, username: obj4.username, discriminator: obj4.discriminator } = currentUser);
        obj3.tokenStatus = constants.VALID;
        items = [obj3];
        HermesBuiltin.arraySpread(users, 1);
        obj2.multiAccountUsers = items;
      }
      return obj2;
    }
    obj2 = { isLoading: users.getIsValidatingUsers(), multiAccountUsers: users };
    const obj5 = { isLoading: users.getIsValidatingUsers(), multiAccountUsers: users };
  });
  const effect = noop.useEffect(() => {
    const result = MultiAccountActionCreatorsAll.validateMultiAccountTokens();
  }, []);
  return stateFromStoresObject;
}