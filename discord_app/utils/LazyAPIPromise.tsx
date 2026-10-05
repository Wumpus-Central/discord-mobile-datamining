// discord_app/utils/LazyAPIPromise.tsx
import asyncGeneratorStep from "../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../_runtime/metro/00032__.js";
import noop from "../../_runtime/metro/00019__.js";

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("utils/LazyAPIPromise.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1) => {
      _require = arg0;
      dependencyMap = arg1;
      const cResult = require("c").c(9);
      let obj = require("c");
      [tmp3, asyncGeneratorStep] = noop.useState(false);
      const tmp2 = _slicedToArray(noop.useState(false), 2);
      [tmp5, _slicedToArray] = noop.useState(null);
      if (cResult[0] === arg0) {
        if (cResult[1] === arg1) {
          let tmp6 = cResult[2];
        }
        if (cResult[3] === tmp5) {
          if (cResult[4] === tmp3) {
            let tmp7 = cResult[5];
          }
          if (cResult[6] === tmp6) {
            if (cResult[7] === tmp7) {
              let tmp8 = cResult[8];
            }
            return tmp8;
          }
          const items = [tmp6, tmp7];
          cResult[6] = tmp6;
          cResult[7] = tmp7;
          cResult[8] = items;
          tmp8 = items;
        }
        let obj2 = { loading: tmp3, error: tmp5 };
        cResult[3] = tmp5;
        cResult[4] = tmp3;
        cResult[5] = obj2;
        tmp7 = obj2;
      }
      _require = asyncGeneratorStep(async () => {
        if (c5 === 2) {
          c5 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp6 === 3) {
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
            c5 = 2;
            if (0 === c4) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                closure_0 = tmp7;
                closure_128_0 = undefined;
                closure_128_1 = undefined;
                closure_128_2 = undefined;
                tmp41(true);
                v0(null);
                v0 = 1;
                c4 = 2;
                c5 = 1;
                const obj4 = { value: closure_0(), done: false };
                return obj4;
              }
            } else if (1 === tmp7) {
              v0 = 0;
              closure_128_1 = tmp41;
              const aPIError = new closure_0(tmp3[5]).APIError(closure_128_1);
              closure_128_2 = aPIError;
              if (tmp3 != null) {
                tmp25(closure_128_2);
              }
              v0(closure_128_2);
              tmp41(false);
              c5 = 3;
              return { value: null, done: true };
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              v0 = 0;
              c5 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              closure_128_0 = value;
              tmp41(false);
              v0(null);
              v0 = 0;
              c5 = 3;
              const obj = { value: closure_128_0, done: true };
              return obj;
            }
          } catch (tmp41) {
            if (tmp4 === v0) {
              c5 = tmp2;
              throw tmp41;
            } else {
              c4 = tmp;
            }
          }
        }
      });
      function execFn() {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      }
      cResult[0] = arg0;
      cResult[1] = arg1;
      cResult[2] = execFn;
      tmp6 = execFn;
    }
  : (arg0, arg1) => {
      closure_0 = arg0;
      closure_1 = arg1;
      noop = async function _execFn2() {
        if (c5 === 2) {
          c5 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp6 === 3) {
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
            c5 = 2;
            if (0 === c4) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                closure_0 = tmp7;
                closure_128_0 = undefined;
                closure_128_1 = undefined;
                asyncGeneratorStep(true);
                _slicedToArray(null);
                c3 = 1;
                c4 = 2;
                c5 = 1;
                const obj4 = { value: _require(), done: false };
                return obj4;
              }
            } else if (1 === tmp7) {
              c3 = 0;
              closure_128_2 = closure_2;
              const aPIError = new closure_0(tmp3[5]).APIError(closure_128_2);
              closure_128_1 = aPIError;
              if (closure_129_1 != null) {
                tmp25(closure_128_1);
              }
              closure_129_3(closure_128_1);
              closure_129_2(false);
              c5 = 3;
              return { value: null, done: true };
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c5 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              closure_128_0 = value;
              closure_129_2(false);
              closure_129_3(null);
              c3 = 0;
              c5 = 3;
              const obj = { value: closure_128_0, done: true };
              return obj;
            }
          } catch (tmp41) {
            closure_2 = tmp41;
            if (tmp4 === c3) {
              c5 = tmp2;
              throw tmp41;
            } else {
              c4 = tmp;
            }
          }
        }
      };
      const tmp = _slicedToArray(noop.useState(false), 2);
      closure_2 = tmp[1];
      const tmp2 = _slicedToArray(noop.useState(null), 2);
      _slicedToArray = tmp2[1];
      const items = [
        function execFn() {
          const self = this;
          const apply = closure_4.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        },
        { loading: tmp[0], error: tmp2[0] },
      ];
      return items;
    };
