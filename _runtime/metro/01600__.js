// _runtime/metro/01600__.js
import _asyncToGenerator from "00005__asyncToGenerator.js";
import _slicedToArray from "00032__slicedToArray.js";
import react from "../00019_react.js";

let c4, c5, closure_2;

export const useThenable = function useThenable(arg0) {
  let items;
  let tmp3;
  const first = items(react.useState(arg0), 1)[0];
  items = [false, undefined];
  first.then((result) => {
    items = [true, result];
  });
  const tmp2 = items(react.useState(items), 2);
  [tmp3, react] = tmp2;
  const first1 = items(tmp3, 1)[0];
  let items1 = [first, first1];
  const effect = react.useEffect(() => {
    function resolve() {
      return closure_0(...arguments);
    }
    let c0 = false;
    let closure_0 = first(function* () {
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
              let closure_1 = tmp;
              value = undefined;
              c3 = 1;
              c4 = 2;
              c5 = 1;
              const obj4 = { value, done: false };
              return obj4;
            }
          } else if (1 === c4) {
            c3 = 0;
            const tmp18 = closure_2;
            if (!value) {
              items = [true, value];
              closure_2_2(items);
            }
            throw tmp18;
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            const tmp12 = value;
            if (!tmp12) {
              const items1 = [true, value];
              closure_2_2(items1);
            }
            c5 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            c3 = 0;
            const tmp7 = value;
            if (!tmp7) {
              const items2 = [true, value];
              closure_2_2(items2);
            }
            c5 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp25) {
          closure_2 = tmp25;
          if (0 === c3) {
            c5 = 3;
            throw tmp25;
          } else {
            c4 = 1;
          }
        }
      }
    });
    if (!first1) {
      resolve();
    }
    return () => {
      c0 = true;
    };
  }, items1);
  return tmp3;
};
