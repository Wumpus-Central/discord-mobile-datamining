// === Module 6601: useStartProviderConnection ===

// Module 6601 (useStartProviderConnection)
import LinkingDefault from "Linking" /* 4525 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/application_account_linking/native/useStartProviderConnection.tsx");

export const useStartProviderConnection = function useStartProviderConnection(provider_id) {
  const providerConnection = require("useProviderConnection").useProviderConnection(provider_id);
  const startConnection = providerConnection.startConnection;
  ({ loading, hasConnection, canConnect, account } = providerConnection);
  _require = asyncGeneratorStep(async (arg0) => {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
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
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_2 = tmp3;
            closure_1 = tmp7;
            closure_129_0 = undefined;
            c5 = 1;
            c6 = 1;
            const obj4 = { value: closure_0(closure_0), done: false };
            return obj4;
          }
        } else if (1 === tmp7) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            closure_129_0 = value;
            if (closure_129_0.success) {
              if (null != closure_129_0.url) {
                c4 = 1;
                c5 = 3;
                c6 = 1;
                const obj7 = { value: LinkingDefault.openURL(closure_129_0.url), done: false };
                return obj7;
              }
            }
            c6 = 3;
            const obj8 = { value: { success: false }, done: true };
            return obj8;
          }
        } else if (2 === tmp7) {
          c4 = 0;
          c6 = 3;
          const obj9 = { value: { success: false }, done: true };
          return obj9;
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          const obj10 = { value, done: true };
          return obj10;
        } else {
          c4 = 0;
          c6 = 3;
          const obj = { value: { success: true }, done: true };
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
  let obj = require("useProviderConnection");
  return {
    loading,
    hasConnection,
    canConnect,
    startConnection: noop.useCallback(function() {
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
};