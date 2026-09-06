// === Module 7181: useProviderConnection ===

// Module 7181 (useProviderConnection)
import ConnectedAccountsActionCreatorsDefault from "ConnectedAccountsActionCreators" /* 5406 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 5281 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/application_account_linking/hooks/useProviderConnection.tsx");

export const useProviderConnection = function useProviderConnection(provider_id) {
  _require = provider_id;
  let obj = require("initialize");
  const items = [ConnectedAccountsStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let account = null;
    if (null != closure_0) {
      account = ConnectedAccountsStore.getAccount(null, tmp);
    }
    return account;
  });
  const items1 = [ConnectedAccountsStore];
  let tmp3 = null != stateFromStores;
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => fetching.isFetching());
  if (tmp3) {
    tmp3 = !stateFromStores.revoked;
  }
  _require = asyncGeneratorStep(async (arg0) => {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c6 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_2 = tmp4;
            closure_130_0 = undefined;
            if (null == closure_0) {
              c6 = 3;
              const obj1 = { value: { success: false }, done: true };
              return obj1;
            } else {
              c5 = 1;
              let obj4 = ConnectedAccountsActionCreatorsDefault;
              let _location = closure_0;
              if (closure_0 == null) {
                _location = "Account Linking";
              }
              const obj2 = { location: _location };
              c3 = 2;
              c6 = 1;
              const obj3 = { value: obj4.authorize(tmp27, obj2), done: false };
              return obj3;
            }
          }
        } else if (1 === tmp7) {
          c5 = 0;
          c6 = 3;
          obj4 = { value: { success: false }, done: true };
          return obj4;
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          c6 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          closure_130_0 = value;
          const body = closure_130_0.body;
          let url;
          if (body != null) {
            url = body.url;
          }
          if (null != url) {
            const obj6 = { success: true, url: closure_130_0.body.url };
          } else {
            obj = { success: false };
          }
          c5 = 0;
          c6 = 3;
        }
      } catch (tmp18) {
        closure_4 = tmp18;
        if (tmp3 === c5) {
          c6 = tmp2;
          throw tmp18;
        } else {
          c3 = tmp;
        }
      }
    }
  });
  const items2 = [provider_id];
  obj = {
    loading: stateFromStores1,
    hasConnection: tmp3,
    canConnect: null != provider_id,
    startConnection: noop.useCallback(function() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }, items2),
    account: stateFromStores
  };
  return obj;
};