// === Module 15868: useMultiAccount ===

// Module 15868 (useMultiAccount)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1377 */;
import MultiAccountStore from "MultiAccountStore" /* 12056 */;

require = fn;
const MultiAccountTokenStatus = fn(12056).MultiAccountTokenStatus;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/multi_account/useMultiAccount.tsx");

export const useMultiAccountUsers = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [MultiAccountStore, UserStore];
    const fn = function c() {
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
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const stateFromStoresObject = initialize.useStateFromStoresObject(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function v() {
      DispatcherDefault.wait(() => {
        const result = closure_1_2(closure_1_3[7]).validateMultiAccountTokens();
      });
    };
    const items1 = [];
    cResult[2] = fn2;
    cResult[3] = items1;
    let tmp10 = items1;
    let tmp9 = fn2;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const effect = noop.useEffect(tmp9, tmp10);
  return stateFromStoresObject;
}) : (() => {
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
    DispatcherDefault.wait(() => {
      const result = closure_1_2(closure_1_3[7]).validateMultiAccountTokens();
    });
  }, []);
  return stateFromStoresObject;
});