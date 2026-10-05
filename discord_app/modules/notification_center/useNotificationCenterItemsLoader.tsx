// discord_app/modules/notification_center/useNotificationCenterItemsLoader.tsx
import ReadStateConstants from "../read_states/ReadStateConstants.tsx";
import ReadStateActionCreators from "../../actions/ReadStateActionCreators.tsx";
import NotificationCenterItemsActions from "NotificationCenterItemsActions.tsx";
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import _slicedToArray_mod from "../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../_runtime/00019_react.js";
import RecentMentionsStore from "../inbox/RecentMentionsStore.tsx";
import NotificationCenterItemsStore from "NotificationCenterItemsStore.tsx";
import NotificationCenterStore from "NotificationCenterStore.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

let _require, c2, c3, isFocused;

let _slicedToArray = _slicedToArray_mod;
const ReadStateTypes = ReadStateConstants.ReadStateTypes;
let c10 = 100;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (isFocused) => {
      let initialPageSize;
      let initialized;
      let isDesktop;
      let items;
      let loading;
      let tmp10;
      let tmp11;
      let tmp12;
      let tmp15;
      let tmp16;
      let tmp19;
      let tmp20;
      let tmp5;
      let tmp6;
      let withMentions;
      let with_mentions;
      let tmp = isFocused;
      let tmp2 = isDesktop;
      let obj = isFocused(isDesktop[8]);
      const cResult = obj.c(45);
      isFocused = isFocused.isFocused;
      const navigatedAway = isFocused.navigatedAway;
      isDesktop = isFocused.isDesktop;
      ({ withMentions, initialPageSize } = isFocused);
      _slicedToArray = tmp4;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [initialized];
        const fn = function v() {
          return initialized.shouldReload();
        };
        let num = 0;
        cResult[0] = items1;
        cResult[1] = fn;
        tmp6 = fn;
        tmp5 = items1;
      } else {
        [tmp5, tmp6] = cResult;
      }
      const tmpResult = tmp(tmp2[9]);
      const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
      let obj3 = stateFromStores;
      let closure_6 = stateFromStores.useRef(false);
      const tmp9 = _slicedToArray(stateFromStores.useState(false), 2);
      [tmp10, NotificationCenterItemsStore] = tmp9;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [NotificationCenterItemsStore];
        const fn2 = function b() {
          return {
            initialized: NotificationCenterItemsStore.initialized,
            loading: NotificationCenterItemsStore.loading,
            items: NotificationCenterItemsStore.items,
            hasMore: NotificationCenterItemsStore.hasMore,
            cursor: NotificationCenterItemsStore.cursor,
            errored: NotificationCenterItemsStore.errored,
          };
        };
        cResult[2] = items2;
        cResult[3] = fn2;
        tmp12 = fn2;
        tmp11 = items2;
      } else {
        tmp11 = cResult[2];
        tmp12 = cResult[3];
      }
      const tmpResult3 = tmp(tmp2[9]);
      const stateFromStoresObject = tmpResult3.useStateFromStoresObject(tmp11, tmp12);
      initialized = stateFromStoresObject.initialized;
      ({ loading, items } = stateFromStoresObject);
      const hasMore = stateFromStoresObject.hasMore;
      const cursor = stateFromStoresObject.cursor;
      const errored = stateFromStoresObject.errored;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        let tmp17 = closure_6;
        const items3 = [closure_6];
        const fn3 = function w() {
          return { everyoneFilter: closure_6.everyoneFilter, roleFilter: closure_6.roleFilter };
        };
        cResult[4] = items3;
        cResult[5] = fn3;
        tmp16 = fn3;
        tmp15 = items3;
      } else {
        tmp15 = cResult[4];
        tmp16 = cResult[5];
      }
      const tmpResult4 = tmp(tmp2[9]);
      const stateFromStoresObject1 = tmpResult4.useStateFromStoresObject(tmp15, tmp16);
      const roleFilter = stateFromStoresObject1.roleFilter;
      const everyoneFilter = stateFromStoresObject1.everyoneFilter;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const fn4 = function x() {
          let obj = isFocused(isDesktop[10]);
          const result = obj.setNotificationCenterActive(true);
          return () => {
            const obj = isFocused(isDesktop[10]);
            return obj.setNotificationCenterActive(false);
          };
        };
        const items4 = [];
        cResult[6] = fn4;
        let num7 = 7;
        cResult[7] = items4;
        tmp20 = items4;
        tmp19 = fn4;
      } else {
        tmp19 = cResult[6];
        tmp20 = cResult[7];
      }
      const effect = obj3.useEffect(tmp19, tmp20);
      if (cResult[8] === initialized) {
        let tmp22;
        let tmp23;
        if (cResult[9] === isFocused) {
          tmp22 = cResult[10];
          tmp23 = cResult[11];
        }
        const effect1 = obj3.useEffect(tmp22, tmp23);
        const tmp26 = navigatedAway(tmp2[12])();
        let closure_15 = tmp26;
        if (cResult[12] === errored) {
          if (cResult[13] === isDesktop) {
            if (cResult[14] === tmp26) {
              if (cResult[15] === items) {
                let tmp27;
                let tmp28;
                if (cResult[16] === navigatedAway) {
                  tmp27 = cResult[17];
                  tmp28 = cResult[18];
                }
                const effect2 = obj3.useEffect(tmp27, tmp28);
                if (cResult[19] === everyoneFilter) {
                  if (cResult[20] === initialPageSize) {
                    if (cResult[21] === initialized) {
                      if (cResult[22] === isFocused) {
                        if (cResult[23] === roleFilter) {
                          if (cResult[24] === stateFromStores) {
                            let tmp30;
                            let tmp31;
                            if (cResult[25] === (undefined !== withMentions && withMentions)) {
                              tmp30 = cResult[26];
                              tmp31 = cResult[27];
                            }
                            const effect3 = obj3.useEffect(tmp30, tmp31);
                            if (cResult[28] === cursor) {
                              if (cResult[29] === errored) {
                                if (cResult[30] === everyoneFilter) {
                                  if (cResult[31] === hasMore) {
                                    if (cResult[32] === initialized) {
                                      if (cResult[33] === roleFilter) {
                                        let tmp33;
                                        if (cResult[34] === (undefined !== withMentions && withMentions)) {
                                          tmp33 = cResult[35];
                                        }
                                        const _Symbol = Symbol;
                                        class X {
                                          constructor() {
                                            let tmp = !initialized;
                                            if (initialized) {
                                              tmp = stateFromStores && isFocused;
                                            }
                                            if (tmp) {
                                              let tmp6 = initialPageSize;
                                              const fetchNotificationCenterItems =
                                                NotificationCenterItemsActions.fetchNotificationCenterItems;
                                              NotificationCenterItemsActions;
                                              if (initialPageSize == null) {
                                                let num = 20;
                                                if (with_mentions) {
                                                  num = 8;
                                                }
                                                tmp6 = num;
                                              }
                                              const obj = {
                                                limit: tmp6,
                                                with_mentions,
                                                roles_filter: roleFilter,
                                                everyone_filter: everyoneFilter,
                                              };
                                              const notificationCenterItems = fetchNotificationCenterItems(obj);
                                            }
                                          }
                                        }
                                        if (cResult[37] === errored) {
                                          if (cResult[38] === hasMore) {
                                            if (cResult[39] === initialized) {
                                              if (cResult[40] === items) {
                                                if (cResult[41] === tmp33) {
                                                  if (cResult[42] === loading) {
                                                    let tmp36;
                                                    if (cResult[43] === tmp10) {
                                                      tmp36 = cResult[44];
                                                    }
                                                    return tmp36;
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                        let obj2 = {
                                          initialized: null,
                                          loading,
                                          items,
                                          hasMore,
                                          loadMore: tmp33,
                                          loadingMore: tmp10,
                                          setReadNotifItemToAcked: tmp35,
                                          errored,
                                        };
                                        class Q {
                                          constructor() {
                                            return () => {
                                              if (closure_1_2) {
                                                let tmp10 = !closure_1_15();
                                                closure_1_15();
                                                if (tmp10) {
                                                  tmp10 = errored || items.length > hasMore;
                                                  const tmp11 = errored || items.length > hasMore;
                                                }
                                                if (tmp10) {
                                                  const obj2 = isFocused(isDesktop[10]);
                                                  const result = obj2.resetNotificationCenter();
                                                }
                                              } else {
                                                const tmp2 = navigatedAway && items.length > hasMore;
                                                if (tmp2) {
                                                  const obj = isFocused(isDesktop[10]);
                                                  const result1 = obj.resetNotificationCenter();
                                                }
                                              }
                                            };
                                          }
                                        }
                                        cResult[37] = errored;
                                        cResult[38] = hasMore;
                                        cResult[39] = initialized;
                                        cResult[40] = items;
                                        cResult[41] = tmp33;
                                        cResult[42] = loading;
                                        cResult[43] = tmp10;
                                        cResult[44] = obj2;
                                        tmp36 = obj2;
                                      }
                                    }
                                  }
                                }
                              }
                            }
                            class X {
                              constructor() {
                                let tmp = !initialized;
                                if (initialized) {
                                  tmp = stateFromStores && isFocused;
                                }
                                if (tmp) {
                                  let tmp6 = initialPageSize;
                                  const fetchNotificationCenterItems =
                                    NotificationCenterItemsActions.fetchNotificationCenterItems;
                                  NotificationCenterItemsActions;
                                  if (initialPageSize == null) {
                                    let num = 20;
                                    if (with_mentions) {
                                      num = 8;
                                    }
                                    tmp6 = num;
                                  }
                                  const obj = {
                                    limit: tmp6,
                                    with_mentions,
                                    roles_filter: roleFilter,
                                    everyone_filter: everyoneFilter,
                                  };
                                  const notificationCenterItems = fetchNotificationCenterItems(obj);
                                }
                              }
                            }
                            _require = initialPageSize(function* (arg0) {
                              let num7;
                              closure_0 = arg0;
                              if (c3 === 2) {
                                c3 = 3;
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
                                  c3 = 2;
                                  if (0 === c2) {
                                    if (arg0 === 1) {
                                      c3 = 3;
                                      throw value;
                                    } else if (arg0 === 2) {
                                      c3 = 3;
                                      const obj3 = { value, done: true };
                                      return obj3;
                                    } else {
                                      let closure_1 = tmp;
                                      let current = ref.current || !initialized || !hasMore || null == after;
                                      if (!current) {
                                        const tmp12 = !closure_0 && errored;
                                        current = tmp12;
                                      }
                                      if (!current) {
                                        ref.current = true;
                                        closure_1_7(true);
                                        const obj4 = {
                                          after,
                                          with_mentions,
                                          roles_filter,
                                          everyone_filter,
                                          limit: num7,
                                        };
                                        num7 = 20;
                                        const fetchNotificationCenterItems = closure_0(
                                          isDesktop[10],
                                        ).fetchNotificationCenterItems;
                                        const tmp17 = closure_0(isDesktop[10]);
                                        if (with_mentions) {
                                          num7 = 8;
                                        }
                                        c2 = 1;
                                        c3 = 1;
                                        const obj5 = {
                                          value: fetchNotificationCenterItems(obj4, () => {
                                            ref.current = false;
                                          }),
                                          done: false,
                                        };
                                        return obj5;
                                      }
                                    }
                                  } else if (arg0 === 1) {
                                    c3 = 3;
                                    throw value;
                                  } else if (arg0 === 2) {
                                    c3 = 3;
                                    const obj = { value, done: true };
                                    return obj;
                                  } else {
                                    closure_1_7(false);
                                  }
                                  c3 = 3;
                                  return { value: "IconComponent", done: null };
                                } catch (tmp22) {
                                  c3 = 3;
                                  throw tmp22;
                                }
                              }
                            });
                            const fn5 = function () {
                              return closure_0(...arguments);
                            };
                            class Q {
                              constructor() {
                                return () => {
                                  if (closure_1_2) {
                                    let tmp10 = !closure_1_15();
                                    closure_1_15();
                                    if (tmp10) {
                                      tmp10 = errored || items.length > hasMore;
                                      const tmp11 = errored || items.length > hasMore;
                                    }
                                    if (tmp10) {
                                      const obj2 = isFocused(isDesktop[10]);
                                      const result = obj2.resetNotificationCenter();
                                    }
                                  } else {
                                    const tmp2 = navigatedAway && items.length > hasMore;
                                    if (tmp2) {
                                      const obj = isFocused(isDesktop[10]);
                                      const result1 = obj.resetNotificationCenter();
                                    }
                                  }
                                };
                              }
                            }
                            cResult[28] = cursor;
                            cResult[29] = errored;
                            cResult[30] = everyoneFilter;
                            cResult[31] = hasMore;
                            cResult[32] = initialized;
                            cResult[33] = roleFilter;
                            cResult[34] = undefined !== withMentions && withMentions;
                            cResult[35] = fn5;
                            tmp33 = fn5;
                          }
                        }
                      }
                    }
                  }
                }
                class X {
                  constructor() {
                    let tmp = !initialized;
                    if (initialized) {
                      tmp = stateFromStores && isFocused;
                    }
                    if (tmp) {
                      let tmp6 = initialPageSize;
                      const fetchNotificationCenterItems = NotificationCenterItemsActions.fetchNotificationCenterItems;
                      NotificationCenterItemsActions;
                      if (initialPageSize == null) {
                        let num = 20;
                        if (with_mentions) {
                          num = 8;
                        }
                        tmp6 = num;
                      }
                      const obj = {
                        limit: tmp6,
                        with_mentions,
                        roles_filter: roleFilter,
                        everyone_filter: everyoneFilter,
                      };
                      const notificationCenterItems = fetchNotificationCenterItems(obj);
                    }
                  }
                }
                const items5 = [initialized, , , , , ,];
                class Q {
                  constructor() {
                    return () => {
                      if (closure_1_2) {
                        let tmp10 = !closure_1_15();
                        closure_1_15();
                        if (tmp10) {
                          tmp10 = errored || items.length > hasMore;
                          const tmp11 = errored || items.length > hasMore;
                        }
                        if (tmp10) {
                          const obj2 = isFocused(isDesktop[10]);
                          const result = obj2.resetNotificationCenter();
                        }
                      } else {
                        const tmp2 = navigatedAway && items.length > hasMore;
                        if (tmp2) {
                          const obj = isFocused(isDesktop[10]);
                          const result1 = obj.resetNotificationCenter();
                        }
                      }
                    };
                  }
                }
                items5[2] = isFocused;
                items5[3] = undefined !== withMentions && withMentions;
                items5[4] = roleFilter;
                items5[5] = everyoneFilter;
                items5[6] = initialPageSize;
                cResult[19] = everyoneFilter;
                cResult[20] = initialPageSize;
                cResult[21] = initialized;
                cResult[22] = isFocused;
                cResult[23] = roleFilter;
                cResult[24] = stateFromStores;
                cResult[25] = undefined !== withMentions && withMentions;
                cResult[26] = X;
                cResult[27] = items5;
                tmp31 = items5;
                tmp30 = X;
              }
            }
          }
        }
        class Q {
          constructor() {
            return () => {
              if (closure_1_2) {
                let tmp10 = !closure_1_15();
                closure_1_15();
                if (tmp10) {
                  tmp10 = errored || items.length > hasMore;
                  const tmp11 = errored || items.length > hasMore;
                }
                if (tmp10) {
                  const obj2 = isFocused(isDesktop[10]);
                  const result = obj2.resetNotificationCenter();
                }
              } else {
                const tmp2 = navigatedAway && items.length > hasMore;
                if (tmp2) {
                  const obj = isFocused(isDesktop[10]);
                  const result1 = obj.resetNotificationCenter();
                }
              }
            };
          }
        }
        const items6 = [navigatedAway, items, isDesktop, tmp26, errored];
        cResult[12] = errored;
        cResult[13] = isDesktop;
        cResult[14] = tmp26;
        cResult[15] = items;
        cResult[16] = navigatedAway;
        cResult[17] = Q;
        cResult[18] = items6;
        tmp28 = items6;
        tmp27 = Q;
      }
      class W {
        constructor() {
          const tmp = initialized && isFocused;
          if (tmp) {
            const obj = ReadStateActionCreators;
            obj.ackUserFeature(ReadStateTypes.NOTIFICATION_CENTER);
          }
        }
      }
      const items7 = [isFocused, initialized];
      cResult[8] = initialized;
      cResult[9] = isFocused;
      cResult[10] = W;
      cResult[11] = items7;
      tmp23 = items7;
      tmp22 = W;
    }
  : (isFocused) => {
      let _undefined;
      let c7;
      let tmp3;
      isFocused = isFocused.isFocused;
      const navigatedAway = isFocused.navigatedAway;
      const isDesktop = isFocused.isDesktop;
      let flag = isFocused.withMentions;
      if (flag === undefined) {
        flag = false;
      }
      const initialPageSize = isFocused.initialPageSize;
      c7 = undefined;
      let initialized;
      let obj = isFocused(isDesktop[9]);
      const items1 = [initialized];
      const stateFromStores = obj.useStateFromStores(items1, () => initialized.shouldReload());
      let closure_6 = stateFromStores.useRef(false);
      let tmp2 = initialPageSize(stateFromStores.useState(false), 2);
      [tmp3, c7] = tmp2;
      let obj2 = isFocused(isDesktop[9]);
      const items2 = [c7];
      const stateFromStoresObject = obj2.useStateFromStoresObject(items2, () => ({
        initialized: _undefined.initialized,
        loading: _undefined.loading,
        items: _undefined.items,
        hasMore: _undefined.hasMore,
        cursor: _undefined.cursor,
        errored: _undefined.errored,
      }));
      initialized = stateFromStoresObject.initialized;
      const items = stateFromStoresObject.items;
      const hasMore = stateFromStoresObject.hasMore;
      const cursor = stateFromStoresObject.cursor;
      const errored = stateFromStoresObject.errored;
      const loading = stateFromStoresObject.loading;
      let obj3 = isFocused(isDesktop[9]);
      const items3 = [closure_6];
      const stateFromStoresObject1 = obj3.useStateFromStoresObject(items3, () => ({
        everyoneFilter: closure_6.everyoneFilter,
        roleFilter: closure_6.roleFilter,
      }));
      const roleFilter = stateFromStoresObject1.roleFilter;
      const everyoneFilter = stateFromStoresObject1.everyoneFilter;
      const effect = stateFromStores.useEffect(() => {
        let obj = isFocused(isDesktop[10]);
        const result = obj.setNotificationCenterActive(true);
        return () => {
          const obj = isFocused(isDesktop[10]);
          return obj.setNotificationCenterActive(false);
        };
      }, []);
      const items4 = [isFocused, initialized];
      const effect1 = stateFromStores.useEffect(() => {
        const tmp = initialized && isFocused;
        if (tmp) {
          const obj = ReadStateActionCreators;
          obj.ackUserFeature(ReadStateTypes.NOTIFICATION_CENTER);
        }
      }, items4);
      const tmp8 = navigatedAway(isDesktop[12])();
      let closure_15 = tmp8;
      const items5 = [navigatedAway, items, isDesktop, tmp8, errored];
      const effect2 = stateFromStores.useEffect(
        () => () => {
          if (closure_1_2) {
            let tmp10 = !closure_1_15();
            closure_1_15();
            if (tmp10) {
              tmp10 = errored || items.length > hasMore;
              const tmp11 = errored || items.length > hasMore;
            }
            if (tmp10) {
              const obj2 = isFocused(isDesktop[10]);
              const result = obj2.resetNotificationCenter();
            }
          } else {
            const tmp2 = navigatedAway && items.length > hasMore;
            if (tmp2) {
              const obj = isFocused(isDesktop[10]);
              const result1 = obj.resetNotificationCenter();
            }
          }
        },
        items5,
      );
      const items6 = [initialized, stateFromStores, isFocused, flag, roleFilter, everyoneFilter, initialPageSize];
      const effect3 = stateFromStores.useEffect(() => {
        let tmp = !initialized;
        if (initialized) {
          tmp = stateFromStores && isFocused;
        }
        if (tmp) {
          let tmp6 = initialPageSize;
          const fetchNotificationCenterItems = NotificationCenterItemsActions.fetchNotificationCenterItems;
          NotificationCenterItemsActions;
          if (initialPageSize == null) {
            let num = 20;
            if (flag) {
              num = 8;
            }
            tmp6 = num;
          }
          const obj = { limit: tmp6, with_mentions: flag, roles_filter: roleFilter, everyone_filter: everyoneFilter };
          const notificationCenterItems = fetchNotificationCenterItems(obj);
        }
      }, items6);
      const useCallback = stateFromStores.useCallback;
      let closure_0 = flag(function* (arg0) {
        let num7;
        let with_mentions;
        closure_0 = arg0;
        if (with_mentions === 2) {
          with_mentions = 3;
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
            with_mentions = 2;
            if (0 === c2) {
              if (arg0 === 1) {
                with_mentions = 3;
                throw value;
              } else if (arg0 === 2) {
                with_mentions = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                let closure_1 = tmp;
                let current = ref.current || !initialized || !hasMore || null == after;
                if (!current) {
                  const tmp12 = !closure_0 && errored;
                  current = tmp12;
                }
                if (!current) {
                  ref.current = true;
                  _undefined(true);
                  const obj4 = { after, with_mentions, roles_filter, everyone_filter, limit: num7 };
                  num7 = 20;
                  const fetchNotificationCenterItems = closure_0(isDesktop[10]).fetchNotificationCenterItems;
                  const tmp17 = closure_0(isDesktop[10]);
                  if (with_mentions) {
                    num7 = 8;
                  }
                  c2 = 1;
                  with_mentions = 1;
                  const obj5 = {
                    value: fetchNotificationCenterItems(obj4, () => {
                      ref.current = false;
                    }),
                    done: false,
                  };
                  return obj5;
                }
              }
            } else if (arg0 === 1) {
              with_mentions = 3;
              throw value;
            } else if (arg0 === 2) {
              with_mentions = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              _undefined(false);
            }
            with_mentions = 3;
            return { value: "IconComponent", done: null };
          } catch (tmp22) {
            with_mentions = 3;
            throw tmp22;
          }
        }
      });
      const items7 = [initialized, hasMore, cursor, errored, flag, roleFilter, everyoneFilter];
      let obj4 = {
        initialized,
        loading,
        items,
        hasMore,
        loadMore: useCallback(function () {
          return closure_0(...arguments);
        }, items7),
        loadingMore: tmp3,
        setReadNotifItemToAcked(acked) {
          if (!acked.acked) {
            acked.acked = true;
          }
        },
        errored,
      };
      return obj4;
    };
let result = size.fileFinishedImporting("modules/notification_center/useNotificationCenterItemsLoader.tsx");

export const PAGE_SIZE_WITH_MENTIONS = 8;
export const PAGE_SIZE = 20;
export const useNotificationCenterItemsLoader = tmp2;
