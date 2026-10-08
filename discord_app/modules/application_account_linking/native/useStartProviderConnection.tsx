// === Module 6859: useStartProviderConnection ===

// Module 6859 (useStartProviderConnection)
import LinkingDefault from "Linking" /* 4763 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/application_account_linking/native/useStartProviderConnection.tsx");

export const useStartProviderConnection = ReactCompilerGating.isReactCompilerEnabled() ? (function useStartProviderConnection(arg0) {
  const cResult = require("c").c(8);
  let obj = require("c");
  const providerConnection = require("useProviderConnection").useProviderConnection(arg0);
  ({ loading, hasConnection, canConnect, startConnection } = providerConnection);
  _require = startConnection;
  const account = providerConnection.account;
  if (cResult[0] !== startConnection) {
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
          return { value: "IconComponent", done: null };
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
    function t0() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    cResult[0] = startConnection;
    cResult[1] = t0;
    let tmp3 = t0;
  } else {
    tmp3 = cResult[1];
  }
  if (cResult[2] === account) {
    if (cResult[3] === canConnect) {
      if (cResult[4] === hasConnection) {
        if (cResult[5] === loading) {
          if (cResult[6] === tmp3) {
            let tmp5 = cResult[7];
          }
          return tmp5;
        }
      }
    }
  }
  let obj3 = { loading, hasConnection, canConnect, startConnection: tmp3, account };
  cResult[2] = account;
  cResult[3] = canConnect;
  cResult[4] = hasConnection;
  cResult[5] = loading;
  cResult[6] = tmp3;
  cResult[7] = obj3;
  tmp5 = obj3;
  let obj2 = require("useProviderConnection");
}) : (function useStartProviderConnection(arg0) {
  const providerConnection = require("useProviderConnection").useProviderConnection(arg0);
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
        return { value: "IconComponent", done: null };
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
});