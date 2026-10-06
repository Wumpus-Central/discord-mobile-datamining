// === Module 16667: useConjureConnectActions ===

// Module 16667 (useConjureConnectActions)
import ConjureConnectionStore from "ConjureConnectionStore" /* 12923 */;
import conjureExternalConnections from "conjureExternalConnections" /* 12933 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c2, c3;

let closure_6 = ConjureConnectionStore.requestExternalAuthorizeUrl;
const set = new Set();
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let closure_0;
  let first;
  let tmp3;
  _require = arg0;
  let closure_1 = arg1;
  let obj = require("react");
  const cResult = obj.c(7);
  [tmp3, dependencyMap] = first(react.useState(set), 2);
  const tmp2 = first(react.useState(set), 2);
  const ref = react.useRef(set);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function h(arg0) {
      const obj = conjureExternalConnections;
      ref.current = obj.endExternalAuthorization(ref.current, arg0);
      dependencyMap(ref.current);
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg1) {
    let tmp5;
    if (cResult[2] === arg0) {
      tmp5 = cResult[3];
    }
    if (cResult[4] === tmp5) {
      let tmp6;
      if (cResult[5] === tmp3) {
        tmp6 = cResult[6];
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
    function startAuthorization() {
      return closure_0(...arguments);
    }
    if (null != type) {
      let obj = type(dependencyMap[6]);
      const result = obj.beginExternalAuthorization(ref.current, type.type);
      if (null != result) {
        ref.current = result;
        dependencyMap(result);
        type = ref(function*() {
          if (c3 === 2) {
            c3 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
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
              let tmp;
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
                  closure_1 = tmp4;
                  tmp = undefined;
                  c2 = 1;
                  c3 = 1;
                  const obj5 = { value: closure_3_6(tmp, tmp.type), done: false };
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
                tmp = value;
                first(tmp.type);
                if ("url" !== tmp.type) {
                  let stringResult;
                  const obj3 = tmp(dependencyMap[6]);
                  if ("setup" === obj3.externalAuthErrorCopy(tmp.error)) {
                    const intl2 = tmp(dependencyMap[8]).intl;
                    stringResult = intl2.string(closure_3_1(dependencyMap[9])["jCQ/1B"]);
                  } else {
                    const intl = tmp(dependencyMap[8]).intl;
                    stringResult = intl.string(closure_3_1(dependencyMap[9]).POxkSh);
                  }
                  closure_2_1(stringResult);
                } else {
                  const obj7 = { href: tmp.url, trusted: false };
                  const obj = tmp(dependencyMap[7]);
                  obj.handleClick(obj7);
                }
                c3 = 3;
                return { value: "IconComponent", done: null };
              }
            } catch (tmp32) {
              c3 = 3;
              throw tmp32;
            }
          }
        });
        const promise = startAuthorization();
        promise.catch(() => first(type.type));
      }
    }
  };
  cResult[1] = arg1;
  cResult[2] = arg0;
  cResult[3] = fn2;
  tmp5 = fn2;
}) : ((arg0, arg1) => {
  let callback;
  let tmp2;
  let closure_0 = arg0;
  let closure_1 = arg1;
  let tmp = callback(react.useState(set), 2);
  [tmp2, dependencyMap] = tmp;
  const ref = react.useRef(set);
  callback = react.useCallback((arg0) => {
    const obj = conjureExternalConnections;
    ref.current = obj.endExternalAuthorization(ref.current, arg0);
    dependencyMap(ref.current);
  }, []);
  const items = [arg1, arg0, callback];
  let obj = {
    pending: tmp2,
    connect: react.useCallback((type) => {
      function startAuthorization() {
        return obj(...arguments);
      }
      let obj = function _startAuthorization2() {
        obj = _asyncToGenerator(async () => {
          if (c3 === 2) {
            c3 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
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
              let tmp;
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
                  closure_1 = tmp4;
                  tmp = undefined;
                  c2 = 1;
                  c3 = 1;
                  const obj5 = { value: closure_2_6(tmp, type.type), done: false };
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
                tmp = value;
                closure_1_4(closure_129_0.type);
                if ("url" !== tmp.type) {
                  let stringResult;
                  const obj3 = type(closure_2_2[6]);
                  const tmp13 = closure_1;
                  if ("setup" === obj3.externalAuthErrorCopy(tmp.error)) {
                    const intl2 = type(closure_2_2[8]).intl;
                    stringResult = intl2.string(closure_2_1(closure_2_2[9])["jCQ/1B"]);
                  } else {
                    const intl = type(closure_2_2[8]).intl;
                    stringResult = intl.string(closure_2_1(closure_2_2[9]).POxkSh);
                  }
                  tmp13(stringResult);
                } else {
                  const obj7 = { href: tmp.url, trusted: false };
                  obj = type(closure_2_2[7]);
                  obj.handleClick(obj7);
                }
                c3 = 3;
                return { value: "IconComponent", done: null };
              }
            } catch (tmp32) {
              c3 = 3;
              throw tmp32;
            }
          }
        });
        return obj(...arguments);
      };
      if (null != type) {
        let tmp = type;
        obj = type(dependencyMap[6]);
        const result = obj.beginExternalAuthorization(ref.current, type.type);
        if (null != result) {
          ref.current = result;
          dependencyMap(result);
          const promise = startAuthorization();
          promise.catch(() => callback(type.type));
        }
      }
    }, items)
  };
  return obj;
});
let result = size.fileFinishedImporting("modules/conjure/external_connections/useConjureConnectActions.tsx");

export const useConjureConnectActions = tmp3;