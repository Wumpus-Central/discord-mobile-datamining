// === Module 16918: MessagesScreen ===

// Module 16918 (MessagesScreen)
import BaseMessagesScreen from "BaseMessagesScreen" /* 16904 */;
import MessageSearchResultParserDefault from "MessageSearchResultParser" /* 16919 */;
import noop from "module_19" /* 19 */;
import SearchQueryStore from "SearchQueryStore" /* 12482 */;

require = fn;
const SearchConstants = fn(7994);
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
  const searchMessages = searchContext(stateFromStores[4]).useSearchMessages(searchContext, tab);
  const obj = searchContext(stateFromStores[4]);
  let items = [callback];
  const items1 = [searchContext];
  stateFromStores = searchContext(stateFromStores[5]).useStateFromStores(items, () => SearchQueryStore.getSearchResultsQuery(searchContext), items1);
  const obj2 = searchContext(stateFromStores[5]);
  const onPressMessageItem = searchContext(stateFromStores[6]).useOnPressMessageItem({ searchContext });
  const items2 = [onPressMessageItem, searchContext];
  callback = onPressMessageItem.useCallback((arg0, index) => {
    ({ channelId, messageId } = arg0);
    const result = BaseMessagesScreen.trackMessageItemPress({ searchContext, channelId, messageId, index });
    onPressMessageItem(channelId, messageId);
  }, items2);
  closure_5 = onPressMessageItem.useRef({});
  const tmp7 = closure_5[tab] === Pins.Pins ? memo : placeholderCount;
  Pins = tmp7;
  const items3 = [tmp7, stateFromStores];
  memo = obj4.useMemo(() => new MessageSearchResultParserDefault(stateFromStores, closure_6), items3);
  let obj3 = searchContext(stateFromStores[6]);
  const searchMessagesLoadingState = searchContext(stateFromStores[9]).useSearchMessagesLoadingState({ searchContext, tab, placeholderHeight, numColumns: 1 });
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
    const adjustedPlaceholderCount = searchContext(stateFromStores[10]).getAdjustedPlaceholderCount({ numColumns: 1, numResults: items.length, placeholderCount });
    for (let num = 0; num < adjustedPlaceholderCount; num = num + 1) {
      let obj3 = { type: constants.MESSAGE_PLACEHOLDER, key: null };
      let _HermesInternal = HermesInternal;
      obj3.key = "message-placeholder-" + num;
      let arr = items.push(obj3);
    }
    return items;
  }, items4);
  const obj5 = { searchContext, tab, placeholderHeight, numColumns: 1 };
  const tmpResult = searchContext(stateFromStores[9]);
  const contentContainerStyles = searchContext(stateFromStores[11]).useContentContainerStyles();
  const obj6 = { data: memo1, searchContext, tab, isFocused: isFocused.isFocused, contentContainerStyle: contentContainerStyles.messagesContentContainer, ItemSeparatorComponent: null, isFirstPageLoading: null, isNextPageLoading: null };
  const tmpResult2 = searchContext(stateFromStores[11]);
  obj6.ItemSeparatorComponent = searchContext(stateFromStores[12]).MessageVerticalSeparator;
  obj6.isFirstPageLoading = isFirstPageLoading;
  obj6.isNextPageLoading = isNextPageLoading;
  return jsx(searchMessages(stateFromStores[7]), { data: memo1, searchContext, tab, isFocused: isFocused.isFocused, contentContainerStyle: contentContainerStyles.messagesContentContainer, ItemSeparatorComponent: null, isFirstPageLoading: null, isNextPageLoading: null });
});