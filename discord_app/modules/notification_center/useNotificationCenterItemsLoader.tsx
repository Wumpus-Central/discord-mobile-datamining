// discord_app/modules/notification_center/useNotificationCenterItemsLoader.tsx
import ReadStateActionCreators from "../../actions/ReadStateActionCreators.tsx";
import NotificationCenterItemsActions from "NotificationCenterItemsActions.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import noop from "../../../_runtime/metro/00019__.js";
import RecentMentionsStore from "../inbox/RecentMentionsStore.tsx";
import NotificationCenterItemsStore from "NotificationCenterItemsStore.tsx";
import NotificationCenterStore from "NotificationCenterStore.tsx";

const require = globalThis.__r;

require = fn;
const ReadStateTypes = fn(5972).ReadStateTypes;
let c10 = 100;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/notification_center/useNotificationCenterItemsLoader.tsx");

export const PAGE_SIZE_WITH_MENTIONS = 8;
export const PAGE_SIZE = 20;
export const useNotificationCenterItemsLoader = ReactCompilerGating.isReactCompilerEnabled()
  ? function useNotificationCenterItemsLoader(isFocused) {
      const cResult = require("c").c(45);
      isFocused = isFocused.isFocused;
      _require = isFocused;
      const navigatedAway = isFocused.navigatedAway;
      isDesktop = isFocused.isDesktop;
      ({ withMentions, initialPageSize } = isFocused);
      _slicedToArray = tmp4;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [initialized];
        const fn = function v() {
          return initialized.shouldReload();
        };
        cResult[0] = items1;
        cResult[1] = fn;
        tmp5 = items1;
        tmp6 = fn;
      } else {
        [tmp5, tmp6] = cResult;
      }
      let obj = require("c");
      const stateFromStores = require("initialize").useStateFromStores(tmp5, tmp6);
      closure_6 = stateFromStores.useRef(false);
      const tmpResult = require("initialize");
      [tmp10, NotificationCenterItemsStore] = stateFromStores.useState(false);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [NotificationCenterItemsStore];
        class A {
          constructor() {
            obj = {
              initialized: closure_7.initialized,
              loading: closure_7.loading,
              items: closure_7.items,
              hasMore: closure_7.hasMore,
              cursor: closure_7.cursor,
              errored: closure_7.errored,
            };
            return obj;
          }
        }
        cResult[2] = items2;
        cResult[3] = A;
        let tmp12 = A;
        let tmp11 = items2;
      } else {
        tmp11 = cResult[2];
        tmp12 = cResult[3];
      }
      let tmp9 = _slicedToArray(stateFromStores.useState(false), 2);
      const stateFromStoresObject = require("initialize").useStateFromStoresObject(tmp11, tmp12);
      initialized = stateFromStoresObject.initialized;
      ({ loading, items } = stateFromStoresObject);
      const hasMore = stateFromStoresObject.hasMore;
      const cursor = stateFromStoresObject.cursor;
      const errored = stateFromStoresObject.errored;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items3 = [closure_6];
        class A {
          constructor() {
            obj = {
              initialized: closure_7.initialized,
              loading: closure_7.loading,
              items: closure_7.items,
              hasMore: closure_7.hasMore,
              cursor: closure_7.cursor,
              errored: closure_7.errored,
            };
            return obj;
          }
        }
        cResult[4] = items3;
        cResult[5] = tmp18;
        let tmp16 = tmp18;
        let tmp15 = items3;
      } else {
        tmp15 = cResult[4];
        tmp16 = cResult[5];
      }
      const tmpResult3 = require("initialize");
      const stateFromStoresObject1 = require("initialize").useStateFromStoresObject(tmp15, tmp16);
      const roleFilter = stateFromStoresObject1.roleFilter;
      const everyoneFilter = stateFromStoresObject1.everyoneFilter;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function x() {
          const result = closure_0(isDesktop[10]).setNotificationCenterActive(true);
          return () => closure_1_0(isDesktop[10]).setNotificationCenterActive(false);
        };
        const items4 = [];
        class A {
          constructor() {
            obj = {
              initialized: closure_7.initialized,
              loading: closure_7.loading,
              items: closure_7.items,
              hasMore: closure_7.hasMore,
              cursor: closure_7.cursor,
              errored: closure_7.errored,
            };
            return obj;
          }
        }
        cResult[7] = items4;
        let tmp21 = items4;
        let tmp20 = fn2;
      } else {
        tmp20 = cResult[6];
        tmp21 = cResult[7];
      }
      const effect = obj3.useEffect(tmp20, tmp21);
      if (cResult[8] === initialized) {
        if (cResult[9] === isFocused) {
          let tmp23 = cResult[10];
          let tmp24 = cResult[11];
        }
        const effect1 = obj3.useEffect(tmp23, tmp24);
        class A {
          constructor() {
            obj = {
              initialized: closure_7.initialized,
              loading: closure_7.loading,
              items: closure_7.items,
              hasMore: closure_7.hasMore,
              cursor: closure_7.cursor,
              errored: closure_7.errored,
            };
            return obj;
          }
        }
        closure_15 = tmp27;
        if (cResult[12] === errored) {
          if (cResult[13] === isDesktop) {
            if (cResult[14] === tmp27) {
              if (cResult[15] === items) {
                if (cResult[16] === navigatedAway) {
                  let tmp28 = cResult[17];
                  let tmp29 = cResult[18];
                }
                const effect2 = obj3.useEffect(tmp28, tmp29);
                if (cResult[19] === everyoneFilter) {
                  if (cResult[20] === initialPageSize) {
                    if (cResult[21] === initialized) {
                      if (cResult[22] === isFocused) {
                        if (cResult[23] === roleFilter) {
                          if (cResult[24] === stateFromStores) {
                            if (cResult[25] === tmp4) {
                              let tmp31 = cResult[26];
                              let tmp32 = cResult[27];
                            }
                            const effect3 = obj3.useEffect(tmp31, tmp32);
                            if (cResult[28] === cursor) {
                              if (cResult[29] === errored) {
                                if (cResult[30] === everyoneFilter) {
                                  if (cResult[31] === hasMore) {
                                    if (cResult[32] === initialized) {
                                      if (cResult[33] === roleFilter) {
                                        if (cResult[34] === tmp4) {
                                          let tmp34 = cResult[35];
                                        }
                                        const _Symbol = Symbol;
                                        class X {
                                          constructor() {
                                            tmp = !initialized;
                                            if (initialized) {
                                              tmp2 = closure_5;
                                              if (closure_5) {
                                                tmp2 = closure_0;
                                              }
                                              tmp = tmp2;
                                            }
                                            if (tmp) {
                                              tmp3 = closure_0;
                                              tmp4 = closure_2;
                                              obj = closure_0(closure_2[10]);
                                              tmp5 = initialPageSize;
                                              tmp6 = null;
                                              if (initialPageSize == null) {
                                                tmp7 = withMentions;
                                                num = 20;
                                                if (withMentions) {
                                                  num = 8;
                                                }
                                                tmp5 = num;
                                              }
                                              obj1 = {
                                                limit: null,
                                                with_mentions: null,
                                                roles_filter: null,
                                                everyone_filter: null,
                                              };
                                              obj1.limit = tmp5;
                                              tmp8 = withMentions;
                                              obj1.with_mentions = withMentions;
                                              tmp9 = roleFilter;
                                              obj1.roles_filter = roleFilter;
                                              tmp10 = everyoneFilter;
                                              obj1.everyone_filter = everyoneFilter;
                                              notificationCenterItems = obj.fetchNotificationCenterItems(obj1);
                                            }
                                            return;
                                          }
                                        }
                                        if (cResult[37] === errored) {
                                          if (cResult[38] === hasMore) {
                                            if (cResult[39] === initialized) {
                                              if (cResult[40] === items) {
                                                if (cResult[41] === tmp34) {
                                                  if (cResult[42] === loading) {
                                                    if (cResult[43] === tmp10) {
                                                      let tmp37 = cResult[44];
                                                    }
                                                    return tmp37;
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                        let obj2 = {
                                          initialized: null,
                                          loading: null,
                                          items: null,
                                          hasMore: null,
                                          loadMore: null,
                                          loadingMore: null,
                                          setReadNotifItemToAcked: null,
                                          errored: null,
                                        };
                                        class Q {
                                          constructor() {
                                            return () => {
                                              if (closure_1_2) {
                                                const tmp8 = closure_1_15();
                                                let tmp9 = !tmp8;
                                                if (!tmp8) {
                                                  let tmp10 = errored;
                                                  if (!errored) {
                                                    tmp10 = items.length > hasMore;
                                                  }
                                                  tmp9 = tmp10;
                                                }
                                                if (tmp9) {
                                                  const result = closure_0(isDesktop[10]).resetNotificationCenter();
                                                  const obj2 = closure_0(isDesktop[10]);
                                                }
                                              } else {
                                                let tmp = navigatedAway;
                                                if (navigatedAway) {
                                                  tmp = items.length > hasMore;
                                                }
                                                if (tmp) {
                                                  const result1 = closure_0(isDesktop[10]).resetNotificationCenter();
                                                  const obj = closure_0(isDesktop[10]);
                                                }
                                              }
                                            };
                                          }
                                        }
                                        obj2.loading = loading;
                                        obj2.items = items;
                                        obj2.hasMore = hasMore;
                                        obj2.loadMore = tmp34;
                                        obj2.loadingMore = tmp10;
                                        obj2.setReadNotifItemToAcked = tmp36;
                                        obj2.errored = errored;
                                        cResult[37] = errored;
                                        cResult[38] = hasMore;
                                        cResult[39] = initialized;
                                        cResult[40] = items;
                                        cResult[41] = tmp34;
                                        cResult[42] = loading;
                                        cResult[43] = tmp10;
                                        cResult[44] = obj2;
                                        tmp37 = obj2;
                                      }
                                    }
                                  }
                                }
                              }
                            }
                            class X {
                              constructor() {
                                tmp = !initialized;
                                if (initialized) {
                                  tmp2 = closure_5;
                                  if (closure_5) {
                                    tmp2 = closure_0;
                                  }
                                  tmp = tmp2;
                                }
                                if (tmp) {
                                  tmp3 = closure_0;
                                  tmp4 = closure_2;
                                  obj = closure_0(closure_2[10]);
                                  tmp5 = initialPageSize;
                                  tmp6 = null;
                                  if (initialPageSize == null) {
                                    tmp7 = withMentions;
                                    num = 20;
                                    if (withMentions) {
                                      num = 8;
                                    }
                                    tmp5 = num;
                                  }
                                  obj1 = {
                                    limit: null,
                                    with_mentions: null,
                                    roles_filter: null,
                                    everyone_filter: null,
                                  };
                                  obj1.limit = tmp5;
                                  tmp8 = withMentions;
                                  obj1.with_mentions = withMentions;
                                  tmp9 = roleFilter;
                                  obj1.roles_filter = roleFilter;
                                  tmp10 = everyoneFilter;
                                  obj1.everyone_filter = everyoneFilter;
                                  notificationCenterItems = obj.fetchNotificationCenterItems(obj1);
                                }
                                return;
                              }
                            }
                            _require = initialPageSize(function* (arg0) {
                              if (c3 === 2) {
                                c3 = 3;
                                throw new TypeError("Generator functions may not be called on executing generators");
                              } else if (tmp4 === 3) {
                                if (arg0 === 1) {
                                  throw value;
                                } else if (arg0 === 2) {
                                  const obj3 = { value, done: true };
                                  return obj3;
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
                                      const obj4 = { value, done: true };
                                      return obj4;
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
                                        let tmp13 = !closure_0;
                                        if (!closure_0) {
                                          tmp13 = errored;
                                        }
                                        current = tmp13;
                                      }
                                      if (current) {
                                        c3 = 3;
                                      } else {
                                        ref.current = true;
                                        NotificationCenterItemsStore(true);
                                        const obj5 = {
                                          after,
                                          with_mentions,
                                          roles_filter,
                                          everyone_filter,
                                          limit: null,
                                        };
                                        let num7 = 20;
                                        if (with_mentions) {
                                          num7 = 8;
                                        }
                                        obj5.limit = num7;
                                        c2 = 1;
                                        c3 = 1;
                                        const obj6 = {
                                          value: closure_0(isDesktop[10]).fetchNotificationCenterItems(obj5, () => {
                                            ref.current = false;
                                          }),
                                          done: false,
                                        };
                                        return obj6;
                                      }
                                    }
                                  } else if (arg0 === 1) {
                                    c3 = 3;
                                    throw value;
                                  } else if (arg0 !== 2) {
                                    NotificationCenterItemsStore(false);
                                  }
                                  c3 = 3;
                                  const obj = { value, done: true };
                                  return obj;
                                } catch (tmp22) {
                                  c3 = tmp;
                                  throw tmp22;
                                }
                              }
                            });
                            function t16() {
                              const self = this;
                              const apply = closure_0.apply;
                              if (typeof apply === "unknown") {
                                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                              } else {
                                applyArgumentsResult = apply(self, arguments);
                              }
                              return applyArgumentsResult;
                            }
                            class Q {
                              constructor() {
                                return () => {
                                  if (closure_1_2) {
                                    const tmp8 = closure_1_15();
                                    let tmp9 = !tmp8;
                                    if (!tmp8) {
                                      let tmp10 = errored;
                                      if (!errored) {
                                        tmp10 = items.length > hasMore;
                                      }
                                      tmp9 = tmp10;
                                    }
                                    if (tmp9) {
                                      const result = closure_0(isDesktop[10]).resetNotificationCenter();
                                      const obj2 = closure_0(isDesktop[10]);
                                    }
                                  } else {
                                    let tmp = navigatedAway;
                                    if (navigatedAway) {
                                      tmp = items.length > hasMore;
                                    }
                                    if (tmp) {
                                      const result1 = closure_0(isDesktop[10]).resetNotificationCenter();
                                      const obj = closure_0(isDesktop[10]);
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
                            cResult[34] = tmp4;
                            cResult[35] = t16;
                            tmp34 = t16;
                          }
                        }
                      }
                    }
                  }
                }
                class X {
                  constructor() {
                    tmp = !initialized;
                    if (initialized) {
                      tmp2 = closure_5;
                      if (closure_5) {
                        tmp2 = closure_0;
                      }
                      tmp = tmp2;
                    }
                    if (tmp) {
                      tmp3 = closure_0;
                      tmp4 = closure_2;
                      obj = closure_0(closure_2[10]);
                      tmp5 = initialPageSize;
                      tmp6 = null;
                      if (initialPageSize == null) {
                        tmp7 = withMentions;
                        num = 20;
                        if (withMentions) {
                          num = 8;
                        }
                        tmp5 = num;
                      }
                      obj1 = { limit: null, with_mentions: null, roles_filter: null, everyone_filter: null };
                      obj1.limit = tmp5;
                      tmp8 = withMentions;
                      obj1.with_mentions = withMentions;
                      tmp9 = roleFilter;
                      obj1.roles_filter = roleFilter;
                      tmp10 = everyoneFilter;
                      obj1.everyone_filter = everyoneFilter;
                      notificationCenterItems = obj.fetchNotificationCenterItems(obj1);
                    }
                    return;
                  }
                }
                const items5 = [initialized, , , , , ,];
                class Q {
                  constructor() {
                    return () => {
                      if (closure_1_2) {
                        const tmp8 = closure_1_15();
                        let tmp9 = !tmp8;
                        if (!tmp8) {
                          let tmp10 = errored;
                          if (!errored) {
                            tmp10 = items.length > hasMore;
                          }
                          tmp9 = tmp10;
                        }
                        if (tmp9) {
                          const result = closure_0(isDesktop[10]).resetNotificationCenter();
                          const obj2 = closure_0(isDesktop[10]);
                        }
                      } else {
                        let tmp = navigatedAway;
                        if (navigatedAway) {
                          tmp = items.length > hasMore;
                        }
                        if (tmp) {
                          const result1 = closure_0(isDesktop[10]).resetNotificationCenter();
                          const obj = closure_0(isDesktop[10]);
                        }
                      }
                    };
                  }
                }
                items5[2] = isFocused;
                items5[3] = tmp4;
                items5[4] = roleFilter;
                items5[5] = everyoneFilter;
                items5[6] = initialPageSize;
                cResult[19] = everyoneFilter;
                cResult[20] = initialPageSize;
                cResult[21] = initialized;
                cResult[22] = isFocused;
                cResult[23] = roleFilter;
                cResult[24] = stateFromStores;
                cResult[25] = tmp4;
                cResult[26] = X;
                cResult[27] = items5;
                tmp32 = items5;
                tmp31 = X;
              }
            }
          }
        }
        class Q {
          constructor() {
            return () => {
              if (closure_1_2) {
                const tmp8 = closure_1_15();
                let tmp9 = !tmp8;
                if (!tmp8) {
                  let tmp10 = errored;
                  if (!errored) {
                    tmp10 = items.length > hasMore;
                  }
                  tmp9 = tmp10;
                }
                if (tmp9) {
                  const result = closure_0(isDesktop[10]).resetNotificationCenter();
                  const obj2 = closure_0(isDesktop[10]);
                }
              } else {
                let tmp = navigatedAway;
                if (navigatedAway) {
                  tmp = items.length > hasMore;
                }
                if (tmp) {
                  const result1 = closure_0(isDesktop[10]).resetNotificationCenter();
                  const obj = closure_0(isDesktop[10]);
                }
              }
            };
          }
        }
        const items6 = [navigatedAway, items, isDesktop, tmp27, errored];
        cResult[12] = errored;
        cResult[13] = isDesktop;
        cResult[14] = tmp27;
        cResult[15] = items;
        cResult[16] = navigatedAway;
        cResult[17] = Q;
        cResult[18] = items6;
        tmp29 = items6;
        tmp28 = Q;
      }
      class W {
        constructor() {
          tmp = initialized;
          if (initialized) {
            tmp = closure_0;
          }
          if (tmp) {
            tmp2 = closure_0;
            tmp3 = closure_2;
            obj = closure_0(closure_2[11]);
            tmp4 = ReadStateTypes;
            ackUserFeatureResult = obj.ackUserFeature(ReadStateTypes.NOTIFICATION_CENTER);
          }
          return;
        }
      }
      const items7 = [isFocused, initialized];
      cResult[8] = initialized;
      cResult[9] = isFocused;
      cResult[10] = W;
      cResult[11] = items7;
      tmp24 = items7;
      tmp23 = W;
      const tmpResult4 = require("initialize");
    }
  : function useNotificationCenterItemsLoader(isFocused) {
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
      const items1 = [initialized];
      const stateFromStores = require("initialize").useStateFromStores(items1, () => initialized.shouldReload());
      closure_6 = stateFromStores.useRef(false);
      let obj = require("initialize");
      [tmp3, c7] = initialPageSize(stateFromStores.useState(false), 2);
      let tmp2 = initialPageSize(stateFromStores.useState(false), 2);
      const items2 = [c7];
      const stateFromStoresObject = require("initialize").useStateFromStoresObject(items2, () => ({
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
      let obj2 = require("initialize");
      const items3 = [closure_6];
      const stateFromStoresObject1 = require("initialize").useStateFromStoresObject(items3, () => ({
        everyoneFilter: closure_6.everyoneFilter,
        roleFilter: closure_6.roleFilter,
      }));
      const roleFilter = stateFromStoresObject1.roleFilter;
      const everyoneFilter = stateFromStoresObject1.everyoneFilter;
      const effect = stateFromStores.useEffect(() => {
        const result = closure_0(isDesktop[10]).setNotificationCenterActive(true);
        return () => closure_1_0(isDesktop[10]).setNotificationCenterActive(false);
      }, []);
      const items4 = [isFocused, initialized];
      const effect1 = stateFromStores.useEffect(() => {
        let tmp = initialized;
        if (initialized) {
          tmp = closure_0;
        }
        if (tmp) {
          ReadStateActionCreators.ackUserFeature(ReadStateTypes.NOTIFICATION_CENTER);
        }
      }, items4);
      let tmp8 = navigatedAway(isDesktop[12])();
      closure_15 = tmp8;
      const items5 = [navigatedAway, items, isDesktop, tmp8, errored];
      const effect2 = stateFromStores.useEffect(
        () => () => {
          if (closure_1_2) {
            const tmp8 = closure_1_15();
            let tmp9 = !tmp8;
            if (!tmp8) {
              let tmp10 = errored;
              if (!errored) {
                tmp10 = items.length > hasMore;
              }
              tmp9 = tmp10;
            }
            if (tmp9) {
              const result = closure_0(isDesktop[10]).resetNotificationCenter();
              const obj2 = closure_0(isDesktop[10]);
            }
          } else {
            let tmp = navigatedAway;
            if (navigatedAway) {
              tmp = items.length > hasMore;
            }
            if (tmp) {
              const result1 = closure_0(isDesktop[10]).resetNotificationCenter();
              const obj = closure_0(isDesktop[10]);
            }
          }
        },
        items5,
      );
      const items6 = [initialized, stateFromStores, isFocused, flag, roleFilter, everyoneFilter, initialPageSize];
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
          let tmp5 = initialPageSize;
          if (initialPageSize == null) {
            let num = 20;
            if (flag) {
              num = 8;
            }
            tmp5 = num;
          }
          const obj2 = { limit: tmp5, with_mentions: flag, roles_filter: roleFilter, everyone_filter: everyoneFilter };
          const notificationCenterItems = NotificationCenterItemsActions.fetchNotificationCenterItems(obj2);
        }
      }, items6);
      _require = flag(function* (arg0) {
        if (with_mentions === 2) {
          with_mentions = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp4 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj3 = { value, done: true };
            return obj3;
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
                const obj4 = { value, done: true };
                return obj4;
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
                  let tmp13 = !closure_0;
                  if (!closure_0) {
                    tmp13 = errored;
                  }
                  current = tmp13;
                }
                if (current) {
                  with_mentions = 3;
                } else {
                  ref.current = true;
                  _undefined(true);
                  const obj5 = { after, with_mentions, roles_filter, everyone_filter, limit: null };
                  let num7 = 20;
                  if (with_mentions) {
                    num7 = 8;
                  }
                  obj5.limit = num7;
                  c2 = 1;
                  with_mentions = 1;
                  const obj6 = {
                    value: closure_0(isDesktop[10]).fetchNotificationCenterItems(obj5, () => {
                      ref.current = false;
                    }),
                    done: false,
                  };
                  return obj6;
                }
              }
            } else if (arg0 === 1) {
              with_mentions = 3;
              throw value;
            } else if (arg0 !== 2) {
              _undefined(false);
            }
            with_mentions = 3;
            const obj = { value, done: true };
            return obj;
          } catch (tmp22) {
            with_mentions = tmp;
            throw tmp22;
          }
        }
      });
      const items7 = [initialized, hasMore, cursor, errored, flag, roleFilter, everyoneFilter];
      let obj3 = require("initialize");
      return {
        initialized,
        loading: stateFromStoresObject.loading,
        items,
        hasMore,
        loadMore: stateFromStores.useCallback(function () {
          const self = this;
          const apply = closure_0.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        }, items7),
        loadingMore: tmp3,
        setReadNotifItemToAcked(acked) {
          if (!acked.acked) {
            acked.acked = true;
          }
        },
        errored,
      };
    };
