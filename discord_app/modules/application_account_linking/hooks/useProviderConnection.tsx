// === Module 6676: useProviderConnection ===

// Module 6676 (useProviderConnection)
import ConnectedAccountsActionCreatorsDefault from "ConnectedAccountsActionCreators" /* 6677 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 5440 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c3, c6, closure_0;

const result = size.fileFinishedImporting("modules/application_account_linking/hooks/useProviderConnection.tsx");

export const useProviderConnection = function useProviderConnection(arg0) {
  let fetching;
  _require = arg0;
  let obj = require("get initialized");
  const items = [ConnectedAccountsStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let account = null;
    if (null != closure_0) {
      account = ConnectedAccountsStore.getAccount(null, tmp);
    }
    return account;
  });
  let obj2 = require("get initialized");
  const items1 = [ConnectedAccountsStore];
  let tmp3 = null != stateFromStores;
  const stateFromStores1 = obj2.useStateFromStores(items1, () => fetching.isFetching());
  if (tmp3) {
    tmp3 = !stateFromStores.revoked;
  }
  const useCallback = react.useCallback;
  _require = _asyncToGenerator(async (arg0) => {
    closure_0 = arg0;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj = { value, done: true };
        return obj;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c5;
      try {
        let authorize;
        c6 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj2 = { value, done: true };
            return obj2;
          } else {
            closure_0 = undefined;
            if (null == closure_0) {
              c6 = 3;
              const obj3 = { value: { success: false }, done: true };
              return obj3;
            } else {
              c5 = 1;
              authorize = ConnectedAccountsActionCreatorsDefault.authorize;
              let _location = tmp21;
              if (closure_0 == null) {
                _location = "Account Linking";
              }
              const obj4 = { location: _location };
              authorize = authorize(tmp22, obj4);
              c3 = 2;
              c6 = 1;
              const obj5 = { value: authorize, done: false };
              return obj5;
            }
          }
        } else if (1 === tmp3) {
          c5 = 0;
          c6 = 3;
          const obj6 = { value: { success: false }, done: true };
          return obj6;
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          c6 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          closure_0 = value;
          authorize = closure_0.body;
          let url;
          if (authorize != null) {
            url = authorize.url;
          }
          if (null != url) {
            const obj8 = { success: true, url: closure_0.body.url };
            authorize = obj8;
          } else {
            authorize = { success: false };
          }
          c5 = 0;
          c6 = 3;
          const obj9 = { value: authorize, done: true };
          return obj9;
        }
      } catch (tmp14) {
        let closure_4 = tmp14;
        if (0 === c5) {
          c6 = 3;
          throw tmp14;
        } else {
          c3 = 1;
        }
      }
    }
  });
  const items2 = [arg0];
  let obj3 = {
    loading: stateFromStores1,
    hasConnection: tmp3,
    canConnect: null != arg0,
    startConnection: useCallback(function() {
      return closure_0(...arguments);
    }, items2),
    account: stateFromStores
  };
  return obj3;
};