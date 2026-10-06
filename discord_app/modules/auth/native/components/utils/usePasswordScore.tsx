// === Module 15929: usePasswordScore ===

// Module 15929 (usePasswordScore)
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c5, c6;

let _slicedToArray = _slicedToArray_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let ref;
  let tmp10;
  let tmp3;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp9;
  _require = arg0;
  let obj = require("react");
  const cResult = obj.c(8);
  [tmp3, dependencyMap] = react.useState(null);
  _slicedToArray(react.useState(null), 2);
  const tmp4 = _slicedToArray(react.useState(null), 2);
  [tmp5, _asyncToGenerator] = tmp4;
  _slicedToArray = react.useRef(null);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function c() {
      const tmp = closure_0(dependencyMap[5]);
      const throttle = tmp.throttle;
      closure_0 = _asyncToGenerator(async (arg0) => {
        let closure_2;
        let obj2;
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
          let c4;
          try {
            let closure_1;
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
                closure_1 = tmp4;
                closure_0 = undefined;
                if (null != closure_0) {
                  if (closure_0.length > 0) {
                    c4 = 1;
                    c5 = 2;
                    c6 = 1;
                    const obj5 = { value: obj2.scorePassword(closure_0), done: false };
                    obj2 = closure_0(dependencyMap[6]);
                    return obj5;
                  }
                }
              }
            } else if (1 === c5) {
              c4 = 0;
              closure_1(null);
              tmp(null);
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              c6 = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              closure_0 = value;
              closure_1(closure_0.password_strength);
              tmp(closure_0.valid);
              c4 = 0;
            }
            c6 = 3;
            return { value: "IconComponent", done: null };
          } catch (tmp21) {
            let closure_3 = tmp21;
            if (0 === c4) {
              c6 = 3;
              throw tmp21;
            } else {
              c5 = 1;
            }
          }
        }
      });
      ref.current = throttle(function() {
        return closure_0(...arguments);
      }, 250);
      return () => {
        const current = ref.current;
        let cancel;
        if (current != null) {
          cancel = current.cancel;
        }
        if (null != cancel) {
          const current2 = ref.current;
          current2.cancel();
        }
      };
    };
    const items = [];
    cResult[0] = fn;
    cResult[1] = items;
    tmp6 = fn;
    tmp7 = items;
  } else {
    [tmp6, tmp7] = cResult;
  }
  const effect = react.useEffect(tmp6, tmp7);
  if (cResult[2] !== arg0) {
    const fn2 = function o() {
      const tmp = null != ref.current && closure_0.length > 0;
      if (tmp) {
        ref.current(closure_0);
      }
    };
    const items1 = [arg0];
    cResult[2] = arg0;
    cResult[3] = fn2;
    cResult[4] = items1;
    tmp10 = items1;
    tmp9 = fn2;
  } else {
    tmp9 = cResult[3];
    tmp10 = cResult[4];
  }
  const effect1 = react.useEffect(tmp9, tmp10);
  if (cResult[5] === tmp3) {
    let tmp12;
    if (cResult[6] === tmp5) {
      tmp12 = cResult[7];
    }
    return tmp12;
  }
  let obj3 = { passwordScore: tmp3, passwordValid: tmp5 };
  cResult[5] = tmp3;
  cResult[6] = tmp5;
  cResult[7] = obj3;
  tmp12 = obj3;
}) : ((arg0) => {
  let ref;
  let tmp2;
  let tmp4;
  let closure_0 = arg0;
  let tmp = _slicedToArray(react.useState(null), 2);
  [tmp2, dependencyMap] = tmp;
  const tmp3 = _slicedToArray(react.useState(null), 2);
  [tmp4, _asyncToGenerator] = tmp3;
  _slicedToArray = react.useRef(null);
  const effect = react.useEffect(() => {
    const tmp = closure_0(dependencyMap[5]);
    const throttle = tmp.throttle;
    closure_0 = _asyncToGenerator(async (arg0) => {
      let closure_2;
      let obj2;
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
        let c4;
        try {
          let closure_1;
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
              closure_1 = tmp4;
              closure_0 = undefined;
              if (null != closure_0) {
                if (closure_0.length > 0) {
                  c4 = 1;
                  c5 = 2;
                  c6 = 1;
                  const obj5 = { value: obj2.scorePassword(closure_0), done: false };
                  obj2 = closure_0(dependencyMap[6]);
                  return obj5;
                }
              }
            }
          } else if (1 === c5) {
            c4 = 0;
            closure_1(null);
            tmp(null);
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            closure_0 = value;
            closure_1(closure_0.password_strength);
            tmp(closure_0.valid);
            c4 = 0;
          }
          c6 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp21) {
          let closure_3 = tmp21;
          if (0 === c4) {
            c6 = 3;
            throw tmp21;
          } else {
            c5 = 1;
          }
        }
      }
    });
    ref.current = throttle(function() {
      return closure_0(...arguments);
    }, 250);
    return () => {
      const current = ref.current;
      let cancel;
      if (current != null) {
        cancel = current.cancel;
      }
      if (null != cancel) {
        const current2 = ref.current;
        current2.cancel();
      }
    };
  }, []);
  const items = [arg0];
  const effect1 = react.useEffect(() => {
    const tmp = null != ref.current && closure_0.length > 0;
    if (tmp) {
      ref.current(closure_0);
    }
  }, items);
  return { passwordScore, passwordValid };
});
const result = size.fileFinishedImporting("modules/auth/native/components/utils/usePasswordScore.tsx");

export const PasswordScore = { WEAK: 2, [2]: "WEAK", MEDIUM: 3, [3]: "MEDIUM", STRONG: 4, [4]: "STRONG" };
export const usePasswordScore = tmp2;