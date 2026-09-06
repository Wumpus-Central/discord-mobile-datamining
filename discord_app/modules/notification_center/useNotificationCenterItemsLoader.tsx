// === Module 16413: useNotificationCenterItemsLoader ===

// Module 16413 (useNotificationCenterItemsLoader)
import ReadStateActionCreators from "ReadStateActionCreators" /* 7110 */;
import NotificationCenterItemsActions from "NotificationCenterItemsActions" /* 16414 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import RecentMentionsStore from "RecentMentionsStore" /* 7637 */;
import NotificationCenterItemsStore from "NotificationCenterItemsStore" /* 7639 */;
import NotificationCenterStore from "NotificationCenterStore" /* 16412 */;

require = fn;
const ReadStateTypes = fn(4742).ReadStateTypes;
const size = fn(2);
let result = size.fileFinishedImporting("modules/notification_center/useNotificationCenterItemsLoader.tsx");

export const PAGE_SIZE_WITH_MENTIONS = 8;
export const PAGE_SIZE = 20;
export const useNotificationCenterItemsLoader = function useNotificationCenterItemsLoader(isFocused) {
  isFocused = isFocused.isFocused;
  _require = isFocused;
  const navigatedAway = isFocused.navigatedAway;
  const isDesktop = isFocused.isDesktop;
  let flag = isFocused.withMentions;
  if (flag === undefined) {
    flag = false;
  }
  const initialPageSize = isFocused.initialPageSize;
  c7 = undefined;
  let initialized;
  let obj = require("initialize");
  let items = [initialized];
  const stateFromStores = obj.useStateFromStores(items, () => initialized.shouldReload());
  closure_6 = stateFromStores.useRef(false);
  [tmp3, c7] = initialPageSize(stateFromStores.useState(false), 2);
  let tmp2 = initialPageSize(stateFromStores.useState(false), 2);
  const items1 = [c7];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(items1, () => ({ initialized: _undefined.initialized, loading: _undefined.loading, items: _undefined.items, hasMore: _undefined.hasMore, cursor: _undefined.cursor, errored: _undefined.errored }));
  initialized = stateFromStoresObject.initialized;
  items = stateFromStoresObject.items;
  const hasMore = stateFromStoresObject.hasMore;
  const cursor = stateFromStoresObject.cursor;
  const errored = stateFromStoresObject.errored;
  let obj2 = require("initialize");
  const items2 = [closure_6];
  const stateFromStoresObject1 = require("initialize").useStateFromStoresObject(items2, () => ({ everyoneFilter: closure_6.everyoneFilter, roleFilter: closure_6.roleFilter }));
  const roleFilter = stateFromStoresObject1.roleFilter;
  const everyoneFilter = stateFromStoresObject1.everyoneFilter;
  const effect = stateFromStores.useEffect(() => {
    const result = closure_0(isDesktop[8]).setNotificationCenterActive(true);
    return () => closure_1_0(isDesktop[8]).setNotificationCenterActive(false);
  }, []);
  const items3 = [isFocused, initialized];
  const effect1 = stateFromStores.useEffect(() => {
    let tmp = initialized;
    if (initialized) {
      tmp = closure_0;
    }
    if (tmp) {
      ReadStateActionCreators.ackUserFeature(ReadStateTypes.NOTIFICATION_CENTER);
    }
  }, items3);
  let tmp8 = navigatedAway(isDesktop[10])();
  closure_15 = tmp8;
  const items4 = [navigatedAway, items, isDesktop, tmp8, errored];
  const effect2 = stateFromStores.useEffect(() => () => {
    if (closure_1_2) {
      const tmp7 = closure_1_15();
      let tmp8 = !tmp7;
      if (!tmp7) {
        let tmp9 = errored;
        if (!errored) {
          tmp9 = items.length > 100;
        }
        tmp8 = tmp9;
      }
      if (tmp8) {
        const result = closure_0(isDesktop[8]).resetNotificationCenter();
        const obj2 = closure_0(isDesktop[8]);
      }
    } else {
      let tmp = navigatedAway;
      if (navigatedAway) {
        tmp = items.length > 100;
      }
      if (tmp) {
        const result1 = closure_0(isDesktop[8]).resetNotificationCenter();
        const obj = closure_0(isDesktop[8]);
      }
    }
  }, items4);
  const items5 = [initialized, stateFromStores, isFocused, flag, roleFilter, everyoneFilter, initialPageSize];
  const effect3 = stateFromStores.useEffect(() => {
    let tmp = !initialized;
    if (initialized) {
      let tmp2 = stateFromStores;
      if (stateFromStores) {
        tmp2 = closure_0;
      }
      tmp = tmp2;
    }
    if (tmp) {
      let obj = NotificationCenterItemsActions;
      let tmp5 = initialPageSize;
      if (initialPageSize == null) {
        let num = 20;
        if (flag) {
          num = 8;
        }
        tmp5 = num;
      }
      obj = { limit: tmp5, with_mentions: flag, roles_filter: roleFilter, everyone_filter: everyoneFilter };
      const notificationCenterItems = obj.fetchNotificationCenterItems(obj);
    }
  }, items5);
  _require = flag(function*(arg0, value) {
    if (with_mentions === 2) {
      with_mentions = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        with_mentions = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            with_mentions = 3;
            throw value;
          } else if (arg0 === 2) {
            with_mentions = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_1 = tmp2;
            let current = ref.current;
            if (!current) {
              current = !initialized;
            }
            if (!current) {
              current = !hasMore;
            }
            if (!current) {
              current = null == after;
            }
            if (!current) {
              let tmp13 = !tmp27;
              if (!tmp27) {
                tmp13 = errored;
              }
              current = tmp13;
            }
            if (current) {
              with_mentions = 3;
            } else {
              tmp28.current = true;
              _undefined(true);
              let obj1 = closure_0(isDesktop[8]);
              obj1 = { after, with_mentions, roles_filter, everyone_filter, limit: null };
              let num7 = 20;
              if (with_mentions) {
                num7 = 8;
              }
              obj1.limit = num7;
              c2 = 1;
              with_mentions = 1;
              const obj2 = {
                value: obj1.fetchNotificationCenterItems(obj1, () => {
                            ref.current = false;
                          }),
                done: false
              };
              return obj2;
            }
            tmp28 = ref;
          }
        } else if (arg0 === 1) {
          with_mentions = 3;
          throw value;
        } else if (arg0 !== 2) {
          _undefined(false);
        }
        with_mentions = 3;
        obj = { value, done: true };
        return obj;
      } catch (tmp22) {
        with_mentions = tmp;
        throw tmp22;
      }
    }
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
    setReadNotifItemToAcked(addResult) {
      if (!addResult.acked) {
        addResult.acked = true;
      }
    },
    errored
  };
  return obj;
};