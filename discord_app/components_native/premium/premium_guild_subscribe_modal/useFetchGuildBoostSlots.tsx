// === Module 13399: useFetchGuildBoostSlots ===

// Module 13399 (useFetchGuildBoostSlots)
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildBoostSlotStore from "GuildBoostSlotStore" /* 6918 */;
import AppStateStore from "AppStateStore" /* 1986 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c2;

let _slicedToArray = _slicedToArray_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let closure_1;
  let first;
  let hasFetched;
  let ref;
  let state;
  let stateFromStores;
  let tmp10;
  let tmp11;
  let tmp6;
  let tmp7;
  let tmp = first;
  let obj = first(stateFromStores[6]);
  const cResult = obj.c(9);
  [first, closure_1] = react.useState(true);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [GuildBoostSlotStore];
    const fn = function l() {
      return hasFetched.hasFetched;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp6 = items;
    tmp7 = fn;
  } else {
    [tmp6, tmp7] = cResult;
  }
  const tmpResult = tmp(stateFromStores[7]);
  stateFromStores = tmpResult.useStateFromStores(tmp6, tmp7);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [AppStateStore];
    class F {
      constructor() {
        return state.getState();
      }
    }
    cResult[2] = items1;
    cResult[3] = F;
    tmp11 = F;
    tmp10 = items1;
  } else {
    tmp10 = cResult[2];
    tmp11 = cResult[3];
  }
  const tmpResult2 = tmp(stateFromStores[7]);
  const stateFromStores1 = tmpResult2.useStateFromStores(tmp10, tmp11);
  _slicedToArray = react.useRef(stateFromStores1);
  if (cResult[4] === stateFromStores1) {
    if (cResult[5] === stateFromStores) {
      let tmp14;
      let tmp15;
      if (cResult[6] === first) {
        tmp14 = cResult[7];
        tmp15 = cResult[8];
      }
      const effect = react.useEffect(tmp14, tmp15);
      return first;
    }
  }
  const fn2 = function b() {
    function fetch() {
      return closure_0(...arguments);
    }
    const tmp = closure_0;
    if (tmp) {
      closure_0 = stateFromStores1(function*() {
        let v1;
        if (c2 === 2) {
          c2 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj4 = { value, done: true };
            return obj4;
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          try {
            c2 = 2;
            if (0 === v1) {
              if (arg0 === 1) {
                c2 = 3;
                throw value;
              } else if (arg0 === 2) {
                c2 = 3;
                const obj5 = { value, done: true };
                return obj5;
              } else {
                let resolved;
                const items = [, , ];
                const obj7 = closure_2_1(stateFromStores[9]);
                items[0] = obj7.init();
                const tmp18 = c2;
                if (tmp18) {
                  resolved = Promise.resolve();
                } else {
                  const obj2 = tmp(stateFromStores[10]);
                  resolved = obj2.fetchGuildBoostSlots();
                }
                items[1] = resolved;
                const obj3 = tmp(stateFromStores[10]);
                items[2] = obj3.fetchAppliedGuildBoostsForUser();
                v1 = 1;
                c2 = 1;
                const obj6 = { value: all(items), done: false };
                return obj6;
              }
            } else if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              v1(false);
              c2 = 3;
              return { value: "IconComponent", done: null };
            }
          } catch (tmp11) {
            c2 = 3;
            throw tmp11;
          }
        }
      });
      ref.current = stateFromStores1;
      fetch();
    }
  };
  const items2 = [stateFromStores1, stateFromStores, first];
  cResult[4] = stateFromStores1;
  cResult[5] = stateFromStores;
  cResult[6] = first;
  cResult[7] = fn2;
  cResult[8] = items2;
  tmp15 = items2;
  tmp14 = fn2;
}) : (() => {
  let closure_1;
  let first;
  let hasFetched;
  let ref;
  let state;
  let stateFromStores;
  [first, closure_1] = react.useState(true);
  let obj = first(stateFromStores[7]);
  let items = [GuildBoostSlotStore];
  stateFromStores = obj.useStateFromStores(items, () => hasFetched.hasFetched);
  let obj2 = first(stateFromStores[7]);
  const items1 = [AppStateStore];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => state.getState());
  _slicedToArray = react.useRef(stateFromStores1);
  const items2 = [stateFromStores1, stateFromStores, first];
  const effect = react.useEffect(() => {
    let obj;
    function fetch() {
      return obj(...arguments);
    }
    const tmp = obj;
    if (tmp) {
      obj = function _fetch2() {
        obj = _asyncToGenerator(async () => {
          let v1;
          if (c2 === 2) {
            c2 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj4 = { value, done: true };
              return obj4;
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            try {
              c2 = 2;
              if (0 === v1) {
                if (arg0 === 1) {
                  c2 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c2 = 3;
                  const obj5 = { value, done: true };
                  return obj5;
                } else {
                  let resolved;
                  let closure_0 = tmp;
                  const items = [, , ];
                  const obj7 = closure_2_1(stateFromStores[9]);
                  items[0] = obj7.init();
                  const tmp18 = c2;
                  if (tmp18) {
                    resolved = Promise.resolve();
                  } else {
                    const obj2 = closure_2_0(stateFromStores[10]);
                    resolved = obj2.fetchGuildBoostSlots();
                  }
                  items[1] = resolved;
                  const obj3 = closure_2_0(stateFromStores[10]);
                  items[2] = obj3.fetchAppliedGuildBoostsForUser();
                  v1 = 1;
                  c2 = 1;
                  const obj6 = { value: all(items), done: false };
                  return obj6;
                }
              } else if (arg0 === 1) {
                c2 = 3;
                throw value;
              } else if (arg0 === 2) {
                c2 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                v1(false);
                c2 = 3;
                return { value: "IconComponent", done: null };
              }
            } catch (tmp11) {
              c2 = 3;
              throw tmp11;
            }
          }
        });
        return obj(...arguments);
      };
      ref.current = stateFromStores1;
      fetch();
    }
  }, items2);
  return first;
});
const result = size.fileFinishedImporting("components_native/premium/premium_guild_subscribe_modal/useFetchGuildBoostSlots.tsx");

export default tmp2;