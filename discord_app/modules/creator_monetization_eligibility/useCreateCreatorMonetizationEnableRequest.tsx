// === Module 17908: useCreateCreatorMonetizationEnableRequest ===

// Module 17908 (useCreateCreatorMonetizationEnableRequest)
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let c4, c5, dependencyMap;

let _asyncToGenerator = _asyncToGenerator_mod;
const result = size.fileFinishedImporting("modules/creator_monetization_eligibility/useCreateCreatorMonetizationEnableRequest.tsx");

export default function useCreateCreatorMonetizationEnableRequest(arg0) {
  let closure_1;
  let closure_3;
  let first;
  let first1;
  let items;
  let tmp4;
  let closure_0 = arg0;
  [first, closure_1] = react.useState();
  const tmp3 = _slicedToArray(react.useState(false), 2);
  [tmp4, dependencyMap] = tmp3;
  const tmp5 = _slicedToArray(react.useState(false), 2);
  _asyncToGenerator = tmp5[1];
  let obj = {
    error: first,
    loading: tmp4,
    createEnableRequest: react.useCallback(_asyncToGenerator(async function() {
      let closure_2;
      let obj2;
      if (c5 === 2) {
        c5 = 3;
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
        let c3;
        try {
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              closure_0 = tmp4;
              if (null != closure_0) {
                dependencyMap(true);
                tmp(undefined);
                v0(false);
                c3 = 2;
                c4 = 3;
                c5 = 1;
                const obj5 = { value: obj2.createCreatorMonetizationEnableRequest(tmp45), done: false };
                obj2 = tmp(dependencyMap[3]);
                return obj5;
              }
            }
          } else if (1 === c4) {
            c3 = 0;
            closure_129_2(false);
            throw dependencyMap;
          } else {
            if (2 === c4) {
              c3 = 1;
              closure_0 = dependencyMap;
              const self = this;
              const self2 = this;
              const tmp19 = new closure_0(dependencyMap[4])(closure_0);
              closure_129_1(tmp19);
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              closure_129_2(false);
              c5 = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              closure_129_3(true);
              c3 = 1;
            }
            c3 = 0;
            closure_129_2(false);
          }
          c5 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp38) {
          dependencyMap = tmp38;
          if (0 === c3) {
            c5 = 3;
            throw tmp38;
          } else if (1 === tmp40) {
            c4 = 1;
          } else {
            c4 = 2;
          }
        }
      }
    }), items),
    submittedRequest: first1
  };
  first1 = tmp5[0];
  items = [arg0];
  return obj;
};