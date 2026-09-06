// === Module 16682: PeopleScreen ===

// Module 16682 (PeopleScreen)
import search_tracking_TrackingDefault from "search/tracking/Tracking" /* 12358 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import SearchPeopleTabStore from "SearchPeopleTabStore" /* 12365 */;
import SearchQueryStore from "SearchQueryStore" /* 12339 */;

const require = fn;
const SearchConstants = fn(7878);
({ SearchListItemTypes: closure_7, USER_ESTIMATED_ITEM_SIZE: closure_8 } = SearchConstants);
let closure_9 = fn(7877).SearchResultContentEntityTypes;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/search/native/components/tabs/pages/PeopleScreen.tsx");

export default noop.memo(function PeopleScreen(searchContext) {
  searchContext = searchContext.searchContext;
  _require = searchContext;
  let stateFromStores;
  let onPressGroupDMItem;
  let onPressDMItem;
  let callback1;
  let obj = require("SearchUtils");
  importDefault = obj.getSearchContextId(searchContext);
  let obj1 = require("initialize");
  let items = [onPressGroupDMItem];
  stateFromStores = obj1.useStateFromStores(items, () => SearchPeopleTabStore.getResults(closure_1));
  const items1 = [onPressDMItem];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => SearchQueryStore.isInitialSearchQuery(closure_0));
  const obj3 = require("initialize");
  obj = { placeholderHeight: callback1, numColumns: 1 };
  const fullscreenPlaceholderCount = require("usePlaceholderStyles").useFullscreenPlaceholderCount(obj);
  const obj4 = require("usePlaceholderStyles");
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
          let obj = { value, done: true };
          return obj;
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
              obj = { value, done: true };
              return obj;
            } else {
              closure_3 = tmp5;
              closure_2 = tmp2;
              closure_130_0 = searchContext;
              closure_130_1 = closure_1;
              closure_130_2 = undefined;
              let obj1 = closure_1(stateFromStores[11]);
              c4 = 1;
              c5 = 1;
              obj1 = { value: null, done: false };
              obj1.value = obj1.getOrEnsurePrivateChannel(searchContext);
              return obj1;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_130_2 = value;
            const obj2 = { searchContext, userId: closure_130_0, channelId: closure_130_2, index: closure_130_1, entityType: constants.CHANNEL };
            const result = closure_1(stateFromStores[12]).trackSearchResultClicked(obj2);
            onPressDMItem(closure_130_0, closure_130_2);
            c5 = 3;
            return { value: "HermesInternal", done: null };
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
    const obj = { searchContext, channelId, index, entityType: constants.CHANNEL };
    const result = obj.trackSearchResultClicked(obj);
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
          let obj = { type: type.type, user, nickname: null, onPress: null };
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
          obj = {
            channel: type,
            onPress(arg0) {
                return closure_2_8(arg0, closure_0);
              }
          };
          element1.props = obj;
          items.push(element1);
        }
      });
    });
    if (!stateFromStores1) {
      if (0 === items.length) {
        let num3 = 0;
        if (0 < fullscreenPlaceholderCount) {
          do {
            let obj = { type: null, key: null };
            obj.type = callback.MESSAGE_PLACEHOLDER;
            let _HermesInternal = HermesInternal;
            obj.key = "message-placeholder-" + num3;
            let arr = items.push(obj);
            num3 = num3 + 1;
          } while (num3 < fullscreenPlaceholderCount);
        }
      }
    }
    return items;
  }, items4);
  const obj7 = require("useOnPressSearchItem");
  const messageTabCountsErrorText = require("useSearchScreenError").useMessageTabCountsErrorText({ searchContext });
  if (null != messageTabCountsErrorText) {
    obj = { text: messageTabCountsErrorText };
    let tmp13 = jsx(require("pages/ErrorScreen"), { text: messageTabCountsErrorText });
  } else {
    obj1 = { data: memo };
    tmp13 = jsx(require("SearchList"), { data: memo });
  }
  return tmp13;
});