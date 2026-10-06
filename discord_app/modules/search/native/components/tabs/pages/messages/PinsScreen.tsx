// === Module 16922: messages/PinsScreen ===

// Module 16922 (messages/PinsScreen)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1085 */;
import TrackingConstants from "TrackingConstants" /* 7523 */;
import ChannelPinActionCreatorsDefault from "ChannelPinActionCreators" /* 11311 */;
import ChannelPinsStore2 from "ChannelPinsStore" /* 11312 */;
import search_tracking_TrackingDefault from "search/tracking/Tracking" /* 12001 */;
import MessagesScreenDefault from "MessagesScreen" /* 16920 */;
import react from "react" /* 19 */;
import SearchMessageStore from "SearchMessageStore" /* 6794 */;
import SearchQueryStore from "SearchQueryStore" /* 11994 */;
import SearchConstants from "SearchConstants" /* 7524 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const ChannelPinsStore = ChannelPinsStore2;
let placeholderHeight;

let c10;
let c9;
let metroImportAll;
function InitialPinsScreen(searchContext) {
  let closure_8;
  let constants2;
  searchContext = searchContext.searchContext;
  const isFocused = searchContext.isFocused;
  let stateFromStores;
  let items;
  let callback;
  placeholderHeight = undefined;
  let obj = searchContext(stateFromStores[8]);
  const items1 = [callback];
  const items2 = [searchContext];
  stateFromStores = obj.useStateFromStores(items1, () => SearchQueryStore.isInitialSearchQuery(searchContext), items2);
  const obj2 = searchContext(stateFromStores[9]);
  const obj3 = { placeholderHeight, numColumns: 1 };
  const fullscreenPlaceholderCount = obj2.useFullscreenPlaceholderCount(obj3);
  const items3 = [isFocused, stateFromStores, searchContext.channelId];
  const effect = fullscreenPlaceholderCount.useEffect(() => {
    const tmp = stateFromStores && isFocused;
    if (tmp) {
      const obj = ChannelPinActionCreatorsDefault;
      const pins = obj.fetchPins(searchContext.channelId);
    }
  }, items3);
  const items4 = [items];
  const obj4 = searchContext(stateFromStores[8]);
  const stateFromStoresObject = obj4.useStateFromStoresObject(items4, () => {
    const pins = ChannelPinsStore.getPins(searchContext.channelId);
    items = undefined;
    if (pins != null) {
      items = pins.items;
    }
    const obj = { items, showLoading: tmp3 };
    return obj;
  });
  items = stateFromStoresObject.items;
  const showLoading = stateFromStoresObject.showLoading;
  const obj5 = searchContext(stateFromStores[11]);
  const onPressMessageItem = obj5.useOnPressMessageItem({ searchContext });
  const items5 = [onPressMessageItem, searchContext];
  callback = fullscreenPlaceholderCount.useCallback((arg0, index) => {
    let channelId;
    let id;
    let messageId;
    ({ channelId, messageId } = arg0);
    const message = SearchMessageStore.getMessage(messageId);
    const obj = { searchContext, channelId, messageId, userId: id, index, entityType: constants2.MESSAGE };
    id = undefined;
    const trackSearchResultClicked = search_tracking_TrackingDefault.trackSearchResultClicked;
    if (message != null) {
      const author = message.author;
      if (author != null) {
        id = author.id;
      }
    }
    const result = trackSearchResultClicked(obj);
    onPressMessageItem(channelId, messageId);
  }, items5);
  placeholderHeight = fullscreenPlaceholderCount.useRef({});
  const items6 = [fullscreenPlaceholderCount, callback, showLoading, items];
  const memo = fullscreenPlaceholderCount.useMemo(() => {
    let messageSizeCacheRef;
    items = [];
    const arr2 = items;
    if (items != null) {
      const item = arr2.forEach((message, index) => {
        let obj;
        let closure_0 = index;
        const element = { type: constants.MESSAGE, props: obj };
        obj = {
          message: message.message,
          onPress(channelId) {
            const obj = { channelId: channelId.channelId, messageId: channelId.messageId };
            return closure_2_7(obj, closure_0);
          },
          lineClamp,
          messageSizeCacheRef
        };
        items.push(element);
      });
    }
    if (showLoading) {
      let num;
      for (let num = 0; num < fullscreenPlaceholderCount; num = num + 1) {
        let obj = { type: constants.MESSAGE_PLACEHOLDER, key: "message-placeholder-" + num };
        let _HermesInternal = HermesInternal;
        let push = items.push;
        let arr = push(obj);
      }
    }
    return items;
  }, items6);
  const obj6 = searchContext(stateFromStores[13]);
  const contentContainerStyles = obj6.useContentContainerStyles();
  isFocused(stateFromStores[14]);
  return <tmp9 contentContainerStyle={contentContainerStyles.messagesContentContainer} data={memo} onEndReached={function onEndReached() {
    let pinnedAt;
    const fetchPins = ChannelPinActionCreatorsDefault.fetchPins;
    const channelId = searchContext.channelId;
    ChannelPinActionCreatorsDefault;
    if (items != null) {
      const atResult = items.at(-1);
      if (atResult != null) {
        pinnedAt = atResult.pinnedAt;
      }
    }
    const pins = fetchPins(channelId, { before: pinnedAt });
  }} ItemSeparatorComponent={searchContext(stateFromStores[15]).MessageVerticalSeparator} />;
}
const FetchState = ChannelPinsStore2.FetchState;
({ MESSAGE_PLACEHOLDER_ITEM_SIZE: metroImportAll, SearchListItemTypes: c9, SEARCH_PINNED_MESSAGES_LINE_CLAMP: c10 } = SearchConstants);
let closure_11 = TrackingConstants.SearchResultContentEntityTypes;
const SearchTypes = Constants.SearchTypes;
const jsx = Fragment.jsx;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((searchContext) => {
  let first;
  let isFocused;
  let tab;
  let tmp6;
  let tmp7;
  let tmp9;
  const obj = searchContext(576);
  const cResult = obj.c(12);
  const tmp = searchContext;
  searchContext = searchContext.searchContext;
  ({ tab, isFocused } = searchContext);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SearchQueryStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== searchContext) {
    const fn = function n() {
      return SearchQueryStore.isInitialSearchQuery(searchContext);
    };
    const items1 = [searchContext];
    cResult[1] = searchContext;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp7 = items1;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = tmp(504);
  if (tmpResult.useStateFromStores(first, tmp6, tmp7)) {
    if (searchContext.type !== SearchTypes.CHANNEL) {
      if (searchContext.type !== SearchTypes.GUILD_CHANNEL) {
        return tmp9;
      }
    }
    if (cResult[4] === isFocused) {
      if (cResult[5] === searchContext) {
        if (cResult[6] === tab) {
          tmp9 = cResult[7];
        }
      }
    }
    const tmp12 = <InitialPinsScreen searchContext={searchContext} tab={tab} isFocused={isFocused} />;
    cResult[4] = isFocused;
    cResult[5] = searchContext;
    cResult[6] = tab;
    cResult[7] = tmp12;
    tmp9 = tmp12;
  }
  if (cResult[8] === isFocused) {
    if (cResult[9] === searchContext) {
      let tmp13;
      if (cResult[10] === tab) {
        tmp13 = cResult[11];
      }
      tmp9 = tmp13;
    }
  }
  const tmp14 = jsx(MessagesScreenDefault, { searchContext, tab, isFocused });
  cResult[8] = isFocused;
  cResult[9] = searchContext;
  cResult[10] = tab;
  cResult[11] = tmp14;
  tmp13 = tmp14;
}) : ((searchContext) => {
  let isFocused;
  let tab;
  let tmp5;
  searchContext = searchContext.searchContext;
  ({ tab, isFocused } = searchContext);
  const items = [SearchQueryStore];
  const items1 = [searchContext];
  const obj = searchContext(504);
  if (!obj.useStateFromStores(items, () => SearchQueryStore.isInitialSearchQuery(searchContext), items1)) {
    tmp5 = jsx(MessagesScreenDefault, { searchContext, tab, isFocused });
  } else {
    tmp5 = <InitialPinsScreen searchContext={searchContext} tab={tab} isFocused={isFocused} />;
  }
  return tmp5;
}));
let result = size.fileFinishedImporting("modules/search/native/components/tabs/pages/messages/PinsScreen.tsx");

export default memoResult;