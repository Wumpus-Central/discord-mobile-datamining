// === Module 17906: useFetchHighlightedCreatorGuildDetails ===

// Module 17906 (useFetchHighlightedCreatorGuildDetails)
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let c5, c6;

const result = size.fileFinishedImporting("modules/guild_role_subscriptions/useFetchHighlightedCreatorGuildDetails.tsx");

export default function useFetchHighlightedCreatorGuildDetails(arg0) {
  let callback;
  let closure_3;
  let highlightedCreatorDetails;
  let tmp2;
  let tmp4;
  const tmp = _slicedToArray(callback.useState(true), 2);
  [tmp2, dependencyMap] = tmp;
  const tmp3 = _slicedToArray(callback.useState(), 2);
  [tmp4, _asyncToGenerator] = tmp3;
  [highlightedCreatorDetails, _slicedToArray] = callback.useState();
  const useCallback = callback.useCallback;
  let closure_0 = _asyncToGenerator(async (arg0) => {
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
            closure_1(true);
            tmp(undefined);
            c4 = 2;
            c5 = 3;
            c6 = 1;
            const obj5 = { value: obj2.fetchHighlightedCreatorGuildDetails(closure_0), done: false };
            obj2 = closure_0(dependencyMap[3]);
            return obj5;
          }
        } else if (1 === c5) {
          c4 = 0;
          closure_1(false);
          throw tmp33;
        } else {
          if (2 === c5) {
            c4 = 1;
            tmp(tmp33);
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            closure_1(false);
            c6 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            closure_0 = value;
            tmp33(closure_0);
            c4 = 1;
          }
          c4 = 0;
          closure_1(false);
          c6 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp33) {
        if (0 === c4) {
          c6 = 3;
          throw tmp33;
        } else if (1 === tmp35) {
          c5 = 1;
        } else {
          c5 = 2;
        }
      }
    }
  });
  callback = useCallback(function() {
    return closure_0(...arguments);
  }, []);
  const items = [arg0, callback];
  const effect = callback.useEffect(() => {
    callback(closure_0);
  }, items);
  return { isLoading, error, highlightedCreatorDetails };
};