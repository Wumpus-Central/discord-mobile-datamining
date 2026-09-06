// discord_app/modules/search/native/components/tabs/pages/messages/PinsScreen.tsx
import ChannelPinActionCreatorsDefault from "../../../../../../../actions/ChannelPinActionCreators.tsx";
import search_tracking_TrackingDefault from "../../../../tracking/Tracking.tsx";
import MessagesScreenDefault from "MessagesScreen.tsx";
import noop from "../../../../../../../../_runtime/metro/00019__.js";
import ChannelPinsStore from "../../../../../../../stores/ChannelPinsStore.tsx";
import SearchMessageStore from "../../../../../SearchMessageStore.tsx";
import SearchQueryStore from "../../../../stores/SearchQueryStore.tsx";

const require = fn;
function InitialPinsScreen(searchContext) {
  searchContext = searchContext.searchContext;
  const isFocused = searchContext.isFocused;
  let stateFromStores;
  let callback;
  placeholderHeight = undefined;
  let obj = searchContext(stateFromStores[8]);
  let items = [callback];
  const items1 = [searchContext];
  stateFromStores = obj.useStateFromStores(items, () => SearchQueryStore.isInitialSearchQuery(searchContext), items1);
  obj = { placeholderHeight, numColumns: 1 };
  const fullscreenPlaceholderCount = searchContext(stateFromStores[9]).useFullscreenPlaceholderCount(obj);
  const items2 = [isFocused, stateFromStores, searchContext.channelId];
  const effect = fullscreenPlaceholderCount.useEffect(() => {
    let tmp = stateFromStores;
    if (stateFromStores) {
      tmp = isFocused;
    }
    if (tmp) {
      const pins = ChannelPinActionCreatorsDefault.fetchPins(searchContext.channelId);
    }
  }, items2);
  const obj2 = searchContext(stateFromStores[9]);
  const items3 = [items];
  const stateFromStoresObject = searchContext(stateFromStores[8]).useStateFromStoresObject(items3, () => {
    const pins = ChannelPinsStore.getPins(searchContext.channelId);
    items = undefined;
    if (pins != null) {
      items = pins.items;
    }
    const obj = { items, showLoading: null };
    let tmp3 = null == pins;
    if (!tmp3) {
      tmp3 = pins.state === FetchState.LOADING;
    }
    obj.showLoading = tmp3;
    return obj;
  });
  items = stateFromStoresObject.items;
  const showLoading = stateFromStoresObject.showLoading;
  const obj4 = searchContext(stateFromStores[8]);
  const onPressMessageItem = searchContext(stateFromStores[11]).useOnPressMessageItem({ searchContext });
  const items4 = [onPressMessageItem, searchContext];
  callback = fullscreenPlaceholderCount.useCallback((arg0, index) => {
    ({ channelId, messageId } = arg0);
    const message = SearchMessageStore.getMessage(messageId);
    const obj = { searchContext, channelId, messageId, userId: null, index: null, entityType: null };
    let id;
    if (message != null) {
      const author = message.author;
      if (author != null) {
        id = author.id;
      }
    }
    obj.userId = id;
    obj.index = index;
    obj.entityType = constants2.MESSAGE;
    const result = obj.trackSearchResultClicked(obj);
    onPressMessageItem(channelId, messageId);
  }, items4);
  placeholderHeight = fullscreenPlaceholderCount.useRef({});
  const items5 = [fullscreenPlaceholderCount, callback, showLoading, items];
  const memo = fullscreenPlaceholderCount.useMemo(() => {
    items = [];
    if (items != null) {
      const item = items.forEach((message, index) => {
        closure_0 = index;
        const element = {
          type: constants.MESSAGE,
          props: {
            message: message.message,
            onPress(channelId) {
              return callback({ channelId: channelId.channelId, messageId: channelId.messageId }, closure_0);
            },
            lineClamp,
            messageSizeCacheRef,
          },
        };
        items.push(element);
      });
    }
    if (showLoading) {
      for (let num = 0; num < fullscreenPlaceholderCount; num = num + 1) {
        let obj = { type: constants.MESSAGE_PLACEHOLDER, key: null };
        let _HermesInternal = HermesInternal;
        obj.key = "message-placeholder-" + num;
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
      const pins = ChannelPinActionCreatorsDefault.fetchPins(searchContext.channelId, { before: pinnedAt });
    },
    ItemSeparatorComponent: null,
  };
  const obj6 = searchContext(stateFromStores[13]);
  obj.ItemSeparatorComponent = searchContext(stateFromStores[15]).MessageVerticalSeparator;
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
      const pins = ChannelPinActionCreatorsDefault.fetchPins(searchContext.channelId, { before: pinnedAt });
    },
    ItemSeparatorComponent: null,
  });
}
const FetchState = fn(11675).FetchState;
const SearchConstants = fn(7878);
({
  MESSAGE_PLACEHOLDER_ITEM_SIZE: closure_8,
  SearchListItemTypes: closure_9,
  SEARCH_PINNED_MESSAGES_LINE_CLAMP: c10,
} = SearchConstants);
let closure_11 = fn(7877).SearchResultContentEntityTypes;
const SearchTypes = fn(1074).SearchTypes;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/search/native/components/tabs/pages/messages/PinsScreen.tsx");

export default noop.memo(function PinsScreen(searchContext) {
  searchContext = searchContext.searchContext;
  ({ tab, isFocused } = searchContext);
  let obj = searchContext(504);
  const items = [SearchQueryStore];
  const items1 = [searchContext];
  if (!obj.useStateFromStores(items, () => SearchQueryStore.isInitialSearchQuery(searchContext), items1)) {
    obj = { searchContext, tab, isFocused };
    let tmp5 = jsx(MessagesScreenDefault, { searchContext, tab, isFocused });
  } else {
    obj = { searchContext, tab, isFocused };
    tmp5 = <InitialPinsScreen searchContext={searchContext} tab={tab} isFocused={isFocused} />;
  }
  return tmp5;
});
