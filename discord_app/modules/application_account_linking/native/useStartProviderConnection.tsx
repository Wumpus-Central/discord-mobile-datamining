// discord_app/modules/application_account_linking/native/useStartProviderConnection.tsx
import LinkingDefault from "../../../lib/native/Linking.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../_runtime/metro/00019__.js";

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/application_account_linking/native/useStartProviderConnection.tsx");

export const useStartProviderConnection = function useStartProviderConnection(provider_id) {
  let obj = require("useProviderConnection");
  const providerConnection = obj.useProviderConnection(provider_id);
  const startConnection = providerConnection.startConnection;
  ({ loading, hasConnection, canConnect, account } = providerConnection);
  _require = asyncGeneratorStep(async (arg0, value) => {
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
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_2 = tmp3;
            closure_1 = tmp7;
            closure_129_0 = undefined;
            c5 = 1;
            c6 = 1;
            const obj1 = { value: closure_0(closure_0), done: false };
            return obj1;
          }
        } else if (1 === tmp7) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj2 = { value, done: true };
            return obj2;
          } else {
            closure_129_0 = value;
            if (closure_129_0.success) {
              if (null != closure_129_0.url) {
                c4 = 1;
                let obj4 = LinkingDefault;
                c5 = 3;
                c6 = 1;
                const obj3 = { value: obj4.openURL(closure_129_0.url), done: false };
                return obj3;
              }
            }
            c6 = 3;
            obj4 = { value: { success: false }, done: true };
            return obj4;
          }
        } else if (2 === tmp7) {
          c4 = 0;
          c6 = 3;
          const obj5 = { value: { success: false }, done: true };
          return obj5;
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          c4 = 0;
          c6 = 3;
          obj = { value: { success: true }, done: true };
          return obj;
        }
      } catch (tmp18) {
        closure_3 = tmp18;
        if (tmp4 === c4) {
          c6 = tmp2;
          throw tmp18;
        } else {
          c5 = tmp;
        }
      }
    }
  });
  const items = [startConnection];
  obj = {
    loading,
    hasConnection,
    canConnect,
    startConnection: noop.useCallback(function () {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }, items),
    account,
  };
  return obj;
};
