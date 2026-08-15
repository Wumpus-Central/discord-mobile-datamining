// discord_app/modules/application_account_linking/native/useStartProviderConnection.tsx
import asyncGeneratorStep from "asyncGeneratorStep";
import noop from "noop";
import { useProviderConnection } from "../hooks/useProviderConnection.tsx";

const require = arg1;
const result = require("useProviderConnection").fileFinishedImporting("modules/application_account_linking/native/useStartProviderConnection.tsx");

export const useStartProviderConnection = function useStartProviderConnection(provider_id) {
  let account;
  let canConnect;
  let hasConnection;
  let loading;
  let obj = _useProviderConnection;
  const providerConnection = obj.useProviderConnection(provider_id);
  const startConnection = providerConnection.startConnection;
  _require = startConnection;
  _require = undefined;
  ({ loading, hasConnection, canConnect, account } = providerConnection);
  _require = callback((arg0) => {
    let closure_0 = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
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
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let closure_2 = tmp3;
              let closure_1 = tmp7;
              let lib;
              c5 = 1;
              c6 = 1;
              const obj1 = { value: null, done: false };
              obj1[0] = lib(lib);
              return obj1;
            }
          } else if (1 === tmp7) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj2 = { value: null, done: true };
              obj2[0] = arg1;
              return obj2;
            } else {
              lib = arg1;
              if (lib.success) {
                if (null != lib.url) {
                  let c4 = 1;
                  let obj4 = outer2_1(outer2_2[3]);
                  c5 = 3;
                  c6 = 1;
                  const obj3 = { value: null, done: false };
                  obj3[0] = obj4.openURL(lib.url);
                  return obj3;
                }
              }
              c6 = 3;
              obj4 = { value: null, done: true };
              obj4[0] = { success: false };
              return obj4;
            }
          } else if (2 === tmp7) {
            c4 = 0;
            c6 = 3;
            const obj5 = { value: null, done: true };
            obj5[0] = { success: false };
            return obj5;
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            const obj6 = { value: null, done: true };
            obj6[0] = arg1;
            return obj6;
          } else {
            c4 = 0;
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = { success: true };
            return obj;
          }
        } catch (tmp18) {
          let asyncGeneratorStep = tmp18;
          if (tmp4 === c4) {
            c6 = tmp2;
            throw tmp18;
          } else {
            c5 = tmp;
          }
        }
      }
    })();
  });
  const items = [startConnection];
  obj = {
    loading,
    hasConnection,
    canConnect,
    startConnection: React.useCallback(function() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }, items),
    account
  };
  return obj;
};