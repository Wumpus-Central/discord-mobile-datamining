// === Module 15937: InitialPinsScreen ===

// Module 15937 (InitialPinsScreen)
import _modDef15930 from "module_15930" /* 15930 */;
import importAllResult from "noop" /* 19 */;
import handleChannelDelete from "handleChannelDelete" /* 10865 */;
import { FetchState } from "handleChannelDelete" /* 10865 */;
import handleReaction from "handleReaction" /* 4971 */;
import prototype from "prototype" /* 11510 */;
import MessageEmbedTypes from "MessageEmbedTypes" /* 8507 */;
import { SearchResultContentEntityTypes as closure_11 } from "SearchEntrypointAnalyticsLocations" /* 8506 */;
import { SearchTypes } from "ME" /* 676 */;
import { jsx } from "jsxProd" /* 21 */;

const require = fn;
function InitialPinsScreen(searchContext) {
  searchContext = searchContext.searchContext;
  const isFocused = searchContext.isFocused;
  let stateFromStores;
  let callback;
  closure_8 = undefined;
  let obj = searchContext(stateFromStores[8]);
  let items = [callback];
  const items1 = [searchContext];
  stateFromStores = obj.useStateFromStores(items, () => callback.isInitialSearchQuery(searchContext), items1);
  obj = { placeholderHeight: closure_8, numColumns: 1 };
  const fullscreenPlaceholderCount = searchContext(stateFromStores[9]).useFullscreenPlaceholderCount(obj);
  const items2 = [isFocused, stateFromStores, searchContext.channelId];
  const effect = fullscreenPlaceholderCount.useEffect(() => {
    let tmp = stateFromStores;
    if (stateFromStores) {
      tmp = isFocused;
    }
    if (tmp) {
      const pins = isFocused(stateFromStores[10]).fetchPins(searchContext.channelId);
      const obj = isFocused(stateFromStores[10]);
    }
  }, items2);
  const obj2 = searchContext(stateFromStores[9]);
  const items3 = [items];
  const stateFromStoresObject = searchContext(stateFromStores[8]).useStateFromStoresObject(items3, () => {
    const pins = items.getPins(searchContext.channelId);
    items = undefined;
    if (pins != null) {
      items = pins.items;
    }
    const obj = { items, showLoading: null };
    let tmp3 = null == pins;
    if (!tmp3) {
      tmp3 = pins.state === showLoading.LOADING;
    }
    obj[1] = tmp3;
    return obj;
  });
  items = stateFromStoresObject.items;
  const showLoading = stateFromStoresObject.showLoading;
  const obj4 = searchContext(stateFromStores[8]);
  const onPressMessageItem = searchContext(stateFromStores[11]).useOnPressMessageItem({ searchContext });
  const items4 = [onPressMessageItem, searchContext];
  callback = fullscreenPlaceholderCount.useCallback((arg0, arg1) => {
    ({ channelId, messageId } = arg0);
    const message = onPressMessageItem.getMessage(messageId);
    isFocused(stateFromStores[12]);
    const obj = { searchContext, channelId, messageId, userId: null, index: null, entityType: null };
    let id;
    if (message != null) {
      const author = message.author;
      if (author != null) {
        id = author.id;
      }
    }
    obj[3] = id;
    obj[4] = arg1;
    obj[5] = closure_1_11.MESSAGE;
    const result = obj.trackSearchResultClicked(obj);
    onPressMessageItem(channelId, messageId);
  }, items4);
  closure_8 = fullscreenPlaceholderCount.useRef({});
  const items5 = [fullscreenPlaceholderCount, callback, showLoading, items];
  const memo = fullscreenPlaceholderCount.useMemo(() => {
    items = [];
    if (items != null) {
      const item = items.forEach((item, index) => {
        items = index;
        const obj = {
          message: item.message,
          onPress(channelId) {
            return closure_1_7({ channelId: channelId.channelId, messageId: channelId.messageId }, closure_0);
          },
          lineClamp: closure_2_10,
          messageSizeCacheRef: closure_1_8
        };
        items.push(obj);
      });
    }
    if (showLoading) {
      for (let num = 0; num < fullscreenPlaceholderCount; num = num + 1) {
        let obj = { type: null, key: null };
        obj[0] = closure_1_9.MESSAGE_PLACEHOLDER;
        let _HermesInternal = HermesInternal;
        obj[1] = "message-placeholder-" + num;
        let arr = items.push(obj);
      }
    }
    return items;
  }, items5);
  const obj5 = searchContext(stateFromStores[11]);
  const contentContainerStyles = searchContext(stateFromStores[13]).useContentContainerStyles();
  obj = {
    contentContainerStyle: contentContainerStyles.messagesContentContainer,
    data: memo,
    onEndReached() {
      let pinnedAt;
      if (items != null) {
        const atResult = items.at(-1);
        if (atResult != null) {
          pinnedAt = atResult.pinnedAt;
        }
      }
      const pins = isFocused(stateFromStores[10]).fetchPins(searchContext.channelId, { before: pinnedAt });
      const obj = isFocused(stateFromStores[10]);
    },
    ItemSeparatorComponent: null
  };
  const obj6 = searchContext(stateFromStores[13]);
  obj[3] = searchContext(stateFromStores[15]).MessageVerticalSeparator;
  return jsx(isFocused(stateFromStores[14]), {
    contentContainerStyle: contentContainerStyles.messagesContentContainer,
    data: memo,
    onEndReached() {
      let pinnedAt;
      if (items != null) {
        const atResult = items.at(-1);
        if (atResult != null) {
          pinnedAt = atResult.pinnedAt;
        }
      }
      const pins = isFocused(stateFromStores[10]).fetchPins(searchContext.channelId, { before: pinnedAt });
      const obj = isFocused(stateFromStores[10]);
    },
    ItemSeparatorComponent: null
  });
}
let c3 = importAllResult;
({ MESSAGE_PLACEHOLDER_ITEM_SIZE: closure_8, SearchListItemTypes: c9, SEARCH_PINNED_MESSAGES_LINE_CLAMP: c10 } = MessageEmbedTypes);
const memoResult = importAllResult.memo(function PinsScreen(searchContext) {
  searchContext = searchContext.searchContext;
  ({ tab, isFocused } = searchContext);
  let obj = searchContext(589);
  const items = [closure_7];
  const items1 = [searchContext];
  if (!obj.useStateFromStores(items, () => closure_1_7.isInitialSearchQuery(searchContext), items1)) {
    obj = { searchContext: null, tab: null, isFocused: null };
    obj[0] = searchContext;
    obj[1] = tab;
    obj[2] = isFocused;
    let tmp5 = jsx(_modDef15930, { searchContext: null, tab: null, isFocused: null });
  } else {
    obj = { searchContext: null, tab: null, isFocused: null };
    obj[0] = searchContext;
    obj[1] = tab;
    obj[2] = isFocused;
    tmp5 = <InitialPinsScreen searchContext={null} tab={null} isFocused={null} />;
  }
  return tmp5;
});
let result = require("obj132").fileFinishedImporting("modules/search/native/components/tabs/pages/messages/PinsScreen.tsx");

export default memoResult;