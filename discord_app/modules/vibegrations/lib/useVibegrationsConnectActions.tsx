// === Module 16282: useVibegrationsConnectActions ===

// Module 16282 (useVibegrationsConnectActions)
import vibegrationsExternalConnections from "vibegrationsExternalConnections" /* 12614 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_6 = fn(12607).requestExternalAuthorizeUrl;
const set = new Set();
const size = fn(2);
let result = size.fileFinishedImporting("modules/vibegrations/lib/useVibegrationsConnectActions.tsx");

export const useVibegrationsConnectActions = function useVibegrationsConnectActions(projectId, presentError) {
  [tmp2, dependencyMap] = callback(noop.useState(set), 2);
  noop.useRef(set);
  callback = noop.useCallback((arg0) => {
    ref.current = vibegrationsExternalConnections.endExternalAuthorization(ref.current, arg0);
    dependencyMap(ref.current);
  }, []);
  const items = [presentError, projectId, callback];
  const tmp = callback(noop.useState(set), 2);
  return {
    pending: tmp2,
    connect: noop.useCallback((type) => {
      projectId = type;
      closure_1 = async function _startAuthorization() {
        if (c3 === 2) {
          c3 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp4 === 3) {
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
            c3 = 2;
            if (0 === c2) {
              if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 3;
                const obj4 = { value, done: true };
                return obj4;
              } else {
                closure_1 = tmp5;
                closure_0 = tmp2;
                closure_128_0 = undefined;
                c2 = 1;
                c3 = 1;
                const obj5 = { value: closure_2_6(closure_0, type.type), done: false };
                return obj5;
              }
            } else if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              closure_128_0 = value;
              callback(closure_129_0.type);
              if ("url" === closure_128_0.type) {
                const obj7 = { href: closure_128_0.url, trusted: false };
                type(7810).handleClick(obj7);
                c3 = 3;
                const obj = type(7810);
              }
              if ("setup" === obj3.externalAuthErrorCopy(closure_128_0.error)) {
                const intl2 = type(1115).intl;
                let stringResult = intl2.string(presentError(3714).avu1u4);
              } else {
                const intl = type(1115).intl;
                stringResult = intl.string(presentError(3714)["5fwOcF"]);
              }
              closure_1(stringResult);
              obj3 = type(12614);
            }
          } catch (tmp33) {
            c3 = tmp;
            throw tmp33;
          }
        }
      };
      if (null != projectId) {
        const result = projectId(12614).beginExternalAuthorization(ref.current, type.type);
        if (null != result) {
          ref.current = result;
          dependencyMap(result);
          (function startAuthorization() {
            const self = this;
            const apply = closure_1.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          })().catch(() => callback(type.type));
          const promise = (function startAuthorization() {
            const self = this;
            const apply = closure_1.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          })();
        }
        let obj = projectId(12614);
      }
    }, items)
  };
};