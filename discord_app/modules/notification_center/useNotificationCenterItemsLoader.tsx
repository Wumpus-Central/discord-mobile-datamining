// === Module 15669: PAGE_SIZE_WITH_MENTIONS ===

// Module 15669 (PAGE_SIZE_WITH_MENTIONS)
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "_slicedToArray" /* 32 */;
import closure_5 from "noop" /* 19 */;
import closure_6 from "findOrCreateMessageRecord" /* 5384 */;
import closure_7 from "_validate" /* 4801 */;
import closure_8 from "handleLoadFinished" /* 15668 */;
import { ReadStateTypes } from "ReadStateTypes" /* 5044 */;

const require = arg1;
let result = require("set").fileFinishedImporting("modules/notification_center/useNotificationCenterItemsLoader.tsx");

export const PAGE_SIZE_WITH_MENTIONS = 8;
export const PAGE_SIZE = 20;
export const useNotificationCenterItemsLoader = function useNotificationCenterItemsLoader(isFocused) {
  isFocused = isFocused.isFocused;
  let _require = isFocused;
  const navigatedAway = isFocused.navigatedAway;
  const isDesktop = isFocused.isDesktop;
  let flag = isFocused.withMentions;
  if (flag === undefined) {
    flag = false;
  }
  const initialPageSize = isFocused.initialPageSize;
  let stateFromStores;
  closure_6 = undefined;
  c7 = undefined;
  let initialized;
  let items;
  let hasMore;
  let cursor;
  let errored;
  let roleFilter;
  let everyoneFilter;
  closure_15 = undefined;
  let obj = _require(isDesktop[7]);
  items = [initialized];
  stateFromStores = obj.useStateFromStores(items, () => initialized.shouldReload());
  closure_6 = stateFromStores.useRef(false);
  [tmp3, c7] = initialPageSize(stateFromStores.useState(false), 2);
  let tmp2 = initialPageSize(stateFromStores.useState(false), 2);
  const items1 = [c7];
  const stateFromStoresObject = _require(isDesktop[7]).useStateFromStoresObject(items1, () => ({ initialized: _undefined.initialized, loading: _undefined.loading, items: _undefined.items, hasMore: _undefined.hasMore, cursor: _undefined.cursor, errored: _undefined.errored }));
  initialized = stateFromStoresObject.initialized;
  items = stateFromStoresObject.items;
  hasMore = stateFromStoresObject.hasMore;
  cursor = stateFromStoresObject.cursor;
  errored = stateFromStoresObject.errored;
  let obj2 = _require(isDesktop[7]);
  const items2 = [closure_6];
  const stateFromStoresObject1 = _require(isDesktop[7]).useStateFromStoresObject(items2, () => ({ everyoneFilter: closure_6.everyoneFilter, roleFilter: closure_6.roleFilter }));
  roleFilter = stateFromStoresObject1.roleFilter;
  everyoneFilter = stateFromStoresObject1.everyoneFilter;
  const effect = stateFromStores.useEffect(() => {
    const result = callback(isDesktop[8]).setNotificationCenterActive(true);
    return () => callback(table[8]).setNotificationCenterActive(false);
  }, []);
  const items3 = [isFocused, initialized];
  const effect1 = stateFromStores.useEffect(() => {
    let tmp = initialized;
    if (initialized) {
      tmp = callback;
    }
    if (tmp) {
      callback(isDesktop[9]).ackUserFeature(items.NOTIFICATION_CENTER);
      const obj = callback(isDesktop[9]);
    }
  }, items3);
  let tmp8 = navigatedAway(isDesktop[10])();
  closure_15 = tmp8;
  const items4 = [navigatedAway, items, isDesktop, tmp8, errored];
  const effect2 = stateFromStores.useEffect(() => () => {
    if (closure_2) {
      const tmp7 = callback();
      let tmp8 = !tmp7;
      if (!tmp7) {
        let tmp9 = closure_12;
        if (!closure_12) {
          tmp9 = closure_9.length > 100;
        }
        tmp8 = tmp9;
      }
      if (tmp8) {
        const result = closure_1_0(closure_1_2[8]).resetNotificationCenter();
        const obj2 = closure_1_0(closure_1_2[8]);
      }
    } else {
      let tmp = closure_1;
      if (closure_1) {
        tmp = closure_9.length > 100;
      }
      if (tmp) {
        const result1 = closure_1_0(closure_1_2[8]).resetNotificationCenter();
        const obj = closure_1_0(closure_1_2[8]);
      }
    }
  }, items4);
  const items5 = [initialized, stateFromStores, isFocused, flag, roleFilter, everyoneFilter, initialPageSize];
  const effect3 = stateFromStores.useEffect(() => {
    let tmp = !initialized;
    if (initialized) {
      let tmp2 = stateFromStores;
      if (stateFromStores) {
        tmp2 = callback;
      }
      tmp = tmp2;
    }
    if (tmp) {
      let obj = callback(isDesktop[8]);
      let tmp5 = initialPageSize;
      if (initialPageSize == null) {
        let num = 20;
        if (flag) {
          num = 8;
        }
        tmp5 = num;
      }
      obj = { limit: null, with_mentions: null, roles_filter: null, everyone_filter: null };
      obj[0] = tmp5;
      obj[1] = flag;
      obj[2] = roleFilter;
      obj[3] = everyoneFilter;
      const notificationCenterItems = obj.fetchNotificationCenterItems(obj);
    }
  }, items5);
  _require = undefined;
  _require = flag((arg0) => {
    closure_0 = arg0;
    c2 = 0;
    c3 = 0;
    return (function*(arg0) {
      if (c3 === 2) {
        c3 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_1 = tmp2;
              let current = closure_1_6.current;
              if (!current) {
                current = !closure_1_8;
              }
              if (!current) {
                current = !closure_1_10;
              }
              if (!current) {
                current = null == closure_1_11;
              }
              if (!current) {
                let tmp13 = !tmp28;
                if (!tmp28) {
                  tmp13 = closure_1_12;
                }
                current = tmp13;
              }
              if (current) {
                c3 = 3;
              } else {
                tmp29.current = true;
                closure_1_7(true);
                obj1 = callback(isDesktop[8]);
                obj1 = { after: null, with_mentions: null, roles_filter: null, everyone_filter: null, limit: null };
                obj1[0] = closure_1_11;
                obj1[1] = c3;
                obj1[2] = closure_1_13;
                obj1[3] = closure_1_14;
                let num7 = 20;
                if (c3) {
                  num7 = 8;
                }
                obj1[4] = num7;
                c2 = 1;
                c3 = 1;
                const obj2 = { value: null, done: false };
                obj2[0] = obj1.fetchNotificationCenterItems(obj1, () => {
                  closure_6.current = false;
                });
                return obj2;
              }
              tmp29 = closure_1_6;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            closure_1_7(false);
          }
          c3 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } catch (tmp22) {
          c3 = tmp;
          throw tmp22;
        }
      }
    })();
  });
  const items6 = [initialized, hasMore, cursor, errored, flag, roleFilter, everyoneFilter];
  obj = {
    initialized,
    loading: stateFromStoresObject.loading,
    items,
    hasMore,
    loadMore: stateFromStores.useCallback(function() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }, items6),
    loadingMore: tmp3,
    setReadNotifItemToAcked(acked) {
      if (!acked.acked) {
        acked.acked = true;
      }
    },
    errored
  };
  return obj;
};