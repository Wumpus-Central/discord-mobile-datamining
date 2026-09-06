// === Module 8445: useAgeVerificationMethodsV2 ===

// Module 8445 (useAgeVerificationMethodsV2)
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "_slicedToArray" /* 32 */;
import closure_5 from "noop" /* 19 */;
import closure_6 from "initialize" /* 8446 */;

const require = arg1;
let result = require("set").fileFinishedImporting("modules/age_assurance/hooks/useAgeVerificationMethodsV2.tsx");

export const useAgeVerificationMethodsV2 = function useAgeVerificationMethodsV2() {
  [tmp2, closure_0] = callback2(React.useState(() => {
    let methodsV2 = callback.methodsV2;
    if (methodsV2 == null) {
      methodsV2 = [];
    }
    return methodsV2;
  }), 2);
  const tmp = callback2(React.useState(() => {
    let methodsV2 = callback.methodsV2;
    if (methodsV2 == null) {
      methodsV2 = [];
    }
    return methodsV2;
  }), 2);
  [tmp4, importDefault] = callback2(React.useState(() => callback.methodsV2FooterMessage), 2);
  const tmp3 = callback2(React.useState(() => callback.methodsV2FooterMessage), 2);
  [tmp6, dependencyMap] = callback2(React.useState(() => callback.methodsV2OutageBannerMessage), 2);
  const tmp7 = callback2(React.useState(() => null == callback.methodsV2), 2);
  let callback = tmp7[1];
  const tmp8 = callback2(React.useState(false), 2);
  callback2 = tmp8[1];
  React = React.useRef(true);
  closure_0 = undefined;
  closure_0 = callback((arg0) => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    return (function*(arg0) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp8 === 3) {
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
              closure_2 = tmp4;
              closure_1 = tmp6;
              let lib;
              const methodsV2 = callback.methodsV2;
              if (!lib) {
                if (null != methodsV2) {
                  lib(methodsV2);
                  closure_1_1(tmp85.methodsV2FooterMessage);
                  closure_1_2(tmp85.methodsV2OutageBannerMessage);
                  closure_1_3(false);
                  v0(false);
                  c6 = 3;
                  obj1 = { value: null, done: true };
                  obj1[0] = undefined;
                  return obj1;
                }
              }
              closure_1_3(true);
              v0(false);
              v0 = 2;
              let obj5 = lib(closure_2_2[4]);
              const result = obj5.isCurrentUserSuspended();
              const obj7 = lib(closure_2_2[5]);
              if (result) {
                c5 = 4;
                c6 = 1;
                const obj2 = { value: null, done: false };
                obj2[0] = obj7.fetchAgeVerificationMethodsV2SuspendedUser();
                return obj2;
              } else {
                c5 = 3;
                c6 = 1;
                const obj3 = { value: null, done: false };
                obj3[0] = obj7.fetchAgeVerificationMethodsV2();
                return obj3;
              }
            }
          } else if (1 === tmp9) {
            v0 = 0;
            if (c5.current) {
              closure_1_3(false);
            }
            throw closure_3;
          } else {
            if (2 === tmp9) {
              v0 = 1;
              if (c5.current) {
                v0(true);
              }
            } else {
              if (3 === tmp9) {
                if (arg0 === 1) {
                  c6 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  v0 = 0;
                  if (c5.current) {
                    closure_1_3(false);
                  }
                  c6 = 3;
                  const obj4 = { value: null, done: true };
                  obj4[0] = arg1;
                  return obj4;
                }
              } else if (arg0 === 1) {
                c6 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                v0 = 0;
                if (c5.current) {
                  closure_1_3(false);
                }
                c6 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              }
              lib = arg1;
              obj1 = closure_2_1(closure_2_2[6]);
              obj5 = { type: "AGE_VERIFICATION_METHODS_V2_LOAD_SUCCESS", methods: null, footerMessage: null, outageBannerMessage: null };
              obj5[1] = lib.methods;
              obj5[2] = lib.footerMessage;
              obj5[3] = lib.outageBannerMessage;
              obj1.dispatch(obj5);
              if (c5.current) {
                lib(lib.methods);
                closure_1_1(lib.footerMessage);
                closure_1_2(lib.outageBannerMessage);
              }
              v0 = 1;
            }
            v0 = 0;
            if (c5.current) {
              closure_1_3(false);
            }
            c6 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp75) {
          closure_3 = tmp75;
          if (tmp5 === v0) {
            c6 = tmp3;
            throw tmp75;
          } else if (tmp2 === tmp77) {
            c5 = tmp2;
          } else {
            c5 = tmp;
          }
        }
      }
    })();
  });
  callback = React.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, []);
  const items = [callback];
  const effect = React.useEffect(() => {
    closure_5.current = true;
    callback(false);
    return () => {
      closure_5.current = false;
    };
  }, items);
  const tmp5 = callback2(React.useState(() => callback.methodsV2OutageBannerMessage), 2);
  const items1 = [callback];
  return {
    loading: tmp7[0],
    error: tmp8[0],
    methods: tmp2,
    footerMessage: tmp4,
    outageBannerMessage: tmp6,
    refetch: React.useCallback(() => {
      callback(true);
    }, items1)
  };
};