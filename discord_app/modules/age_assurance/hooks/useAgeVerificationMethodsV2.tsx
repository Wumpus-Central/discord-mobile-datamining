// discord_app/modules/age_assurance/hooks/useAgeVerificationMethodsV2.tsx
import dispatcher from "dispatcher";
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import initialize from "initialize";

const require = arg1;
const result = require("noop").fileFinishedImporting("modules/age_assurance/hooks/useAgeVerificationMethodsV2.tsx");

export const useAgeVerificationMethodsV2 = function useAgeVerificationMethodsV2() {
  let closure_0;
  let importDefault;
  let tmp2;
  let tmp4;
  [tmp2, closure_0] = callback2(callback.useState(() => {
    let methodsV2 = initialize.methodsV2;
    if (methodsV2 == null) {
      methodsV2 = [];
    }
    return methodsV2;
  }), 2);
  const tmp = callback2(callback.useState(() => {
    let methodsV2 = initialize.methodsV2;
    if (methodsV2 == null) {
      methodsV2 = [];
    }
    return methodsV2;
  }), 2);
  [tmp4, importDefault] = callback2(callback.useState(() => initialize.methodsV2FooterMessage), 2);
  const tmp5 = callback2(callback.useState(() => null == initialize.methodsV2), 2);
  let closure_2 = tmp5[1];
  const tmp6 = callback2(callback.useState(false), 2);
  callback = tmp6[1];
  callback2 = callback.useRef(true);
  closure_0 = undefined;
  closure_0 = callback((arg0) => {
    let closure_0 = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
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
              const dependencyMap = tmp4;
              let closure_1 = tmp6;
              let lib;
              const methodsV2 = outer2_6.methodsV2;
              if (!lib) {
                if (null != methodsV2) {
                  lib(methodsV2);
                  outer1_1(tmp72.methodsV2FooterMessage);
                  outer1_2(false);
                  outer1_3(false);
                  c6 = 3;
                  const obj1 = { value: null, done: true };
                  obj1[0] = undefined;
                  return obj1;
                }
              }
              outer1_2(true);
              outer1_3(false);
              let c4 = 2;
              let obj2 = lib(6567);
              c5 = 3;
              c6 = 1;
              obj2 = { value: null, done: false };
              obj2[0] = obj2.fetchAgeVerificationMethodsV2();
              return obj2;
            }
          } else if (1 === tmp9) {
            c4 = 0;
            if (c4.current) {
              outer1_2(false);
            }
            throw dispatcher;
          } else {
            if (2 === tmp9) {
              c4 = 1;
              if (c4.current) {
                outer1_3(true);
              }
            } else if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 0;
              if (c4.current) {
                outer1_2(false);
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
              outer2_1(709).dispatch(obj3);
              if (c4.current) {
                lib(lib.methods);
                outer1_1(lib.footerMessage);
              }
              c4 = 1;
              const obj7 = outer2_1(709);
            }
            c4 = 0;
            if (c4.current) {
              outer1_2(false);
            }
            c6 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp54) {
          dispatcher = tmp54;
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
    _slicedToArray.current = true;
    callback(false);
    return () => {
      _slicedToArray.current = false;
    };
  }, items);
  const tmp3 = callback2(callback.useState(() => initialize.methodsV2FooterMessage), 2);
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