// discord_app/modules/application_account_linking/hooks/useProviderConnection.tsx
import set from "set";
import noop from "noop";
import closure_5 from "set";
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/application_account_linking/hooks/useProviderConnection.tsx");

export const useProviderConnection = function useProviderConnection(provider_id) {
  let _require = provider_id;
  let obj = _initialize;
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let account = null;
    if (null != closure_0) {
      account = outer1_5.getAccount(null, tmp);
    }
    return account;
  });
  const items1 = [closure_5];
  let tmp3 = null != stateFromStores;
  const stateFromStores1 = _initialize.useStateFromStores(items1, () => fetching.isFetching());
  if (tmp3) {
    tmp3 = !stateFromStores.revoked;
  }
  _require = undefined;
  _require = callback((arg0) => {
    let closure_0 = arg0;
    let c3 = 0;
    let c6 = 0;
    let c5 = 0;
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
          return { value: "T", done: null };
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
              let closure_2 = tmp4;
              let closure_0;
              if (null == closure_0) {
                c6 = 3;
                const obj1 = { value: null, done: true };
                obj1[0] = { success: false };
                return obj1;
              } else {
                let c5 = 1;
                let obj4 = outer2_1(outer2_2[4]);
                let c1 = tmp29;
                if (tmp29 == null) {
                  c1 = "Account Linking";
                }
                const obj2 = { location: null };
                obj2[0] = c1;
                c3 = 2;
                c6 = 1;
                const obj3 = { value: null, done: false };
                obj3[0] = obj4.authorize(tmp30, obj2);
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
            if (!closure_0.ok) {
              obj = { success: false };
              c5 = 0;
              c6 = 3;
            } else {
              const body = closure_0.body;
              let url;
              if (body != null) {
                url = body.url;
              }
            }
            const obj6 = { success: true, url: null };
            obj6[1] = closure_0.body.url;
          }
        } catch (tmp18) {
          let noop = tmp18;
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