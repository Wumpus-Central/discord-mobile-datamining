// discord_app/modules/age_assurance/hooks/useAgeVerificationMethodsV2.tsx
import dispatcher from "dispatcher";
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import initialize from "initialize";

const require = arg1;
const result = require("noop").fileFinishedImporting("modules/age_assurance/hooks/useAgeVerificationMethodsV2.tsx");

export const useAgeVerificationMethodsV2 = function useAgeVerificationMethodsV2() {
  let closure_0;
  let tmp2;
  [tmp2, closure_0] = callback(React.useState(() => {
    let methodsV2 = initialize.methodsV2;
    if (methodsV2 == null) {
      methodsV2 = [];
    }
    return methodsV2;
  }), 2);
  const tmp3 = callback(React.useState(() => null == initialize.methodsV2), 2);
  let closure_1 = tmp3[1];
  const tmp4 = callback(React.useState(false), 2);
  let closure_2 = tmp4[1];
  callback = React.useRef(true);
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
          return { value: "T", done: null };
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
              const callback2 = tmp6;
              let callback;
              const methodsV2 = outer2_6.methodsV2;
              if (!callback) {
                if (null != methodsV2) {
                  callback(methodsV2);
                  outer1_1(false);
                  outer1_2(false);
                  c6 = 3;
                  const obj1 = { value: null, done: true };
                  obj1[0] = undefined;
                  return obj1;
                }
              }
              outer1_1(true);
              outer1_2(false);
              let c4 = 2;
              let obj4 = callback(7754);
              c5 = 3;
              c6 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = obj4.fetchAgeVerificationMethodsV2();
              return obj2;
            }
          } else if (1 === tmp9) {
            c4 = 0;
            if (outer1_3.current) {
              outer1_1(false);
            }
            throw dispatcher;
          } else {
            if (2 === tmp9) {
              c4 = 1;
              if (outer1_3.current) {
                outer1_2(true);
              }
            } else if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 0;
              if (outer1_3.current) {
                outer1_1(false);
              }
              c6 = 3;
              const obj3 = { value: null, done: true };
              obj3[0] = arg1;
              return obj3;
            } else {
              callback = arg1;
              obj = callback2(709);
              obj4 = { type: "AGE_VERIFICATION_METHODS_V2_LOAD_SUCCESS", methods: null };
              obj4[1] = callback;
              obj.dispatch(obj4);
              if (outer1_3.current) {
                callback(callback);
              }
              c4 = 1;
            }
            c4 = 0;
            if (outer1_3.current) {
              outer1_1(false);
            }
            c6 = 3;
            return { value: "T", done: null };
          }
        } catch (tmp56) {
          dispatcher = tmp56;
          if (tmp5 === c4) {
            c6 = tmp3;
            throw tmp56;
          } else if (tmp2 === tmp58) {
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
    dispatcher.current = true;
    callback(false);
    return () => {
      dispatcher.current = false;
    };
  }, items);
  const tmp = callback(React.useState(() => {
    let methodsV2 = initialize.methodsV2;
    if (methodsV2 == null) {
      methodsV2 = [];
    }
    return methodsV2;
  }), 2);
  const items1 = [callback];
  return {
    loading: tmp3[0],
    error: tmp4[0],
    methods: tmp2,
    refetch: React.useCallback(() => {
      callback(true);
    }, items1)
  };
};