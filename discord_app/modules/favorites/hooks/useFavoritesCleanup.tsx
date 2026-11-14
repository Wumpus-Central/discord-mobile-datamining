// === Module 18859: useFavoritesCleanup ===

// Module 18859 (useFavoritesCleanup)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import FavoriteStore from "FavoriteStore" /* 5158 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/favorites/hooks/useFavoritesCleanup.tsx");

export default function useFavoritesCleanup(arg0) {
  _require = arg0;
  closure_12 = async function _save() {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj4 = { value, done: true };
        return obj4;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c4 = 2;
        if (0 === dependencyMap) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            if (closure_2_11) {
              if (!ref.current) {
                ref.current = true;
                metroImportDefault(true);
                React5(false);
                c3 = 2;
                const result = tmp4(10944).setFavoritesAutoAddJoinedThreads(autoAdd);
                const obj2 = tmp4(10944);
                dependencyMap = 3;
                c4 = 1;
                const obj6 = { value: tmp4(10944).setFavoritesPruneInactiveThreads(first1, first2, first3), done: false };
                return obj6;
              }
            }
            c4 = 3;
          }
        } else if (1 !== tmp8) {
          if (2 === tmp8) {
            c3 = 1;
            if (closure_128_10.current) {
              closure_128_8(true);
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            closure_128_9.current = false;
            if (closure_128_10.current) {
              closure_128_7(false);
            }
            c4 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            if (closure_128_10.current) {
              closure_128_0();
            }
            c3 = 1;
          }
          c3 = 0;
          closure_128_9.current = false;
          if (closure_128_10.current) {
            closure_128_7(false);
          }
        }
        c3 = 0;
        closure_128_9.current = false;
        if (closure_128_10.current) {
          closure_128_7(false);
        }
        throw closure_2;
      } catch (tmp52) {
        closure_2 = tmp52;
        if (tmp5 === c3) {
          c4 = tmp3;
          throw tmp52;
        } else if (tmp2 === tmp54) {
          dependencyMap = tmp2;
        } else {
          dependencyMap = tmp;
        }
      }
    }
  };
  items = [closure_5];
  const stateFromStores = require("initialize").useStateFromStores(items, () => closure_5.autoAddThreadsMode);
  let obj = require("initialize");
  const items1 = [closure_5];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => closure_5.pruneInactiveThreads);
  let obj2 = require("initialize");
  const items2 = [closure_5];
  const stateFromStores2 = require("initialize").useStateFromStores(items2, () => closure_5.pruneInactiveThreadsDays);
  const obj3 = require("initialize");
  const items3 = [closure_5];
  const stateFromStores3 = require("initialize").useStateFromStores(items3, () => closure_5.pruneInactiveThreadsScope);
  const tmp5 = _slicedToArray(first2.useState(stateFromStores), 2);
  autoAdd = tmp5[0];
  const tmp7 = _slicedToArray(first2.useState(stateFromStores1), 2);
  const first1 = tmp7[0];
  _slicedToArray = tmp9;
  const tmp10 = _slicedToArray(first2.useState(stateFromStores2), 2);
  first2 = tmp10[0];
  closure_5 = tmp12;
  [first3, obj5.setScope] = first2.useState(stateFromStores3);
  let obj4 = require("initialize");
  [tmp16, closure_7] = _slicedToArray(first2.useState(false), 2);
  const tmp15 = _slicedToArray(first2.useState(false), 2);
  [tmp18, closure_8] = _slicedToArray(first2.useState(false), 2);
  closure_9 = first2.useRef(false);
  closure_10 = first2.useRef(true);
  const effect = first2.useEffect(() => {
    closure_10.current = true;
    return () => {
      closure_1_10.current = false;
    };
  }, []);
  let tmp20 = autoAdd !== stateFromStores || first1 !== stateFromStores1;
  if (!tmp20) {
    let tmp21 = first1;
    if (first1) {
      tmp21 = first2 !== stateFromStores2 || first3 !== stateFromStores3;
      const tmp22 = first2 !== stateFromStores2 || first3 !== stateFromStores3;
    }
    tmp20 = tmp21;
  }
  closure_11 = tmp20;
  let obj5 = { autoAdd, setAutoAdd: tmp5[1], prune: first1, setPrune: tmp7[1], days: first2, setDays: tmp10[1], pruneTiming: null, setPruneTiming: null, canSave: null, scope: null, setScope: null, loading: null, error: null, save: null };
  let num = -1;
  if (first1) {
    num = first2;
  }
  obj5.pruneTiming = num;
  obj5.setPruneTiming = function setPruneTiming(arg0) {
    if (-1 !== arg0) {
      closure_3(true);
      closure_5(arg0);
    } else {
      closure_3(false);
    }
  };
  obj5.canSave = tmp20;
  obj5.scope = first3;
  obj5.loading = tmp16;
  obj5.error = tmp18;
  obj5.save = function save() {
    const self = this;
    const apply = closure_12.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  return obj5;
};
export const FAVORITES_PRUNE_NEVER = -1;