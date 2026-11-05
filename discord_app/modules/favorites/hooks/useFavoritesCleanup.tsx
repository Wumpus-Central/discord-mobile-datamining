// === Module 18484: useFavoritesCleanup ===

// Module 18484 (useFavoritesCleanup)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import FavoriteStore from "FavoriteStore" /* 4995 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/favorites/hooks/useFavoritesCleanup.tsx");

export default function useFavoritesCleanup(arg0) {
  _require = arg0;
  closure_10 = async function _save() {
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
            if (React6) {
              if (!ref.current) {
                ref.current = true;
                FavoriteStore(true);
                timestampProducer(false);
                c3 = 2;
                const result = tmp4(11015).setFavoritesAutoAddJoinedThreads(autoAdd);
                const obj2 = tmp4(11015);
                dependencyMap = 3;
                c4 = 1;
                const obj6 = { value: tmp4(11015).setFavoritesPruneInactiveThreads(first1, first2, first3), done: false };
                return obj6;
              }
            }
            c4 = 3;
          }
        } else if (1 !== tmp8) {
          if (2 === tmp8) {
            c3 = 1;
            if (closure_128_8.current) {
              closure_128_6(true);
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            closure_128_7.current = false;
            if (closure_128_8.current) {
              closure_128_5(false);
            }
            c4 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            if (closure_128_8.current) {
              closure_128_0();
            }
            c3 = 1;
          }
          c3 = 0;
          closure_128_7.current = false;
          if (closure_128_8.current) {
            closure_128_5(false);
          }
        }
        c3 = 0;
        closure_128_7.current = false;
        if (closure_128_8.current) {
          closure_128_5(false);
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
  items = [FavoriteStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => FavoriteStore.autoAddJoinedThreads);
  let obj = require("initialize");
  const items1 = [FavoriteStore];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => FavoriteStore.pruneInactiveThreads);
  let obj2 = require("initialize");
  const items2 = [FavoriteStore];
  const stateFromStores2 = require("initialize").useStateFromStores(items2, () => FavoriteStore.pruneInactiveThreadsDays);
  const obj3 = require("initialize");
  const items3 = [FavoriteStore];
  const stateFromStores3 = require("initialize").useStateFromStores(items3, () => FavoriteStore.pruneInactiveThreadsScope);
  const tmp5 = first2(first3.useState(stateFromStores), 2);
  autoAdd = tmp5[0];
  const tmp7 = first2(first3.useState(stateFromStores1), 2);
  const first1 = tmp7[0];
  const tmp9 = first2(first3.useState(stateFromStores2), 2);
  first2 = tmp9[0];
  const tmp11 = first2(first3.useState(stateFromStores3), 2);
  first3 = tmp11[0];
  let obj4 = require("initialize");
  [tmp14, FavoriteStore] = first2(first3.useState(false), 2);
  const tmp13 = first2(first3.useState(false), 2);
  [tmp16, closure_6] = first2(first3.useState(false), 2);
  closure_7 = first3.useRef(false);
  closure_8 = first3.useRef(true);
  const effect = first3.useEffect(() => {
    closure_8.current = true;
    return () => {
      closure_1_8.current = false;
    };
  }, []);
  let tmp18 = autoAdd !== stateFromStores || first1 !== stateFromStores1;
  if (!tmp18) {
    let tmp19 = first1;
    if (first1) {
      tmp19 = first2 !== stateFromStores2 || first3 !== stateFromStores3;
      const tmp20 = first2 !== stateFromStores2 || first3 !== stateFromStores3;
    }
    tmp18 = tmp19;
  }
  closure_9 = tmp18;
  return {
    autoAdd,
    setAutoAdd: tmp5[1],
    prune: first1,
    setPrune: tmp7[1],
    days: first2,
    setDays: tmp9[1],
    canSave: tmp18,
    scope: first3,
    setScope: tmp11[1],
    loading: tmp14,
    error: tmp16,
    save() {
      const self = this;
      const apply = closure_10.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
  };
};