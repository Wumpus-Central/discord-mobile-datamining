// === Module 17981: useMultiAccount ===

// Module 17981 (useMultiAccount)
import initialize from "initialize" /* 504 */;
import MultiAccountActionCreatorsAll from "MultiAccountActionCreators" /* 13966 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1383 */;
import MultiAccountStore from "MultiAccountStore" /* 13962 */;

require = fn;
const MultiAccountTokenStatus = fn(13962).MultiAccountTokenStatus;
const size = fn(2);
let result = size.fileFinishedImporting("modules/multi_account/useMultiAccount.tsx");

export function useMultiAccountUsers() {
  let items = [MultiAccountStore, UserStore];
  const stateFromStoresObject = initialize.useStateFromStoresObject(items, () => {
    users = users.getUsers();
    currentUser = currentUser.getCurrentUser();
    if (null != currentUser) {
      if (!users.some((id) => id.id === currentUser.id)) {
        let obj2 = { isLoading: obj.getIsValidatingUsers(), multiAccountUsers: null };
        const obj3 = { id: null, avatar: null, username: null, discriminator: null, tokenStatus: null, pushSyncToken: null };
        ({ id: obj4.id, avatar: obj4.avatar, username: obj4.username, discriminator: obj4.discriminator } = currentUser);
        obj3.tokenStatus = constants.VALID;
        const items = [obj3];
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