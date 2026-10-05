// === Module 8130: useAgeVerificationMethodsV2 ===

// Module 8130 (useAgeVerificationMethodsV2)
import DispatcherDefault from "Dispatcher" /* 584 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import AgeVerificationStore from "AgeVerificationStore" /* 8131 */;
import size from "module_2" /* 2 */;

let c5, c6;

let react = react_mod;
let result = size.fileFinishedImporting("modules/age_assurance/hooks/useAgeVerificationMethodsV2.tsx");

export const useAgeVerificationMethodsV2 = function useAgeVerificationMethodsV2() {
  let closure_3;
  let closure_4;
  let closure_5;
  let first;
  let first1;
  let items1;
  let tmp2;
  let tmp4;
  let tmp6;
  const f96423 = () => callback.methodsV2OutageBannerMessage;
  const tmp = _slicedToArray(react.useState(() => {
    let methodsV2 = callback.methodsV2;
    if (methodsV2 == null) {
      methodsV2 = [];
    }
    return methodsV2;
  }), 2);
  [tmp2, require] = tmp;
  const tmp3 = _slicedToArray(react.useState(() => callback.methodsV2FooterMessage), 2);
  [tmp4, importDefault] = tmp3;
  [tmp6, dependencyMap] = react.useState(f96423);
  _slicedToArray(react.useState(f96423), 2);
  [first, _asyncToGenerator] = react.useState(() => null == callback.methodsV2);
  [first1, _slicedToArray] = react.useState(false);
  react = react.useRef(true);
  const useCallback = react.useCallback;
  let closure_0 = _asyncToGenerator(async (arg0) => {
    let closure_2;
    let v0;
    closure_0 = arg0;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let current;
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_0 = undefined;
            current = methodsV2;
            methodsV2 = methodsV2.methodsV2;
            if (!closure_0) {
              if (null != methodsV2) {
                closure_0(methodsV2);
                current(current.methodsV2FooterMessage);
                tmp(current.methodsV2OutageBannerMessage);
                current = tmp66(false);
                v0(false);
                c6 = 3;
                const obj5 = { value: undefined, done: true };
                return obj5;
              }
            }
            tmp66(true);
            v0(false);
            v0 = 2;
            const obj6 = closure_0(dependencyMap[4]);
            const result = obj6.isCurrentUserSuspended();
            current = closure_0(dependencyMap[5]);
            if (result) {
              current = current.fetchAgeVerificationMethodsV2SuspendedUser();
              c5 = 4;
              c6 = 1;
              const obj7 = { value: current, done: false };
              return obj7;
            } else {
              c5 = 3;
              c6 = 1;
              const obj8 = { value: current.fetchAgeVerificationMethodsV2(), done: false };
              return obj8;
            }
          }
        } else if (1 === c5) {
          v0 = 0;
          current = c5.current && tmp66(false);
          throw tmp66;
        } else {
          if (2 === c5) {
            v0 = 1;
            if (c5.current) {
              v0(true);
            }
          } else {
            if (3 === c5) {
              if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                v0 = 0;
                if (c5.current) {
                  tmp66(false);
                }
                c6 = 3;
                const obj9 = { value, done: true };
                return obj9;
              }
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              v0 = 0;
              if (c5.current) {
                tmp66(false);
              }
              c6 = 3;
              const obj = { value, done: true };
              return obj;
            }
            closure_0 = value;
            const obj10 = { type: "AGE_VERIFICATION_METHODS_V2_LOAD_SUCCESS", methods: closure_0.methods, footerMessage: closure_0.footerMessage, outageBannerMessage: closure_0.outageBannerMessage };
            const obj2 = DispatcherDefault;
            current = obj2.dispatch(obj10);
            if (c5.current) {
              closure_0(closure_0.methods);
              current(closure_0.footerMessage);
              current = tmp;
              tmp(closure_0.outageBannerMessage);
            }
            v0 = 1;
          }
          v0 = 0;
          if (c5.current) {
            tmp66(false);
          }
          c6 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp66) {
        if (0 === v0) {
          c6 = 3;
          throw tmp66;
        } else if (1 === tmp68) {
          c5 = 1;
        } else {
          c5 = 2;
        }
      }
    }
  });
  const callback = useCallback(function() {
    return closure_0(...arguments);
  }, []);
  const items = [callback];
  const effect = react.useEffect(() => {
    closure_5.current = true;
    callback(false);
    return () => {
      closure_1_5.current = false;
    };
  }, items);
  let obj = {
    loading: first,
    error: first1,
    methods: tmp2,
    footerMessage: tmp4,
    outageBannerMessage: tmp6,
    refetch: react.useCallback(() => {
      callback(true);
    }, items1)
  };
  items1 = [callback];
  return obj;
};