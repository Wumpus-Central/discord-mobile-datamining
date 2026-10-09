// === Module 17325: PeopleScreen ===

// Module 17325 (PeopleScreen)
import search_tracking_TrackingDefault from "search/tracking/Tracking" /* 12011 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import SearchPeopleTabStore from "SearchPeopleTabStore" /* 12019 */;
import SearchQueryStore from "SearchQueryStore" /* 12004 */;

const require = globalThis.__r;

const require = fn;
const SearchConstants = fn(9285);
({ SearchListItemTypes: closure_7, USER_ESTIMATED_ITEM_SIZE: closure_8 } = SearchConstants);
const constants2 = fn(9284).SearchResultContentEntityTypes;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/search/native/components/tabs/pages/PeopleScreen.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function PeopleScreen(searchContext) {
  const cResult = require("c").c(31);
  searchContext = searchContext.searchContext;
  _require = searchContext;
  if (cResult[0] !== searchContext) {
    const searchContextId = tmp(tmp2[9]).getSearchContextId(searchContext);
    cResult[0] = searchContext;
    cResult[1] = searchContextId;
    let tmp4 = searchContextId;
    const tmpResult = tmp(tmp2[9]);
  } else {
    tmp4 = cResult[1];
  }
  importDefault = tmp4;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [arr4];
    cResult[2] = items;
    let tmp6 = items;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] !== tmp4) {
    class S {
      constructor() {
        return closure_5.getResults(closure_1);
      }
    }
    cResult[3] = tmp4;
    cResult[4] = S;
  } else {
    class S {
      constructor() {
        return closure_5.getResults(closure_1);
      }
    }
  }
  let obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(tmp6, S);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        return closure_5.getResults(closure_1);
      }
    }
    const items1 = [SearchQueryStore];
    cResult[5] = items1;
    const tmp9 = items1;
  } else {
    class S {
      constructor() {
        return closure_5.getResults(closure_1);
      }
    }
  }
  if (cResult[6] !== searchContext) {
    class E {
      constructor() {
        return closure_6.isInitialSearchQuery(closure_0);
      }
    }
    cResult[6] = searchContext;
    cResult[7] = E;
  } else {
    class E {
      constructor() {
        return closure_6.isInitialSearchQuery(closure_0);
      }
    }
  }
  const tmpResult6 = require("initialize");
  const stateFromStores1 = require("initialize").useStateFromStores(tmp9, E);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    class E {
      constructor() {
        return closure_6.isInitialSearchQuery(closure_0);
      }
    }
    tmp13[0] = closure_8;
    cResult[8] = tmp13;
  } else {
    class E {
      constructor() {
        return closure_6.isInitialSearchQuery(closure_0);
      }
    }
  }
  const tmpResult7 = require("initialize");
  const fullscreenPlaceholderCount = require("usePlaceholderStyles").useFullscreenPlaceholderCount(tmp13);
  if (cResult[9] !== searchContext) {
    class E {
      constructor() {
        return closure_6.isInitialSearchQuery(closure_0);
      }
    }
    tmp17[0] = searchContext;
    cResult[9] = searchContext;
    cResult[10] = tmp17;
  } else {
    class E {
      constructor() {
        return closure_6.isInitialSearchQuery(closure_0);
      }
    }
  }
  const tmpResult8 = require("usePlaceholderStyles");
  onPressGroupDMItem = require("useOnPressSearchItem").useOnPressGroupDMItem(tmp17);
  if (cResult[11] !== searchContext) {
    class E {
      constructor() {
        return closure_6.isInitialSearchQuery(closure_0);
      }
    }
    tmp20[0] = searchContext;
    cResult[11] = searchContext;
    cResult[12] = tmp20;
  } else {
    class E {
      constructor() {
        return closure_6.isInitialSearchQuery(closure_0);
      }
    }
  }
  const tmpResult9 = require("useOnPressSearchItem");
  const onPressDMItem = require("useOnPressSearchItem").useOnPressDMItem(tmp20);
  if (cResult[13] === onPressDMItem) {
    class E {
      constructor() {
        return closure_6.isInitialSearchQuery(closure_0);
      }
    }
    noop = tmp22;
    if (cResult[16] === onPressGroupDMItem) {
      class E {
        constructor() {
          return closure_6.isInitialSearchQuery(closure_0);
        }
      }
      SearchQueryStore = D;
      if (cResult[19] === tmp22) {
        class E {
          constructor() {
            return closure_6.isInitialSearchQuery(closure_0);
          }
        }
      }
      class D {
        constructor(arg0, arg1) {
          obj = closure_1(closure_2[14]);
          obj1 = { searchContext: closure_0, channelId: searchContext, index: arg1, entityType: closure_9.CHANNEL };
          result = obj.trackSearchResultClicked(obj1);
          tmp2 = closure_2(searchContext);
          return;
        }
      }
      let item = stateFromStores.forEach((title) => {
        title = title.title;
        const items = title.items;
        if (null != title) {
          if (items.length > 0) {
            let element = { type: constants.SECTION, props: null };
            let obj = { title };
            element.props = obj;
            arr4.push(element);
          }
        }
        const item = items.forEach((type, index) => {
          closure_0 = index;
          if ("user" in type) {
            ({ user, firstMatch } = type);
            const element = { type: constants.DM, section: title, props: null };
            const obj = { type: type.type, user, nickname: null, onPress: null };
            let tmp8;
            if (user.username !== firstMatch) {
              tmp8 = firstMatch;
            }
            obj.nickname = tmp8;
            obj.onPress = function onPress(arg0) {
              return closure_2_4(arg0, closure_0);
            };
            element.props = obj;
            arr4.push(element);
          } else {
            const element1 = { type: constants.GROUP_DM, section: title, props: null };
            const obj2 = {
              channel: type,
              onPress(arg0) {
                  return closure_2_6(arg0, closure_0);
                }
            };
            element1.props = obj2;
            arr4.push(element1);
          }
        });
      });
      if (!stateFromStores1) {
        class E {
          constructor() {
            return closure_6.isInitialSearchQuery(closure_0);
          }
        }
        if (0 === arr4.length) {
          class E {
            constructor() {
              return closure_6.isInitialSearchQuery(closure_0);
            }
          }
          class D {
            constructor(arg0, arg1) {
              obj = closure_1(closure_2[14]);
              obj1 = { searchContext: closure_0, channelId: searchContext, index: arg1, entityType: closure_9.CHANNEL };
              result = obj.trackSearchResultClicked(obj1);
              tmp2 = closure_2(searchContext);
              return;
            }
          }
        }
      }
      cResult[19] = tmp22;
      cResult[20] = D;
      cResult[21] = stateFromStores1;
      cResult[22] = fullscreenPlaceholderCount;
      cResult[23] = stateFromStores;
      cResult[24] = arr4;
    }
    class D {
      constructor(arg0, arg1) {
        obj = closure_1(closure_2[14]);
        obj1 = { searchContext: closure_0, channelId: searchContext, index: arg1, entityType: closure_9.CHANNEL };
        result = obj.trackSearchResultClicked(obj1);
        tmp2 = closure_2(searchContext);
        return;
      }
    }
    cResult[16] = onPressGroupDMItem;
    cResult[17] = searchContext;
    cResult[18] = D;
  }
  _require = onPressDMItem((searchContext, arg1) => {
    closure_1 = arg1;
    c4 = 0;
    c5 = 0;
    return (function*(arg0, value) {
      if (c5 === 2) {
        c5 = 3;
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
              closure_2 = tmp2;
              closure_130_0 = searchContext;
              closure_130_1 = closure_1;
              closure_130_2 = undefined;
              c4 = 1;
              c5 = 1;
              const obj5 = { value: closure_1(onPressGroupDMItem[13]).getOrEnsurePrivateChannel(searchContext), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            closure_130_2 = value;
            const obj7 = { searchContext, userId: closure_130_0, channelId: closure_130_2, index: closure_130_1, entityType: constants2.CHANNEL };
            const result = closure_1(onPressGroupDMItem[14]).trackSearchResultClicked(obj7);
            tmp5(closure_130_0, closure_130_2);
            c5 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp10) {
          c5 = tmp;
          throw tmp10;
        }
      }
    })();
  });
  function t9() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  cResult[13] = onPressDMItem;
  cResult[14] = searchContext;
  cResult[15] = t9;
  const tmpResult10 = require("useOnPressSearchItem");
}) : (function PeopleScreen(searchContext) {
  searchContext = searchContext.searchContext;
  let _require = searchContext;
  let stateFromStores;
  let onPressGroupDMItem;
  let onPressDMItem;
  let callback1;
  importDefault = require("SearchUtils").getSearchContextId(searchContext);
  let obj = require("SearchUtils");
  let items = [onPressGroupDMItem];
  stateFromStores = require("initialize").useStateFromStores(items, () => SearchPeopleTabStore.getResults(closure_1));
  let obj2 = require("initialize");
  const items1 = [onPressDMItem];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => SearchQueryStore.isInitialSearchQuery(closure_0));
  let obj3 = require("initialize");
  const fullscreenPlaceholderCount = require("usePlaceholderStyles").useFullscreenPlaceholderCount({ placeholderHeight: callback1, numColumns: 1 });
  let obj4 = require("usePlaceholderStyles");
  let obj5 = { placeholderHeight: callback1, numColumns: 1 };
  onPressGroupDMItem = require("useOnPressSearchItem").useOnPressGroupDMItem({ searchContext });
  const obj6 = require("useOnPressSearchItem");
  onPressDMItem = require("useOnPressSearchItem").useOnPressDMItem({ searchContext });
  _require = stateFromStores1((searchContext, arg1) => {
    closure_1 = arg1;
    c4 = 0;
    c5 = 0;
    return (function*(arg0, value) {
      if (c5 === 2) {
        c5 = 3;
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
              closure_3 = tmp5;
              closure_2 = tmp2;
              closure_130_0 = searchContext;
              closure_130_1 = closure_1;
              closure_130_2 = undefined;
              c4 = 1;
              c5 = 1;
              const obj5 = { value: closure_1(stateFromStores[13]).getOrEnsurePrivateChannel(searchContext), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            closure_130_2 = value;
            const obj7 = { searchContext, userId: closure_130_0, channelId: closure_130_2, index: closure_130_1, entityType: constants.CHANNEL };
            const result = closure_1(stateFromStores[14]).trackSearchResultClicked(obj7);
            onPressDMItem(closure_130_0, closure_130_2);
            c5 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp10) {
          c5 = tmp;
          throw tmp10;
        }
      }
    })();
  });
  const items2 = [onPressDMItem, searchContext];
  const callback = fullscreenPlaceholderCount.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items2);
  const items3 = [onPressGroupDMItem, searchContext];
  callback1 = fullscreenPlaceholderCount.useCallback((channelId, index) => {
    const result = search_tracking_TrackingDefault.trackSearchResultClicked({ searchContext, channelId, index, entityType: constants.CHANNEL });
    onPressGroupDMItem(channelId);
  }, items3);
  const items4 = [callback, callback1, stateFromStores1, fullscreenPlaceholderCount, stateFromStores];
  const memo = fullscreenPlaceholderCount.useMemo(() => {
    let items = [];
    let item = stateFromStores.forEach((title) => {
      title = title.title;
      items = title.items;
      if (null != title) {
        if (items.length > 0) {
          let element = { type: callback.SECTION, props: null };
          let obj = { title };
          element.props = obj;
          title.push(element);
        }
      }
      const item = items.forEach((type, index) => {
        closure_0 = index;
        if ("user" in type) {
          ({ user, firstMatch } = type);
          const element = { type: constants.DM, section: title, props: null };
          const obj = { type: type.type, user, nickname: null, onPress: null };
          let tmp8;
          if (user.username !== firstMatch) {
            tmp8 = firstMatch;
          }
          obj.nickname = tmp8;
          obj.onPress = function onPress(arg0) {
            return closure_2_7(arg0, closure_0);
          };
          element.props = obj;
          items.push(element);
        } else {
          const element1 = { type: constants.GROUP_DM, section: title, props: null };
          const obj2 = {
            channel: type,
            onPress(arg0) {
                return closure_2_8(arg0, closure_0);
              }
          };
          element1.props = obj2;
          items.push(element1);
        }
      });
    });
    if (!stateFromStores1) {
      if (0 === items.length) {
        for (let num3 = 0; num3 < fullscreenPlaceholderCount; num3 = num3 + 1) {
          let obj = { type: callback.MESSAGE_PLACEHOLDER, key: null };
          let _HermesInternal = HermesInternal;
          obj.key = "message-placeholder-" + num3;
          let arr = items.push(obj);
        }
      }
    }
    return items;
  }, items4);
  let obj7 = require("useOnPressSearchItem");
  const messageTabCountsErrorText = require("useSearchScreenError").useMessageTabCountsErrorText({ searchContext });
  if (null != messageTabCountsErrorText) {
    const obj9 = { text: messageTabCountsErrorText };
    let tmp13 = jsx(require("pages/ErrorScreen"), { text: messageTabCountsErrorText });
  } else {
    const obj10 = { data: memo };
    tmp13 = jsx(require("SearchList"), { data: memo });
  }
  return tmp13;
}));