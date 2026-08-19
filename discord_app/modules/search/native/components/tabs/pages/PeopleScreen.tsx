// discord_app/modules/search/native/components/tabs/pages/PeopleScreen.tsx
import asyncGeneratorStep from "../../../../../../../_runtime/00005_asyncGeneratorStep.js";
import importAllResult from "../../../../../../../_runtime/00019_noop.js";
import teardown from "../../../stores/SearchPeopleTabStore.tsx";
import prototype from "../../../stores/SearchQueryStore.tsx";
import MessageEmbedTypes from "../../../../SearchConstants.tsx";
import { SearchResultContentEntityTypes as closure_9 } from "../../../tracking/TrackingConstants.tsx";
import { jsx } from "../../../../../../../_runtime/react/00021_jsxProd.js";

const require = fn;
let c4 = importAllResult;
({ SearchListItemTypes: error, USER_ESTIMATED_ITEM_SIZE: closure_8 } = MessageEmbedTypes);
const memoResult = importAllResult.memo(function PeopleScreen(searchContext) {
  searchContext = searchContext.searchContext;
  let _require = searchContext;
  let stateFromStores;
  let onPressGroupDMItem;
  let onPressDMItem;
  let callback1;
  let obj = _require(stateFromStores[7]);
  importDefault = obj.getSearchContextId(searchContext);
  obj1 = _require(stateFromStores[8]);
  let items = [onPressGroupDMItem];
  stateFromStores = obj1.useStateFromStores(items, () => onPressGroupDMItem.getResults(closure_1));
  const items1 = [onPressDMItem];
  const stateFromStores1 = _require(stateFromStores[8]).useStateFromStores(items1, () => onPressDMItem.isInitialSearchQuery(closure_0));
  const obj3 = _require(stateFromStores[8]);
  obj = { placeholderHeight: callback1, numColumns: 1 };
  const fullscreenPlaceholderCount = _require(stateFromStores[9]).useFullscreenPlaceholderCount(obj);
  const obj4 = _require(stateFromStores[9]);
  onPressGroupDMItem = _require(stateFromStores[10]).useOnPressGroupDMItem({ searchContext });
  const obj6 = _require(stateFromStores[10]);
  onPressDMItem = _require(stateFromStores[10]).useOnPressDMItem({ searchContext });
  _require = stateFromStores1((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c4 = 0;
    c5 = 0;
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
          return { value: "HermesInternal", done: "HermesInternal" };
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
              closure_3 = tmp5;
              closure_2 = tmp2;
              closure_2 = undefined;
              obj1 = callback(stateFromStores[11]);
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
            obj2[4] = closure_2_9.CHANNEL;
            const result = callback(stateFromStores[12]).trackSearchResultClicked(obj2);
            onPressDMItem(closure_0, closure_2);
            c5 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
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
    callback(stateFromStores[12]);
    const obj = { searchContext: closure_0, channelId, index, entityType: closure_1_9.CHANNEL };
    const result = obj.trackSearchResultClicked(obj);
    onPressGroupDMItem(channelId);
  }, items3);
  const items4 = [callback, callback1, stateFromStores1, fullscreenPlaceholderCount, stateFromStores];
  const memo = fullscreenPlaceholderCount.useMemo(() => {
    let items = [];
    let item = stateFromStores.forEach((item, index) => {
      const title = item.title;
      items = item.items;
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
      item = items.forEach((item, index) => {
        closure_0 = index;
        if ("user" in item) {
          ({ user, firstMatch } = item);
          let obj = { type: null, section: null, props: null };
          obj[0] = callback.DM;
          obj[1] = closure_0;
          obj = { type: null, user: null, nickname: null, onPress: null };
          obj[0] = item.type;
          obj[1] = user;
          let tmp8;
          if (user.username !== firstMatch) {
            tmp8 = firstMatch;
          }
          obj[2] = tmp8;
          obj[3] = function onPress(arg0) {
            return closure_1_7(arg0, closure_0);
          };
          obj[2] = obj;
          title.push(obj);
        } else {
          obj = { type: null, section: null, props: null };
          obj[0] = callback.GROUP_DM;
          obj[1] = closure_0;
          obj1 = { channel: null, onPress: null };
          obj1[0] = item;
          obj1[1] = function onPress(arg0) {
            return closure_1_8(arg0, closure_0);
          };
          obj[2] = obj1;
          title.push(obj);
        }
      });
    });
    if (!stateFromStores1) {
      if (0 === items.length) {
        for (let num3 = 0; num3 < fullscreenPlaceholderCount; num3 = num3 + 1) {
          let obj = { type: null, key: null };
          obj[0] = callback.MESSAGE_PLACEHOLDER;
          let _HermesInternal = HermesInternal;
          obj[1] = "message-placeholder-" + num3;
          let arr = items.push(obj);
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
let result = require("obj132").fileFinishedImporting("modules/search/native/components/tabs/pages/PeopleScreen.tsx");

export default memoResult;