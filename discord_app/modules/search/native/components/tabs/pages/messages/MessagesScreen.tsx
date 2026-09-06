// === Module 16709: MessagesScreen ===

// Module 16709 (MessagesScreen)
import BaseMessagesScreen from "BaseMessagesScreen" /* 16695 */;
import MessageSearchResultParserDefault from "MessageSearchResultParser" /* 16710 */;
import noop from "module_19" /* 19 */;
import SearchQueryStore from "SearchQueryStore" /* 12339 */;

require = fn;
const SearchConstants = fn(7878);
({ SEARCH_FILTERS_BY_TAB: hasOwnProperty, SearchFilter: metroRequire, SEARCH_PINNED_MESSAGES_LINE_CLAMP: closure_7, SEARCH_MESSAGES_DEFAULT_LINE_CLAMP: closure_8, MESSAGE_PLACEHOLDER_ITEM_SIZE: closure_9, SearchListItemTypes: c10 } = SearchConstants);
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/search/native/components/tabs/pages/messages/MessagesScreen.tsx");

export default noop.memo(function MessagesScreen(isFocused) {
  const searchContext = isFocused.searchContext;
  const tab = isFocused.tab;
  let stateFromStores;
  let callback;
  Pins = undefined;
  let memo;
  let placeholderCount;
  let obj = searchContext(stateFromStores[4]);
  const searchMessages = obj.useSearchMessages(searchContext, tab);
  let items = [callback];
  const items1 = [searchContext];
  stateFromStores = searchContext(stateFromStores[5]).useStateFromStores(items, () => SearchQueryStore.getSearchResultsQuery(searchContext), items1);
  const obj2 = searchContext(stateFromStores[5]);
  const onPressMessageItem = searchContext(stateFromStores[6]).useOnPressMessageItem({ searchContext });
  const items2 = [onPressMessageItem, searchContext];
  callback = onPressMessageItem.useCallback((arg0, index) => {
    ({ channelId, messageId } = arg0);
    const obj = { searchContext, channelId, messageId, index };
    const result = obj.trackMessageItemPress(obj);
    onPressMessageItem(channelId, messageId);
  }, items2);
  closure_5 = onPressMessageItem.useRef({});
  const tmp7 = closure_5[tab] === Pins.Pins ? memo : placeholderCount;
  Pins = tmp7;
  const items3 = [tmp7, stateFromStores];
  memo = obj4.useMemo(() => new MessageSearchResultParserDefault(stateFromStores, closure_6), items3);
  let tmpResult = tmp(tmp2[9]);
  obj = { searchContext, tab, placeholderHeight, numColumns: 1 };
  const searchMessagesLoadingState = tmpResult.useSearchMessagesLoadingState(obj);
  placeholderCount = searchMessagesLoadingState.placeholderCount;
  const items4 = [callback, tmp7, searchMessages, memo, placeholderCount];
  ({ isFirstPageLoading, isNextPageLoading } = searchMessagesLoadingState);
  const memo1 = obj4.useMemo(() => {
    const items = [];
    if (searchMessages != null) {
      const item = searchMessages.forEach((item, index) => {
        closure_0 = index;
        const element = {
          type: constants.MESSAGE,
          props: {
            message: memo.parse(item),
            onPress(arg0) {
              return callback(arg0, closure_0);
            },
            lineClamp,
            messageSizeCacheRef
          }
        };
        items.push(element);
      });
    }
    searchContext(stateFromStores[10]);
    let obj = { numColumns: 1, numResults: items.length, placeholderCount };
    const adjustedPlaceholderCount = obj.getAdjustedPlaceholderCount(obj);
    for (let num = 0; num < adjustedPlaceholderCount; num = num + 1) {
      obj = { type: null, key: null };
      obj.type = constants.MESSAGE_PLACEHOLDER;
      let _HermesInternal = HermesInternal;
      obj.key = "message-placeholder-" + num;
      let arr = items.push(obj);
    }
    return items;
  }, items4);
  tmpResult = tmp(tmp2[11]);
  const contentContainerStyles = tmpResult.useContentContainerStyles();
  obj = { data: memo1, searchContext, tab, isFocused: isFocused.isFocused, contentContainerStyle: contentContainerStyles.messagesContentContainer, ItemSeparatorComponent: null, isFirstPageLoading: null, isNextPageLoading: null };
  const obj3 = searchContext(stateFromStores[6]);
  obj.ItemSeparatorComponent = searchContext(stateFromStores[12]).MessageVerticalSeparator;
  obj.isFirstPageLoading = isFirstPageLoading;
  obj.isNextPageLoading = isNextPageLoading;
  return jsx(searchMessages(stateFromStores[7]), { data: memo1, searchContext, tab, isFocused: isFocused.isFocused, contentContainerStyle: contentContainerStyles.messagesContentContainer, ItemSeparatorComponent: null, isFirstPageLoading: null, isNextPageLoading: null });
});