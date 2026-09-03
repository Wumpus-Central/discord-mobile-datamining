// === Module 5981: useProviderConnection ===

// Module 5981 (useProviderConnection)
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "noop" /* 19 */;
import closure_5 from "set" /* 5234 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/application_account_linking/hooks/useProviderConnection.tsx");

export const useProviderConnection = function useProviderConnection(provider_id) {
  let _require = provider_id;
  let obj = _require(586);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let account = null;
    if (null != closure_0) {
      account = closure_1_5.getAccount(null, tmp);
    }
    return account;
  });
  const items1 = [closure_5];
  let tmp3 = null != stateFromStores;
  const stateFromStores1 = _require(586).useStateFromStores(items1, () => fetching.isFetching());
  if (tmp3) {
    tmp3 = !stateFromStores.revoked;
  }
  _require = undefined;
  _require = callback((arg0) => {
    closure_0 = arg0;
    c3 = 0;
    c6 = 0;
    c5 = 0;
    return (function*(arg0) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
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
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_2 = tmp4;
              closure_0 = undefined;
              if (null == closure_0) {
                c6 = 3;
                obj1 = { value: null, done: true };
                obj1[0] = { success: false };
                return obj1;
              } else {
                c5 = 1;
                let obj4 = closure_2_1(closure_2_2[4]);
                c1 = tmp27;
                if (tmp27 == null) {
                  c1 = "Account Linking";
                }
                const obj2 = { location: null };
                obj2[0] = c1;
                c3 = 2;
                c6 = 1;
                const obj3 = { value: null, done: false };
                obj3[0] = obj4.authorize(tmp28, obj2);
                return obj3;
              }
            }
          } else if (1 === tmp7) {
            c5 = 0;
            c6 = 3;
            obj4 = { value: null, done: true };
            obj4[0] = { success: false };
            return obj4;
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 0;
            c6 = 3;
            const obj5 = { value: null, done: true };
            obj5[0] = arg1;
            return obj5;
          } else {
            closure_0 = arg1;
            const body = closure_0.body;
            let url;
            if (body != null) {
              url = body.url;
            }
            if (null != url) {
              const obj6 = { success: true, url: null };
              obj6[1] = closure_0.body.url;
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
    })();
  });
  const items2 = [provider_id];
  obj = {
    loading: stateFromStores1,
    hasConnection: tmp3,
    canConnect: null != provider_id,
    startConnection: React.useCallback(function() {
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