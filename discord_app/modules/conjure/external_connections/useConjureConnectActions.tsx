// discord_app/modules/conjure/external_connections/useConjureConnectActions.tsx
import conjureExternalConnections from "conjureExternalConnections.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const set = new Set();
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/external_connections/useConjureConnectActions.tsx");

export function useConjureConnectActions(projectId, presentError) {
  [tmp2, dependencyMap] = callback(noop.useState(set), 2);
  noop.useRef(set);
  callback = noop.useCallback((arg0) => {
    ref.current = conjureExternalConnections.endExternalAuthorization(ref.current, arg0);
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
            return { value: "HermesInternal", done: "HermesInternal" };
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
                const obj6 = { value: type(12516).requestExternalAuthorizeUrl(closure_0, type.type), done: false };
                return obj6;
              }
            } else if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj7 = { value, done: true };
              return obj7;
            } else {
              closure_128_0 = value;
              callback(closure_129_0.type);
              if ("url" === closure_128_0.type) {
                const obj8 = { href: closure_128_0.url, trusted: false };
                type(8940).handleClick(obj8);
                c3 = 3;
                const obj = type(8940);
              }
              if ("setup" === obj3.externalAuthErrorCopy(closure_128_0.error)) {
                const intl2 = type(1113).intl;
                let stringResult = intl2.string(presentError(3868)["jCQ/1B"]);
              } else {
                const intl = type(1113).intl;
                stringResult = intl.string(presentError(3868).POxkSh);
              }
              closure_1(stringResult);
              obj3 = type(12517);
            }
          } catch (tmp34) {
            c3 = tmp;
            throw tmp34;
          }
        }
      };
      if (null != projectId) {
        const result = projectId(12517).beginExternalAuthorization(ref.current, type.type);
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
        let obj = projectId(12517);
      }
    }, items),
  };
}
