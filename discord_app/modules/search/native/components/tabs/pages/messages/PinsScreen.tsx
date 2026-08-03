// === Module 15573: InitialPinsScreen ===

// Module 15573 (InitialPinsScreen)
import importAllResult from "noop";
import handleChannelDelete from "handleChannelDelete";
import { FetchState } from "handleChannelDelete";
import handleReaction from "handleReaction";
import prototype from "prototype";
import MessageEmbedTypes from "MessageEmbedTypes";
import { SearchResultContentEntityTypes as closure_11 } from "SearchEntrypointAnalyticsLocations";
import { SearchTypes } from "ME";
import { jsx } from "jsxProd";

let c10;
let c9;
let metroImportAll;
const require = arg1;
function InitialPinsScreen(searchContext) {
  searchContext = searchContext.searchContext;
  const isFocused = searchContext.isFocused;
  let stateFromStores;
  let fullscreenPlaceholderCount;
  let items;
  let showLoading;
  let onPressMessageItem;
  let callback;
  let closure_8;
  let obj = searchContext(stateFromStores[8]);
  items = [callback];
  const items1 = [searchContext];
  stateFromStores = obj.useStateFromStores(items, () => callback.isInitialSearchQuery(searchContext), items1);
  obj = { placeholderHeight: closure_8, numColumns: 1 };
  fullscreenPlaceholderCount = searchContext(stateFromStores[9]).useFullscreenPlaceholderCount(obj);
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
  showLoading = stateFromStoresObject.showLoading;
  const obj4 = searchContext(stateFromStores[8]);
  onPressMessageItem = searchContext(stateFromStores[11]).useOnPressMessageItem({ searchContext });
  const items4 = [onPressMessageItem, searchContext];
  callback = fullscreenPlaceholderCount.useCallback((arg0, arg1) => {
    let channelId;
    let messageId;
    ({ channelId, messageId } = arg0);
    const message = onPressMessageItem.getMessage(messageId);
    let obj = isFocused(stateFromStores[12]);
    obj = { searchContext, channelId, messageId, userId: null, index: null, entityType: null };
    let id;
    if (message != null) {
      const author = message.author;
      if (author != null) {
        id = author.id;
      }
    }
    obj[3] = id;
    obj[4] = arg1;
    obj[5] = outer1_11.MESSAGE;
    const result = obj.trackSearchResultClicked(obj);
    onPressMessageItem(channelId, messageId);
  }, items4);
  closure_8 = fullscreenPlaceholderCount.useRef({});
  const items5 = [fullscreenPlaceholderCount, callback, showLoading, items];
  const memo = fullscreenPlaceholderCount.useMemo(() => {
    let items = [];
    if (items != null) {
      const item = items.forEach((message) => {
        const items = arg1;
        obj = { type: outer2_9.MESSAGE, props: obj };
        obj = {
          message: message.message,
          onPress(channelId) {
            return outer1_7({ channelId: channelId.channelId, messageId: channelId.messageId }, closure_0);
          },
          lineClamp: outer2_10,
          messageSizeCacheRef: outer1_8
        };
        items.push(obj);
      });
    }
    if (showLoading) {
      let num = 0;
      if (0 < fullscreenPlaceholderCount) {
        do {
          let obj = { type: null, key: null };
          let tmp4 = outer1_9;
          obj[0] = outer1_9.MESSAGE_PLACEHOLDER;
          let _HermesInternal = HermesInternal;
          obj[1] = "message-placeholder-" + num;
          let arr = items.push(obj);
          num = num + 1;
          let tmp6 = fullscreenPlaceholderCount;
        } while (num < fullscreenPlaceholderCount);
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
    },
    ItemSeparatorComponent: null
  });
}
let c3 = importAllResult;
({ MESSAGE_PLACEHOLDER_ITEM_SIZE: metroImportAll, SearchListItemTypes: c9, SEARCH_PINNED_MESSAGES_LINE_CLAMP: c10 } = MessageEmbedTypes);
const memoResult = importAllResult.memo(function PinsScreen(searchContext) {
  let isFocused;
  let tab;
  searchContext = searchContext.searchContext;
  ({ tab, isFocused } = searchContext);
  let obj = searchContext(589);
  const items = [prototype];
  const items1 = [searchContext];
  if (!obj.useStateFromStores(items, () => outer1_7.isInitialSearchQuery(searchContext), items1)) {
    obj = { searchContext: null, tab: null, isFocused: null };
    obj[0] = searchContext;
    obj[1] = tab;
    obj[2] = isFocused;
    let tmp5 = jsx(importDefault(15566), { searchContext: null, tab: null, isFocused: null });
  } else {
    obj = { searchContext: null, tab: null, isFocused: null };
    obj[0] = searchContext;
    obj[1] = tab;
    obj[2] = isFocused;
    tmp5 = <InitialPinsScreen searchContext={null} tab={null} isFocused={null} />;
  }
  return tmp5;
});
let result = require("handleReaction").fileFinishedImporting("modules/search/native/components/tabs/pages/messages/PinsScreen.tsx");

export default memoResult;