import SearchEntrypointAnalyticsLocations from "SearchEntrypointAnalyticsLocations";
import importAllResult from "noop";
import teardown from "teardown";
import prototype from "prototype";
import MessageEmbedTypes from "MessageEmbedTypes";
import { SearchResultContentEntityTypes as closure_9 } from "SearchEntrypointAnalyticsLocations";
import { jsx } from "jsxProd";

let error;
let metroImportAll;
const require = arg1;
let c4 = importAllResult;
({ SearchListItemTypes: error, USER_ESTIMATED_ITEM_SIZE: metroImportAll } = MessageEmbedTypes);
const memoResult = importAllResult.memo(function PeopleScreen(searchContext) {
  searchContext = searchContext.searchContext;
  let _require = searchContext;
  let importDefault;
  let stateFromStores;
  let stateFromStores1;
  let fullscreenPlaceholderCount;
  let onPressGroupDMItem;
  let onPressDMItem;
  let callback;
  let callback1;
  let obj = _require(stateFromStores[7]);
  importDefault = obj.getSearchContextId(searchContext);
  let obj1 = _require(stateFromStores[8]);
  let items = [onPressGroupDMItem];
  stateFromStores = obj1.useStateFromStores(items, () => onPressGroupDMItem.getResults(closure_1));
  const items1 = [onPressDMItem];
  stateFromStores1 = _require(stateFromStores[8]).useStateFromStores(items1, () => onPressDMItem.isInitialSearchQuery(closure_0));
  const obj3 = _require(stateFromStores[8]);
  obj = { placeholderHeight: callback1, numColumns: 1 };
  fullscreenPlaceholderCount = _require(stateFromStores[9]).useFullscreenPlaceholderCount(obj);
  const obj4 = _require(stateFromStores[9]);
  onPressGroupDMItem = _require(stateFromStores[10]).useOnPressGroupDMItem({ searchContext });
  const obj6 = _require(stateFromStores[10]);
  onPressDMItem = _require(stateFromStores[10]).useOnPressDMItem({ searchContext });
  _require = undefined;
  _require = stateFromStores1((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c4 = 0;
    let c5 = 0;
    return (function*(arg0, arg1) {
      if (c5 === 2) {
        c5 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
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
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let SearchEntrypointAnalyticsLocations = tmp5;
              let closure_2 = tmp2;
              closure_2 = undefined;
              let obj1 = callback(stateFromStores[11]);
              c4 = 1;
              c5 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = obj1.getOrEnsurePrivateChannel(closure_0);
              return obj1;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_2 = arg1;
            const obj2 = { searchContext: null, userId: null, channelId: null, index: null, entityType: null };
            obj2[0] = closure_0;
            obj2[1] = closure_0;
            obj2[2] = closure_2;
            obj2[3] = callback;
            obj2[4] = outer2_9.CHANNEL;
            const result = callback(stateFromStores[12]).trackSearchResultClicked(obj2);
            outer1_6(closure_0, closure_2);
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
  callback = fullscreenPlaceholderCount.useCallback(function() {
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
    let obj = callback(stateFromStores[12]);
    obj = { searchContext: closure_0, channelId, index, entityType: outer1_9.CHANNEL };
    const result = obj.trackSearchResultClicked(obj);
    onPressGroupDMItem(channelId);
  }, items3);
  const items4 = [callback, callback1, stateFromStores1, fullscreenPlaceholderCount, stateFromStores];
  const memo = fullscreenPlaceholderCount.useMemo(() => {
    let items = [];
    let item = stateFromStores.forEach((title) => {
      title = title.title;
      const items = title.items;
      if (null != title) {
        if (items.length > 0) {
          let obj = { type: null, props: null };
          obj[0] = callback.SECTION;
          obj = { title: null };
          obj[0] = title;
          obj[1] = obj;
          title.push(obj);
        }
      }
      const item = items.forEach((type) => {
        let firstMatch;
        let user;
        let closure_0 = arg1;
        if ("user" in type) {
          ({ user, firstMatch } = type);
          let obj = { type: null, section: null, props: null };
          obj[0] = callback.DM;
          obj[1] = closure_0;
          obj = { type: null, user: null, nickname: null, onPress: null };
          obj[0] = type.type;
          obj[1] = user;
          let tmp8;
          if (user.username !== firstMatch) {
            tmp8 = firstMatch;
          }
          obj[2] = tmp8;
          obj[3] = function onPress(arg0) {
            return outer1_7(arg0, closure_0);
          };
          obj[2] = obj;
          title.push(obj);
        } else {
          obj = { type: null, section: null, props: null };
          obj[0] = callback.GROUP_DM;
          obj[1] = closure_0;
          const obj1 = { channel: null, onPress: null };
          obj1[0] = type;
          obj1[1] = function onPress(arg0) {
            return outer1_8(arg0, closure_0);
          };
          obj[2] = obj1;
          title.push(obj);
        }
      });
    });
    if (!stateFromStores1) {
      if (0 === items.length) {
        let num3 = 0;
        if (0 < fullscreenPlaceholderCount) {
          do {
            let obj = { type: null, key: null };
            let tmp4 = callback;
            obj[0] = callback.MESSAGE_PLACEHOLDER;
            let _HermesInternal = HermesInternal;
            obj[1] = "message-placeholder-" + num3;
            let arr = items.push(obj);
            num3 = num3 + 1;
            let tmp6 = fullscreenPlaceholderCount;
          } while (num3 < fullscreenPlaceholderCount);
        }
      }
    }
    return items;
  }, items4);
  const obj7 = _require(stateFromStores[10]);
  const messageTabCountsErrorText = _require(stateFromStores[13]).useMessageTabCountsErrorText({ searchContext });
  if (null != messageTabCountsErrorText) {
    obj = { text: null };
    obj[0] = messageTabCountsErrorText;
    let tmp13 = jsx(importDefault(tmp[14]), { text: null });
  } else {
    obj1 = { data: null };
    obj1[0] = memo;
    tmp13 = jsx(importDefault(tmp[15]), { data: null });
  }
  return tmp13;
});
let result = require("teardown").fileFinishedImporting("modules/search/native/components/tabs/pages/PeopleScreen.tsx");

export default memoResult;