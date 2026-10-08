// discord_app/modules/conjure/external_connections/useConjureConnectActions.tsx
import conjureExternalConnections from "conjureExternalConnections.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
let closure_6 = fn(13072).requestExternalAuthorizeUrl;
const set = new Set();
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/external_connections/useConjureConnectActions.tsx");

export const useConjureConnectActions = ReactCompilerGating.isReactCompilerEnabled()
  ? function useConjureConnectActions(arg0, arg1) {
      _require = arg0;
      closure_1 = arg1;
      const cResult = require("c").c(7);
      let obj = require("c");
      [tmp3, dependencyMap] = first(noop.useState(set), 2);
      noop.useRef(set);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function h(arg0) {
          ref.current = conjureExternalConnections.endExternalAuthorization(ref.current, arg0);
          dependencyMap(ref.current);
        };
        cResult[0] = fn;
        first = fn;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === arg1) {
        if (cResult[2] === arg0) {
          let tmp5 = cResult[3];
        }
        if (cResult[4] === tmp5) {
          if (cResult[5] === tmp3) {
            let tmp6 = cResult[6];
          }
          return tmp6;
        }
        let obj2 = { pending: tmp3, connect: tmp5 };
        cResult[4] = tmp5;
        cResult[5] = tmp3;
        cResult[6] = obj2;
        tmp6 = obj2;
      }
      const fn2 = function x(type) {
        if (null != type) {
          const result = type(13083).beginExternalAuthorization(ref.current, type.type);
          if (null != result) {
            ref.current = result;
            dependencyMap(result);
            type = ref(function* () {
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
                  return { value: "IconComponent", done: null };
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
                      closure_128_0 = undefined;
                      c2 = 1;
                      c3 = 1;
                      const obj5 = { value: closure_3_6(tmp2, tmp2.type), done: false };
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
                    first(tmp2.type);
                    if ("url" === closure_128_0.type) {
                      const obj7 = { href: closure_128_0.url, trusted: false };
                      tmp2(8466).handleClick(obj7);
                      c3 = 3;
                      const obj = tmp2(8466);
                    }
                    if ("setup" === obj3.externalAuthErrorCopy(closure_128_0.error)) {
                      const intl2 = tmp2(1126).intl;
                      let stringResult = intl2.string(tmp5(3827)["jCQ/1B"]);
                    } else {
                      const intl = tmp2(1126).intl;
                      stringResult = intl.string(tmp5(3827).POxkSh);
                    }
                    closure_2_1(stringResult);
                    obj3 = tmp2(13083);
                  }
                } catch (tmp33) {
                  c3 = tmp;
                  throw tmp33;
                }
              }
            });
            (function startAuthorization() {
              const self = this;
              const apply = closure_0.apply;
              if (typeof apply === "unknown") {
                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            })().catch(() => first(type.type));
            const promise = (function startAuthorization() {
              const self = this;
              const apply = closure_0.apply;
              if (typeof apply === "unknown") {
                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            })();
          }
          let obj = type(13083);
        }
      };
      cResult[1] = arg1;
      cResult[2] = arg0;
      cResult[3] = fn2;
      tmp5 = fn2;
    }
  : function useConjureConnectActions(arg0, arg1) {
      closure_0 = arg0;
      closure_1 = arg1;
      [tmp2, dependencyMap] = callback(noop.useState(set), 2);
      noop.useRef(set);
      callback = noop.useCallback((arg0) => {
        ref.current = conjureExternalConnections.endExternalAuthorization(ref.current, arg0);
        dependencyMap(ref.current);
      }, []);
      const items = [arg1, arg0, callback];
      const tmp = callback(noop.useState(set), 2);
      return {
        pending: tmp2,
        connect: noop.useCallback((type) => {
          closure_1 = async function _startAuthorization2() {
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
                return { value: "IconComponent", done: null };
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
                    type(8466).handleClick(obj7);
                    c3 = 3;
                    const obj = type(8466);
                  }
                  if ("setup" === obj3.externalAuthErrorCopy(closure_128_0.error)) {
                    const intl2 = type(1126).intl;
                    let stringResult = intl2.string(closure_2_1(3827)["jCQ/1B"]);
                  } else {
                    const intl = type(1126).intl;
                    stringResult = intl.string(closure_2_1(3827).POxkSh);
                  }
                  closure_1(stringResult);
                  obj3 = type(13083);
                }
              } catch (tmp33) {
                c3 = tmp;
                throw tmp33;
              }
            }
          };
          if (null != type) {
            const result = type(13083).beginExternalAuthorization(ref.current, type.type);
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
            let obj = type(13083);
          }
        }, items),
      };
    };
