// === Module 19338: PeopleScreen ===

// Module 19338 (PeopleScreen)
import TrackingDefault from "Tracking" /* 14648 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import SearchPeopleTabStore from "SearchPeopleTabStore" /* 14656 */;
import SearchQueryStore from "SearchQueryStore" /* 14641 */;

const require = globalThis.__r;

const require = fn;
const SearchConstants = fn(8999);
({ SearchListItemTypes: closure_8, USER_ESTIMATED_ITEM_SIZE: closure_9 } = SearchConstants);
let closure_10 = fn(8998).SearchResultContentEntityTypes;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/search/native/components/tabs/pages/PeopleScreen.tsx");

export default noop.memo(function PeopleScreen(searchContext) {
  searchContext = searchContext.searchContext;
  _require = searchContext;
  let stateFromStores;
  let onPressDMItem;
  let first;
  let placeholderHeight;
  importDefault = require("SearchUtils").getSearchContextId(searchContext);
  let obj = require("SearchUtils");
  items = [onPressDMItem];
  stateFromStores = require("initialize").useStateFromStores(items, () => SearchPeopleTabStore.getResults(closure_1));
  let obj2 = require("initialize");
  const items1 = [first];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => SearchQueryStore.isInitialSearchQuery(closure_0));
  let obj3 = require("initialize");
  const fullscreenPlaceholderCount = require("usePlaceholderStyles").useFullscreenPlaceholderCount({ placeholderHeight, numColumns: 1 });
  let obj4 = require("usePlaceholderStyles");
  let obj5 = { placeholderHeight, numColumns: 1 };
  const onPressGroupDMItem = require("useOnPressSearchItem").useOnPressGroupDMItem({ searchContext });
  const obj6 = require("useOnPressSearchItem");
  onPressDMItem = require("useOnPressSearchItem").useOnPressDMItem({ searchContext });
  const tmp7 = fullscreenPlaceholderCount(onPressGroupDMItem.useState(() => new Set()), 2);
  first = tmp7[0];
  closure_8 = tmp7[1];
  placeholderHeight = onPressGroupDMItem.useCallback((arg0) => {
    closure_0 = arg0;
    closure_8((items) => {
      const set = new Set(items);
      if (set.has(closure_0)) {
        set.delete(closure_0);
      } else {
        set.add(closure_0);
      }
      return set;
    });
  }, []);
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
              closure_3 = tmp5;
              closure_2 = tmp2;
              closure_130_0 = searchContext;
              closure_130_1 = closure_1;
              closure_130_2 = undefined;
              c4 = 1;
              c5 = 1;
              const obj5 = { value: closure_1(stateFromStores[12]).getOrEnsurePrivateChannel(searchContext), done: false };
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
            const obj7 = { searchContext, userId: closure_130_0, channelId: closure_130_2, index: closure_130_1, entityType: callback1.CHANNEL };
            const result = closure_1(stateFromStores[13]).trackSearchResultClicked(obj7);
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
  const callback1 = onPressGroupDMItem.useCallback(function() {
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
  const callback2 = onPressGroupDMItem.useCallback((channelId, index) => {
    const result = TrackingDefault.trackSearchResultClicked({ searchContext, channelId, index, entityType: constants.CHANNEL });
    onPressGroupDMItem(channelId);
  }, items3);
  const items4 = [first, callback1, callback2, stateFromStores1, fullscreenPlaceholderCount, stateFromStores, placeholderHeight];
  const memo = onPressGroupDMItem.useMemo(() => {
    items = [];
    let item = stateFromStores.forEach((title) => {
      title = title.title;
      items = title.items;
      if (null != title) {
        if (items.length > 0) {
          const hasItem = set.has(title);
          let element = { type: constants.SECTION, props: null };
          let obj = {
            title,
            collapsed: hasItem,
            onToggle() {
                  return callback(title);
                }
          };
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
            return closure_2_10(arg0, closure_0);
          };
          element.props = obj;
          items.push(element);
        } else {
          const element1 = { type: constants.GROUP_DM, section: title, props: null };
          const obj2 = {
            channel: type,
            onPress(arg0) {
                return closure_2_11(arg0, closure_0);
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
          let obj = { type: constants.MESSAGE_PLACEHOLDER, key: null };
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
    let tmp16 = callback2(require("pages/ErrorScreen"), obj9);
  } else {
    const obj10 = { data: memo };
    tmp16 = callback2(require("SearchList"), obj10);
  }
  return tmp16;
});