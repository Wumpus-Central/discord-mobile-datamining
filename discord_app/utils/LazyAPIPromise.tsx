// === Module 9217: LazyAPIPromise ===

// Module 9217 (LazyAPIPromise)
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c4, c5, dependencyMap;

let _slicedToArray = _slicedToArray_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let closure_0;
  let tmp3;
  let tmp5;
  _require = arg0;
  dependencyMap = arg1;
  let obj = require("react");
  const cResult = obj.c(9);
  [tmp3, _asyncToGenerator] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  const tmp4 = _slicedToArray(react.useState(null), 2);
  [tmp5, _slicedToArray] = tmp4;
  if (cResult[0] === arg0) {
    let tmp6;
    if (cResult[1] === arg1) {
      tmp6 = cResult[2];
    }
    if (cResult[3] === tmp5) {
      let tmp7;
      if (cResult[4] === tmp3) {
        tmp7 = cResult[5];
      }
      if (cResult[6] === tmp6) {
        let tmp8;
        if (cResult[7] === tmp7) {
          tmp8 = cResult[8];
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
  _require = _asyncToGenerator(async function() {
    let closure_2;
    let v0;
    let value;
    if (c5 === 2) {
      c5 = 3;
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
        let aPIError;
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
            value = undefined;
            closure_1 = undefined;
            aPIError = undefined;
            tmp36(true);
            v0(null);
            v0 = 1;
            c4 = 2;
            c5 = 1;
            const obj4 = { value: value(), done: false };
            return obj4;
          }
        } else if (1 === c4) {
          v0 = 0;
          closure_1 = tmp36;
          const self = this;
          const self2 = this;
          aPIError = new value(closure_2_1[5]).APIError(closure_1);
          if (closure_1 != null) {
            tmp20(aPIError);
          }
          v0(aPIError);
          tmp36(false);
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
          tmp36(false);
          v0(null);
          v0 = 0;
          c5 = 3;
          const obj = { value, done: true };
          return obj;
        }
      } catch (tmp36) {
        if (0 === v0) {
          c5 = 3;
          throw tmp36;
        } else {
          c4 = 1;
        }
      }
    }
  });
  function execFn() {
    return closure_0(...arguments);
  }
  cResult[0] = arg0;
  cResult[1] = arg1;
  cResult[2] = execFn;
  tmp6 = execFn;
}) : ((arg0, arg1) => {
  let closure_2;
  let closure_3;
  let first;
  let closure_0 = arg0;
  let closure_1 = arg1;
  let obj = function _execFn2() {
    obj = _asyncToGenerator(async function() {
      let value;
      if (c5 === 2) {
        c5 = 3;
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
        let c3;
        try {
          let aPIError;
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
              closure_1 = tmp;
              value = undefined;
              aPIError = undefined;
              closure_2_2(true);
              closure_2_3(null);
              c3 = 1;
              c4 = 2;
              c5 = 1;
              const obj4 = { value: closure_2_0(), done: false };
              return obj4;
            }
          } else if (1 === c4) {
            c3 = 0;
            const self = this;
            const self2 = this;
            aPIError = new value(closure_1[5]).APIError(closure_2);
            if (closure_129_1 != null) {
              tmp20(aPIError);
            }
            closure_129_3(aPIError);
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
            closure_129_2(false);
            closure_129_3(null);
            c3 = 0;
            c5 = 3;
            obj = { value, done: true };
            return obj;
          }
        } catch (tmp36) {
          closure_2 = tmp36;
          if (0 === c3) {
            c5 = 3;
            throw tmp36;
          } else {
            c4 = 1;
          }
        }
      }
    });
    return obj(...arguments);
  };
  [first, closure_2] = obj.useState(false);
  const tmp3 = _slicedToArray(obj.useState(null), 2);
  _slicedToArray = tmp3[1];
  const items = [
    function execFn() {
      return obj(...arguments);
    },
    { loading: first, error: tmp3[0] }
  ];
  return items;
});
const result = size.fileFinishedImporting("utils/LazyAPIPromise.tsx");

export default tmp2;