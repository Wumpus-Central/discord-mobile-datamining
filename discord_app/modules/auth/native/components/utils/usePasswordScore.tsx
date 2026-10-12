// discord_app/modules/auth/native/components/utils/usePasswordScore.tsx
import asyncGeneratorStep from "../../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/auth/native/components/utils/usePasswordScore.tsx");

export const PasswordScore = { WEAK: 2, [2]: "WEAK", MEDIUM: 3, [3]: "MEDIUM", STRONG: 4, [4]: "STRONG" };
export const usePasswordScore = ReactCompilerGating.isReactCompilerEnabled()
  ? function usePasswordScore(arg0) {
      _require = arg0;
      const cResult = require("c").c(8);
      let obj = require("c");
      [tmp3, dependencyMap] = noop.useState(null);
      const tmp2 = _slicedToArray(noop.useState(null), 2);
      [tmp5, asyncGeneratorStep] = noop.useState(null);
      _slicedToArray = noop.useRef(null);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function s() {
          closure_0 = asyncGeneratorStep(async (arg0) => {
            if (c6 === 2) {
              c6 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp6 === 3) {
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
                    closure_1 = tmp7;
                    closure_129_0 = undefined;
                    if (null != closure_0) {
                      if (closure_0.length > 0) {
                        c4 = 1;
                        c5 = 2;
                        c6 = 1;
                        const obj5 = { value: closure_0(dependencyMap[6]).scorePassword(closure_0), done: false };
                        return obj5;
                      }
                    }
                  }
                } else {
                  if (1 === tmp7) {
                    c4 = 0;
                    closure_1(null);
                    tmp3(null);
                  } else if (arg0 === 1) {
                    c6 = 3;
                    throw value;
                  } else if (arg0 !== 2) {
                    closure_129_0 = value;
                    closure_1(closure_129_0.password_strength);
                    tmp3(closure_129_0.valid);
                    c4 = 0;
                  }
                  c4 = 0;
                  c6 = 3;
                  const obj = { value, done: true };
                  return obj;
                }
                c6 = 3;
              } catch (tmp24) {
                closure_3 = tmp24;
                if (tmp4 === c4) {
                  c6 = tmp2;
                  throw tmp24;
                } else {
                  c5 = tmp;
                }
              }
            }
          });
          ref.current = closure_0(dependencyMap[5]).throttle(function () {
            const self = this;
            const apply = closure_0.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
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
      const effect = noop.useEffect(tmp6, tmp7);
      if (cResult[2] !== arg0) {
        const fn2 = function o() {
          let tmp = null != ref.current;
          if (tmp) {
            tmp = closure_0.length > 0;
          }
          if (tmp) {
            ref.current(closure_0);
          }
        };
        const items1 = [arg0];
        cResult[2] = arg0;
        cResult[3] = fn2;
        cResult[4] = items1;
        let tmp10 = items1;
        let tmp9 = fn2;
      } else {
        tmp9 = cResult[3];
        tmp10 = cResult[4];
      }
      const effect1 = noop.useEffect(tmp9, tmp10);
      if (cResult[5] === tmp3) {
        if (cResult[6] === tmp5) {
          let tmp12 = cResult[7];
        }
        return tmp12;
      }
      let obj3 = { passwordScore: tmp3, passwordValid: tmp5 };
      cResult[5] = tmp3;
      cResult[6] = tmp5;
      cResult[7] = obj3;
      tmp12 = obj3;
      const tmp4 = _slicedToArray(noop.useState(null), 2);
    }
  : function usePasswordScore(arg0) {
      closure_0 = arg0;
      [tmp2, dependencyMap] = noop.useState(null);
      let tmp = _slicedToArray(noop.useState(null), 2);
      [tmp4, asyncGeneratorStep] = noop.useState(null);
      _slicedToArray = noop.useRef(null);
      const effect = noop.useEffect(() => {
        closure_0 = asyncGeneratorStep(async (arg0) => {
          if (c6 === 2) {
            c6 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp6 === 3) {
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
                  closure_1 = tmp7;
                  closure_129_0 = undefined;
                  if (null != closure_0) {
                    if (closure_0.length > 0) {
                      c4 = 1;
                      c5 = 2;
                      c6 = 1;
                      const obj5 = { value: closure_0(dependencyMap[6]).scorePassword(closure_0), done: false };
                      return obj5;
                    }
                  }
                }
              } else {
                if (1 === tmp7) {
                  c4 = 0;
                  closure_1(null);
                  tmp3(null);
                } else if (arg0 === 1) {
                  c6 = 3;
                  throw value;
                } else if (arg0 !== 2) {
                  closure_129_0 = value;
                  closure_1(closure_129_0.password_strength);
                  tmp3(closure_129_0.valid);
                  c4 = 0;
                }
                c4 = 0;
                c6 = 3;
                const obj = { value, done: true };
                return obj;
              }
              c6 = 3;
            } catch (tmp24) {
              closure_3 = tmp24;
              if (tmp4 === c4) {
                c6 = tmp2;
                throw tmp24;
              } else {
                c5 = tmp;
              }
            }
          }
        });
        ref.current = closure_0(dependencyMap[5]).throttle(function () {
          const self = this;
          const apply = closure_0.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
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
      const effect1 = noop.useEffect(() => {
        let tmp = null != ref.current;
        if (tmp) {
          tmp = closure_0.length > 0;
        }
        if (tmp) {
          ref.current(closure_0);
        }
      }, items);
      return { passwordScore, passwordValid };
    };
