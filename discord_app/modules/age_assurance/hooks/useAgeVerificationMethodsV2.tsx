// === Module 8445: useAgeVerificationMethodsV2 ===

// Module 8445 (useAgeVerificationMethodsV2)
import DispatcherDefault from "Dispatcher" /* 573 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AgeVerificationStore from "AgeVerificationStore" /* 8446 */;

const require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/age_assurance/hooks/useAgeVerificationMethodsV2.tsx");

export const useAgeVerificationMethodsV2 = function useAgeVerificationMethodsV2() {
  [tmp2, closure_0] = _slicedToArray(noop.useState(() => {
    let methodsV2 = callback.methodsV2;
    if (methodsV2 == null) {
      methodsV2 = [];
    }
    return methodsV2;
  }), 2);
  const tmp = _slicedToArray(noop.useState(() => {
    let methodsV2 = callback.methodsV2;
    if (methodsV2 == null) {
      methodsV2 = [];
    }
    return methodsV2;
  }), 2);
  [tmp4, importDefault] = _slicedToArray(noop.useState(() => callback.methodsV2FooterMessage), 2);
  const tmp3 = _slicedToArray(noop.useState(() => callback.methodsV2FooterMessage), 2);
  [tmp6, dependencyMap] = _slicedToArray(noop.useState(() => callback.methodsV2OutageBannerMessage), 2);
  const tmp7 = _slicedToArray(noop.useState(() => null == callback.methodsV2), 2);
  asyncGeneratorStep = tmp7[1];
  const tmp8 = _slicedToArray(noop.useState(false), 2);
  _slicedToArray = tmp8[1];
  noop = noop.useRef(true);
  closure_0 = asyncGeneratorStep(async (arg0, value) => {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp8 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
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
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_129_0 = undefined;
            const methodsV2 = callback.methodsV2;
            if (!closure_0) {
              if (null != methodsV2) {
                closure_0(methodsV2);
                tmp6(tmp84.methodsV2FooterMessage);
                tmp4(tmp84.methodsV2OutageBannerMessage);
                tmp75(false);
                v0(false);
                c6 = 3;
                let obj1 = { value: undefined, done: true };
                return obj1;
              }
            }
            tmp75(true);
            v0(false);
            v0 = 2;
            let obj5 = closure_0(8418);
            const result = obj5.isCurrentUserSuspended();
            const obj7 = closure_0(8447);
            if (result) {
              c5 = 4;
              c6 = 1;
              const obj2 = { value: obj7.fetchAgeVerificationMethodsV2SuspendedUser(), done: false };
              return obj2;
            } else {
              c5 = 3;
              c6 = 1;
              const obj3 = { value: obj7.fetchAgeVerificationMethodsV2(), done: false };
              return obj3;
            }
          }
        } else if (1 === tmp9) {
          v0 = 0;
          if (c5.current) {
            tmp75(false);
          }
          throw tmp75;
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
                throw value;
              } else if (arg0 === 2) {
                v0 = 0;
                if (c5.current) {
                  tmp75(false);
                }
                c6 = 3;
                const obj4 = { value, done: true };
                return obj4;
              }
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              v0 = 0;
              if (c5.current) {
                tmp75(false);
              }
              c6 = 3;
              obj = { value, done: true };
              return obj;
            }
            closure_129_0 = value;
            obj1 = DispatcherDefault;
            obj5 = { type: "AGE_VERIFICATION_METHODS_V2_LOAD_SUCCESS", methods: closure_129_0.methods, footerMessage: closure_129_0.footerMessage, outageBannerMessage: closure_129_0.outageBannerMessage };
            obj1.dispatch(obj5);
            if (c5.current) {
              closure_0(closure_129_0.methods);
              tmp6(closure_129_0.footerMessage);
              tmp4(closure_129_0.outageBannerMessage);
            }
            v0 = 1;
          }
          v0 = 0;
          if (c5.current) {
            tmp75(false);
          }
          c6 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp75) {
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
  });
  const callback = noop.useCallback(function() {
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
  const effect = noop.useEffect(() => {
    closure_5.current = true;
    callback(false);
    return () => {
      closure_1_5.current = false;
    };
  }, items);
  let obj = { loading: tmp7[0], error: tmp8[0], methods: tmp2, footerMessage: tmp4, outageBannerMessage: tmp6, refetch: null };
  const items1 = [callback];
  obj.refetch = noop.useCallback(() => {
    callback(true);
  }, items1);
  return obj;
};