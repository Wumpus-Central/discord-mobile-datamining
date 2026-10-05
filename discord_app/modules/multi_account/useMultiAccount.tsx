// === Module 15872: useMultiAccount ===

// Module 15872 (useMultiAccount)
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import MultiAccountStore2 from "MultiAccountStore" /* 12056 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1377 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const MultiAccountStore = MultiAccountStore2;
let currentUser, users;

const MultiAccountTokenStatus = MultiAccountStore2.MultiAccountTokenStatus;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp10;
  let tmp4;
  let tmp5;
  let tmp9;
  let obj = react2;
  const cResult = obj.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [MultiAccountStore, UserStore];
    const fn = function c() {
      let items;
      users = users.getUsers();
      currentUser = currentUser.getCurrentUser();
      if (null != currentUser) {
        let obj2;
        if (!users.some((id) => id.id === currentUser.id)) {
          obj2 = { isLoading: users.getIsValidatingUsers(), multiAccountUsers: items };
          const obj3 = { id: null, avatar: null, username: null, discriminator: null, tokenStatus: constants.VALID, pushSyncToken: null };
          ({ id: obj4.id, avatar: obj4.avatar, username: obj4.username, discriminator: obj4.discriminator } = currentUser);
          items = [obj3];
          HermesBuiltin.arraySpread(items, users, 1);
        }
        return obj2;
      }
      obj2 = { isLoading: users.getIsValidatingUsers(), multiAccountUsers: users };
      ({ isLoading: users.getIsValidatingUsers(), multiAccountUsers: users });
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function v() {
      let obj = DispatcherDefault;
      obj.wait(() => {
        const obj = closure_1_2(closure_1_3[7]);
        const result = obj.validateMultiAccountTokens();
      });
    };
    const items1 = [];
    cResult[2] = fn2;
    cResult[3] = items1;
    tmp10 = items1;
    tmp9 = fn2;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const effect = react.useEffect(tmp9, tmp10);
  return stateFromStoresObject;
}) : (() => {
  let obj = get_initialized;
  let items = [MultiAccountStore, UserStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let items;
    users = users.getUsers();
    currentUser = currentUser.getCurrentUser();
    if (null != currentUser) {
      let obj2;
      if (!users.some((id) => id.id === currentUser.id)) {
        obj2 = { isLoading: users.getIsValidatingUsers(), multiAccountUsers: items };
        const obj3 = { id: null, avatar: null, username: null, discriminator: null, tokenStatus: constants.VALID, pushSyncToken: null };
        ({ id: obj4.id, avatar: obj4.avatar, username: obj4.username, discriminator: obj4.discriminator } = currentUser);
        items = [obj3];
        HermesBuiltin.arraySpread(items, users, 1);
      }
      return obj2;
    }
    obj2 = { isLoading: users.getIsValidatingUsers(), multiAccountUsers: users };
    ({ isLoading: users.getIsValidatingUsers(), multiAccountUsers: users });
  });
  const effect = react.useEffect(() => {
    let obj = DispatcherDefault;
    obj.wait(() => {
      const obj = closure_1_2(closure_1_3[7]);
      const result = obj.validateMultiAccountTokens();
    });
  }, []);
  return stateFromStoresObject;
});
let result = size.fileFinishedImporting("modules/multi_account/useMultiAccount.tsx");

export const useMultiAccountUsers = tmp2;