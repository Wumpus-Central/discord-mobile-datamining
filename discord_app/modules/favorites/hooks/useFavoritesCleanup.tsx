// === Module 18144: useFavoritesCleanup ===

// Module 18144 (useFavoritesCleanup)
import FavoritesCleanup from "FavoritesCleanup" /* 10824 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import PermissionStore from "PermissionStore" /* 4941 */;
import ReadStateStore from "ReadStateStore" /* 6836 */;
import FavoriteStore from "FavoriteStore" /* 4861 */;

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/hooks/useFavoritesCleanup.tsx");

export default function useFavoritesCleanup(arg0) {
  _require = arg0;
  closure_18 = async function _review() {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
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
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_1 = tmp4;
            closure_0 = tmp8;
            closure_128_0 = undefined;
            if (isMatch) {
              if (!ref.current) {
                ref.current = true;
                _slicedToArray(true);
                noop(false);
                c3 = 2;
                c4 = 3;
                c5 = 1;
                const obj6 = { value: closure_0(tmp72[9]).loadFavoriteThreadsForCleanup(first1), done: false };
                return obj6;
              }
            }
            c5 = 3;
          }
        } else if (1 !== tmp8) {
          if (2 === tmp8) {
            c3 = 1;
            if (closure_129_12.current) {
              closure_129_5(true);
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            closure_129_11.current = false;
            if (closure_129_12.current) {
              closure_129_4(false);
            }
            c5 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else if (closure_129_12.current) {
            const obj8 = { days: closure_129_13, categoryId: closure_129_1 };
            const favoritesCleanupCandidates = closure_0(tmp72[9]).getFavoritesCleanupCandidates(obj8);
            closure_128_0 = favoritesCleanupCandidates.map((id) => id.id);
            const _Set = Set;
            const set = new Set(closure_128_0);
            closure_129_8(set);
            closure_129_10(closure_128_0);
            const obj = closure_0(tmp72[9]);
            const favoriteThreadIdsForCleanup = closure_0(tmp72[9]).getFavoriteThreadIdsForCleanup(closure_129_1);
            closure_129_6(favoriteThreadIdsForCleanup.filter((item) => {
              channel = channel.getChannel(item);
              let threadMetadata;
              if (channel != null) {
                threadMetadata = channel.threadMetadata;
              }
              return null == threadMetadata;
            }).length);
            closure_129_3("review");
            c3 = 1;
            const obj3 = closure_0(tmp72[9]);
          } else {
            c3 = 0;
            closure_129_11.current = false;
            if (closure_129_12.current) {
              closure_129_4(false);
            }
            c5 = 3;
            return { value: "HermesInternal", done: null };
          }
          c3 = 0;
          closure_129_11.current = false;
          if (closure_129_12.current) {
            closure_129_4(false);
          }
        }
        c3 = 0;
        closure_129_11.current = false;
        if (closure_129_12.current) {
          closure_129_4(false);
        }
        throw tmp72;
      } catch (tmp72) {
        if (tmp5 === c3) {
          c5 = tmp3;
          throw tmp72;
        } else if (tmp2 === tmp74) {
          c4 = tmp2;
        } else {
          c4 = tmp;
        }
      }
    }
  };
  closure_19 = async function _remove() {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c4 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            if (!ref.current) {
              if (0 !== length.length) {
                ref.current = true;
                _slicedToArray(true);
                noop(false);
                c3 = 2;
                const obj4 = { days, categoryId };
                c1 = 3;
                c4 = 1;
                const obj6 = { value: tmp4(tmp39[10]).removeInactiveFavoriteThreads(length.map((id) => id.id), obj4), done: false };
                return obj6;
              }
            }
            c4 = 3;
          }
        } else if (1 !== tmp8) {
          if (2 === tmp8) {
            c3 = 1;
            if (closure_128_12.current) {
              closure_128_5(true);
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            closure_128_11.current = false;
            if (closure_128_12.current) {
              closure_128_4(false);
            }
            c4 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            if (closure_128_12.current) {
              closure_128_0();
            }
            c3 = 1;
          }
          c3 = 0;
          closure_128_11.current = false;
          if (closure_128_12.current) {
            closure_128_4(false);
          }
        }
        c3 = 0;
        closure_128_11.current = false;
        if (closure_128_12.current) {
          closure_128_4(false);
        }
        throw tmp39;
      } catch (tmp39) {
        if (tmp5 === c3) {
          c4 = tmp3;
          throw tmp39;
        } else if (tmp2 === tmp41) {
          c1 = tmp2;
        } else {
          c1 = tmp;
        }
      }
    }
  };
  const tmp2 = _slicedToArray(noop.useState("30"), 2);
  const first = tmp2[0];
  const tmp4 = _slicedToArray(noop.useState(null), 2);
  const first1 = tmp4[0];
  const tmp6 = _slicedToArray(noop.useState("filter"), 2);
  const first2 = tmp6[0];
  closure_3 = tmp8;
  let obj = first1(first2[7])();
  const tmp = first2;
  [tmp10, _slicedToArray] = noop.useState(false);
  const tmp11 = _slicedToArray(noop.useState(false), 2);
  noop = tmp11[1];
  const tmp12 = _slicedToArray(noop.useState(0), 2);
  closure_6 = tmp12[1];
  const tmp9 = _slicedToArray(noop.useState(false), 2);
  [first3, closure_8] = noop.useState(new Set());
  const tmp16 = _slicedToArray(noop.useState([]), 2);
  const first4 = tmp16[0];
  closure_10 = tmp18;
  closure_11 = noop.useRef(false);
  closure_12 = noop.useRef(true);
  const effect = noop.useEffect(() => {
    closure_12.current = true;
    return () => {
      closure_1_12.current = false;
    };
  }, []);
  const NumberResult = Number(first);
  closure_13 = NumberResult;
  let isMatch = /^\d+$/.test(first);
  if (isMatch) {
    const _Number = Number;
    isMatch = Number.isSafeInteger(NumberResult);
  }
  if (isMatch) {
    isMatch = NumberResult >= 1;
  }
  if (isMatch) {
    isMatch = NumberResult <= 36500;
  }
  let obj2 = /^\d+$/;
  let set = new Set();
  let items = [first4, closure_6, first3, closure_8];
  const items1 = [first2, NumberResult, first1, first3];
  const stateFromStoresArray = require("initialize").useStateFromStoresArray(items, () => {
    if ("filter" === first2) {
      let items = [];
    } else {
      const obj2 = { days: NumberResult, categoryId: first1 };
      const favoritesCleanupCandidates = FavoritesCleanup.getFavoritesCleanupCandidates(obj2);
      items = favoritesCleanupCandidates.filter((id) => set.has(id.id));
    }
    return items;
  }, items1);
  const found = stateFromStoresArray.filter((id) => first4.includes(id.id));
  closure_17 = tmp22;
  let obj3 = require("initialize");
  return {
    categories: obj.flatMap((id) => {
      if (null == id.id) {
        let items = [];
      } else {
        const obj = { id: null, name: null };
        ({ id: obj.id, name: obj.name } = id);
        items = [obj];
      }
      return items;
    }),
    days: first,
    setDays: tmp2[1],
    validDays: isMatch,
    categoryId: first1,
    setCategoryId: tmp4[1],
    stage: first2,
    setStage: tmp6[1],
    loading: tmp10,
    error: tmp11[0],
    unknownCount: tmp12[0],
    candidates: stateFromStoresArray,
    selectedIds: first4,
    setSelectedIds: tmp16[1],
    selectedThreads: found,
    allSelected: stateFromStoresArray.length > 0 && found.length === stateFromStoresArray.length,
    toggleSelection() {
      if (closure_17) {
        let items = [];
      } else {
        items = stateFromStoresArray.map((id) => id.id);
      }
      closure_10(items);
    },
    review() {
      const self = this;
      const apply = closure_18.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    },
    remove() {
      const self = this;
      const apply = closure_19.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
  };
};