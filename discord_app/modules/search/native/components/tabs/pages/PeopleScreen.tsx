// === Module 16894: PeopleScreen ===

// Module 16894 (PeopleScreen)
import Fragment from "Fragment" /* 21 */;
import TrackingConstants from "TrackingConstants" /* 7523 */;
import search_tracking_TrackingDefault from "search/tracking/Tracking" /* 12001 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react_mod from "react" /* 19 */;
import SearchPeopleTabStore from "SearchPeopleTabStore" /* 12009 */;
import SearchQueryStore_mod from "SearchQueryStore" /* 11994 */;
import SearchConstants from "SearchConstants" /* 7524 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault, searchContext, title;

let metroImportAll;
let metroImportDefault;
let react = react_mod;
let SearchQueryStore = SearchQueryStore_mod;
({ SearchListItemTypes: metroImportDefault, USER_ESTIMATED_ITEM_SIZE: metroImportAll } = SearchConstants);
const constants2 = TrackingConstants.SearchResultContentEntityTypes;
const jsx = Fragment.jsx;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((searchContext) => {
  let closure_1;
  let closure_4;
  let closure_6;
  let onPressGroupDMItem;
  let tmp4;
  let tmp6;
  let tmp8;
  let tmp9;
  const tmp = searchContext;
  let obj = searchContext(onPressGroupDMItem[8]);
  const cResult = obj.c(31);
  searchContext = searchContext.searchContext;
  if (cResult[0] !== searchContext) {
    const tmpResult = tmp(onPressGroupDMItem[9]);
    const searchContextId = tmpResult.getSearchContextId(searchContext);
    cResult[0] = searchContext;
    cResult[1] = searchContextId;
    tmp4 = searchContextId;
  } else {
    tmp4 = cResult[1];
  }
  importDefault = tmp4;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [arr4];
    cResult[2] = items;
    tmp6 = items;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] !== tmp4) {
    const fn = function v() {
      return SearchPeopleTabStore.getResults(closure_1);
    };
    cResult[3] = tmp4;
    cResult[4] = fn;
    tmp8 = fn;
  } else {
    tmp8 = cResult[4];
  }
  const tmpResult6 = tmp(onPressGroupDMItem[10]);
  const stateFromStores = tmpResult6.useStateFromStores(tmp6, tmp8);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [SearchQueryStore];
    cResult[5] = items1;
    tmp9 = items1;
  } else {
    tmp9 = cResult[5];
  }
  if (cResult[6] !== searchContext) {
    class E {
      constructor() {
        return SearchQueryStore.isInitialSearchQuery(searchContext);
      }
    }
    cResult[6] = searchContext;
    cResult[7] = E;
  } else {
    class E {
      constructor() {
        return SearchQueryStore.isInitialSearchQuery(searchContext);
      }
    }
  }
  const tmpResult7 = tmp(onPressGroupDMItem[10]);
  const stateFromStores1 = tmpResult7.useStateFromStores(tmp9, E);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    class E {
      constructor() {
        return SearchQueryStore.isInitialSearchQuery(searchContext);
      }
    }
    tmp14[0] = closure_8;
    cResult[8] = tmp14;
  } else {
    class E {
      constructor() {
        return SearchQueryStore.isInitialSearchQuery(searchContext);
      }
    }
  }
  const tmpResult8 = tmp(onPressGroupDMItem[11]);
  const fullscreenPlaceholderCount = tmpResult8.useFullscreenPlaceholderCount(tmp14);
  if (cResult[9] !== searchContext) {
    class E {
      constructor() {
        return SearchQueryStore.isInitialSearchQuery(searchContext);
      }
    }
    tmp18[0] = searchContext;
    cResult[9] = searchContext;
    cResult[10] = tmp18;
  } else {
    class E {
      constructor() {
        return SearchQueryStore.isInitialSearchQuery(searchContext);
      }
    }
  }
  const tmpResult9 = tmp(onPressGroupDMItem[12]);
  onPressGroupDMItem = tmpResult9.useOnPressGroupDMItem(tmp18);
  if (cResult[11] !== searchContext) {
    class E {
      constructor() {
        return SearchQueryStore.isInitialSearchQuery(searchContext);
      }
    }
    tmp21[0] = searchContext;
    cResult[11] = searchContext;
    cResult[12] = tmp21;
  } else {
    class E {
      constructor() {
        return SearchQueryStore.isInitialSearchQuery(searchContext);
      }
    }
  }
  const tmpResult10 = tmp(onPressGroupDMItem[12]);
  const onPressDMItem = tmpResult10.useOnPressDMItem(tmp21);
  if (cResult[13] === onPressDMItem) {
    class E {
      constructor() {
        return SearchQueryStore.isInitialSearchQuery(searchContext);
      }
    }
    react = tmp23;
    if (cResult[16] === onPressGroupDMItem) {
      class E {
        constructor() {
          return SearchQueryStore.isInitialSearchQuery(searchContext);
        }
      }
      SearchQueryStore = D;
      if (cResult[19] === tmp23) {
        class E {
          constructor() {
            return SearchQueryStore.isInitialSearchQuery(searchContext);
          }
        }
      }
      class D {
        constructor(channelId, index) {
          const obj = search_tracking_TrackingDefault;
          const obj2 = { searchContext, channelId, index, entityType: constants2.CHANNEL };
          const result = obj.trackSearchResultClicked(obj2);
          onPressGroupDMItem(channelId);
        }
      }
      let item = stateFromStores.forEach((title) => {
        let obj;
        title = title.title;
        const items = title.items;
        if (null != title) {
          if (items.length > 0) {
            let element = { type: constants.SECTION, props: obj };
            obj = { title };
            arr4.push(element);
          }
        }
        const item = items.forEach((type, index) => {
          let firstMatch;
          let obj;
          let obj2;
          let tmp8;
          let user;
          let closure_0 = index;
          if ("user" in type) {
            ({ user, firstMatch } = type);
            const element = { type: metroImportDefault.DM, section: title, props: obj };
            obj = {
              type: type.type,
              user,
              nickname: tmp8,
              onPress(arg0) {
                  return closure_2_4(arg0, closure_0);
                }
            };
            tmp8 = undefined;
            const push = arr4.push;
            if (user.username !== firstMatch) {
              tmp8 = firstMatch;
            }
            push(element);
          } else {
            const element1 = { type: metroImportDefault.GROUP_DM, section: title, props: obj2 };
            obj2 = {
              channel: type,
              onPress(arg0) {
                  return closure_2_6(arg0, closure_0);
                }
            };
            arr4.push(element1);
          }
        });
      });
      if (!stateFromStores1) {
        class E {
          constructor() {
            return SearchQueryStore.isInitialSearchQuery(searchContext);
          }
        }
        if (0 === arr4.length) {
          class E {
            constructor() {
              return SearchQueryStore.isInitialSearchQuery(searchContext);
            }
          }
          class D {
            constructor(channelId, index) {
              const obj = search_tracking_TrackingDefault;
              const obj2 = { searchContext, channelId, index, entityType: constants2.CHANNEL };
              const result = obj.trackSearchResultClicked(obj2);
              onPressGroupDMItem(channelId);
            }
          }
        }
      }
      cResult[19] = tmp23;
      cResult[20] = D;
      cResult[21] = stateFromStores1;
      cResult[22] = fullscreenPlaceholderCount;
      cResult[23] = stateFromStores;
      cResult[24] = arr4;
    }
    class D {
      constructor(channelId, index) {
        const obj = search_tracking_TrackingDefault;
        const obj2 = { searchContext, channelId, index, entityType: constants2.CHANNEL };
        const result = obj.trackSearchResultClicked(obj2);
        onPressGroupDMItem(channelId);
      }
    }
    cResult[16] = onPressGroupDMItem;
    cResult[17] = searchContext;
    cResult[18] = D;
  }
  let closure_0 = onPressDMItem((arg0, index) => {
    let closure_3;
    closure_0 = arg0;
    let c4 = 0;
    let c5 = 0;
    return (function*(arg0, value) {
      let obj2;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
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
              return { value, done: true };
            } else {
              channelId = undefined;
              c4 = 1;
              c5 = 1;
              const obj5 = { value: obj2.getOrEnsurePrivateChannel(userId), done: false };
              obj2 = closure_2_1(onPressGroupDMItem[13]);
              return obj5;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            return { value, done: true };
          } else {
            channelId = value;
            const obj7 = { searchContext: userId, userId, channelId, index, entityType: constants.CHANNEL };
            const obj6 = closure_2_1(onPressGroupDMItem[14]);
            const result = obj6.trackSearchResultClicked(obj7);
            tmp4(userId, channelId);
            c5 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp9) {
          c5 = 3;
          throw tmp9;
        }
      }
    })();
  });
  const fn2 = function() {
    return closure_0(...arguments);
  };
  cResult[13] = onPressDMItem;
  cResult[14] = searchContext;
  cResult[15] = fn2;
}) : ((searchContext) => {
  let closure_1;
  let tmp13;
  searchContext = searchContext.searchContext;
  let stateFromStores;
  let onPressGroupDMItem;
  let onPressDMItem;
  let callback1;
  const tmp = stateFromStores;
  let obj = searchContext(stateFromStores[9]);
  importDefault = obj.getSearchContextId(searchContext);
  let obj2 = searchContext(stateFromStores[10]);
  let items = [onPressGroupDMItem];
  stateFromStores = obj2.useStateFromStores(items, () => SearchPeopleTabStore.getResults(closure_1));
  const obj3 = searchContext(stateFromStores[10]);
  const items1 = [onPressDMItem];
  const stateFromStores1 = obj3.useStateFromStores(items1, () => SearchQueryStore.isInitialSearchQuery(searchContext));
  const obj4 = searchContext(stateFromStores[11]);
  let obj5 = { placeholderHeight: callback1, numColumns: 1 };
  const fullscreenPlaceholderCount = obj4.useFullscreenPlaceholderCount(obj5);
  let obj6 = searchContext(stateFromStores[12]);
  onPressGroupDMItem = obj6.useOnPressGroupDMItem({ searchContext });
  let obj7 = searchContext(stateFromStores[12]);
  onPressDMItem = obj7.useOnPressDMItem({ searchContext });
  const useCallback = fullscreenPlaceholderCount.useCallback;
  let closure_0 = stateFromStores1((arg0, index) => {
    closure_0 = arg0;
    let c4 = 0;
    let c5 = 0;
    return (function*(arg0, value) {
      let obj2;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
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
              return { value, done: true };
            } else {
              closure_3 = tmp4;
              channelId = undefined;
              c4 = 1;
              c5 = 1;
              const obj5 = { value: obj2.getOrEnsurePrivateChannel(userId), done: false };
              obj2 = closure_2_1(stateFromStores[13]);
              return obj5;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            return { value, done: true };
          } else {
            channelId = value;
            const obj7 = { searchContext: userId, userId, channelId, index, entityType: constants.CHANNEL };
            const obj6 = closure_2_1(stateFromStores[14]);
            const result = obj6.trackSearchResultClicked(obj7);
            closure_1_6(userId, channelId);
            c5 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp9) {
          c5 = 3;
          throw tmp9;
        }
      }
    })();
  });
  const items2 = [onPressDMItem, searchContext];
  const callback = useCallback(function() {
    return closure_0(...arguments);
  }, items2);
  const items3 = [onPressGroupDMItem, searchContext];
  callback1 = fullscreenPlaceholderCount.useCallback((channelId, index) => {
    const obj = search_tracking_TrackingDefault;
    const obj2 = { searchContext, channelId, index, entityType: constants.CHANNEL };
    const result = obj.trackSearchResultClicked(obj2);
    onPressGroupDMItem(channelId);
  }, items3);
  const items4 = [callback, callback1, stateFromStores1, fullscreenPlaceholderCount, stateFromStores];
  const memo = fullscreenPlaceholderCount.useMemo(() => {
    let items = [];
    let item = stateFromStores.forEach((title) => {
      let obj;
      title = title.title;
      items = title.items;
      if (null != title) {
        if (items.length > 0) {
          let element = { type: callback.SECTION, props: obj };
          obj = { title };
          title.push(element);
        }
      }
      const item = items.forEach((type, index) => {
        let firstMatch;
        let obj;
        let obj2;
        let tmp8;
        let user;
        let closure_0 = index;
        if ("user" in type) {
          ({ user, firstMatch } = type);
          const element = { type: metroImportDefault.DM, section: title, props: obj };
          obj = {
            type: type.type,
            user,
            nickname: tmp8,
            onPress(arg0) {
                return closure_2_7(arg0, closure_0);
              }
          };
          tmp8 = undefined;
          const push = items.push;
          if (user.username !== firstMatch) {
            tmp8 = firstMatch;
          }
          push(element);
        } else {
          const element1 = { type: metroImportDefault.GROUP_DM, section: title, props: obj2 };
          obj2 = {
            channel: type,
            onPress(arg0) {
                return closure_2_8(arg0, closure_0);
              }
          };
          items.push(element1);
        }
      });
    });
    if (!stateFromStores1) {
      if (0 === items.length) {
        let num3;
        for (let num3 = 0; num3 < fullscreenPlaceholderCount; num3 = num3 + 1) {
          let obj = { type: callback.MESSAGE_PLACEHOLDER, key: "message-placeholder-" + num3 };
          let _HermesInternal = HermesInternal;
          let push = items.push;
          let arr = push(obj);
        }
      }
    }
    return items;
  }, items4);
  const obj8 = searchContext(stateFromStores[15]);
  const messageTabCountsErrorText = obj8.useMessageTabCountsErrorText({ searchContext });
  if (null != messageTabCountsErrorText) {
    tmp13 = jsx(require("ErrorScreen"), { text: messageTabCountsErrorText });
  } else {
    tmp13 = jsx(require("SearchList"), { data: memo });
  }
  return tmp13;
}));
let result = size.fileFinishedImporting("modules/search/native/components/tabs/pages/PeopleScreen.tsx");

export default memoResult;