// === Module 6599: useAgeVerificationMethodsV2 ===

// Module 6599 (useAgeVerificationMethodsV2)
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "_slicedToArray" /* 32 */;
import closure_5 from "noop" /* 19 */;
import closure_6 from "initialize" /* 5431 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/age_assurance/hooks/useAgeVerificationMethodsV2.tsx");

export const useAgeVerificationMethodsV2 = function useAgeVerificationMethodsV2() {
  [tmp2, closure_0] = callback2(callback.useState(() => {
    let methodsV2 = closure_6.methodsV2;
    if (methodsV2 == null) {
      methodsV2 = [];
    }
    return methodsV2;
  }), 2);
  const tmp = callback2(callback.useState(() => {
    let methodsV2 = closure_6.methodsV2;
    if (methodsV2 == null) {
      methodsV2 = [];
    }
    return methodsV2;
  }), 2);
  [tmp4, importDefault] = callback2(callback.useState(() => closure_6.methodsV2FooterMessage), 2);
  const tmp5 = callback2(callback.useState(() => null == closure_6.methodsV2), 2);
  closure_2 = tmp5[1];
  const tmp6 = callback2(callback.useState(false), 2);
  callback = tmp6[1];
  callback2 = callback.useRef(true);
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
              dependencyMap = tmp4;
              closure_1 = tmp6;
              let lib;
              const methodsV2 = closure_2_6.methodsV2;
              if (!lib) {
                if (null != methodsV2) {
                  lib(methodsV2);
                  closure_1_1(tmp72.methodsV2FooterMessage);
                  closure_1_2(false);
                  closure_1_3(false);
                  c6 = 3;
                  obj1 = { value: null, done: true };
                  obj1[0] = undefined;
                  return obj1;
                }
              }
              closure_1_2(true);
              closure_1_3(false);
              c4 = 2;
              let obj2 = lib(6600);
              c5 = 3;
              c6 = 1;
              obj2 = { value: null, done: false };
              obj2[0] = obj2.fetchAgeVerificationMethodsV2();
              return obj2;
            }
          } else if (1 === tmp9) {
            c4 = 0;
            if (c4.current) {
              closure_1_2(false);
            }
            throw closure_3;
          } else {
            if (2 === tmp9) {
              c4 = 1;
              if (c4.current) {
                closure_1_3(true);
              }
            } else if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 0;
              if (c4.current) {
                closure_1_2(false);
              }
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              lib = arg1;
              const obj3 = { type: "AGE_VERIFICATION_METHODS_V2_LOAD_SUCCESS", methods: null, footerMessage: null };
              obj3[1] = lib.methods;
              obj3[2] = lib.footerMessage;
              closure_2_1(709).dispatch(obj3);
              if (c4.current) {
                lib(lib.methods);
                closure_1_1(lib.footerMessage);
              }
              c4 = 1;
              const obj7 = closure_2_1(709);
            }
            c4 = 0;
            if (c4.current) {
              closure_1_2(false);
            }
            c6 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp54) {
          closure_3 = tmp54;
          if (tmp5 === c4) {
            c6 = tmp3;
            throw tmp54;
          } else if (tmp2 === tmp56) {
            c5 = tmp2;
          } else {
            c5 = tmp;
          }
        }
      }
    })();
  });
  callback = callback.useCallback(function() {
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
  const effect = callback.useEffect(() => {
    closure_4.current = true;
    callback(false);
    return () => {
      closure_4.current = false;
    };
  }, items);
  const tmp3 = callback2(callback.useState(() => closure_6.methodsV2FooterMessage), 2);
  const items1 = [callback];
  return {
    loading: tmp5[0],
    error: tmp6[0],
    methods: tmp2,
    footerMessage: tmp4,
    refetch: callback.useCallback(() => {
      callback(true);
    }, items1)
  };
};