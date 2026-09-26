// === Module 16537: MessagesScreen ===

// Module 16537 (MessagesScreen)
import MessageSearchResultParserDefault from "MessageSearchResultParser" /* 16500 */;
import BaseMessagesScreen from "BaseMessagesScreen" /* 16523 */;
import noop from "module_19" /* 19 */;
import SearchQueryStore from "SearchQueryStore" /* 11822 */;

require = fn;
const SearchConstants = fn(7303);
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
  let item;
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
  const tmp6 = closure_5[tab] === Pins.Pins ? memo : placeholderCount;
  Pins = tmp6;
  const items3 = [tmp6, stateFromStores];
  memo = obj4.useMemo(() => new MessageSearchResultParserDefault(stateFromStores, closure_6), items3);
  let obj3 = searchContext(stateFromStores[6]);
  const searchMessagesLoadingState = searchContext(stateFromStores[9]).useSearchMessagesLoadingState({ searchContext, tab, placeholderHeight: item, numColumns: 1 });
  placeholderCount = searchMessagesLoadingState.placeholderCount;
  const isFirstPageLoading = searchMessagesLoadingState.isFirstPageLoading;
  let length;
  if (searchMessages != null) {
    length = searchMessages.length;
  }
  const obj5 = { searchContext, tab, placeholderHeight: item, numColumns: 1 };
  const tmpResult = searchContext(stateFromStores[9]);
  const obj6 = { searchContext, hasKeywordResults: null, isKeywordFirstPageLoading: null };
  let num = length;
  if (length == null) {
    num = 0;
  }
  obj6.hasKeywordResults = num > 0;
  obj6.isKeywordFirstPageLoading = isFirstPageLoading;
  const intelligenceSearchMessages = searchContext(stateFromStores[10]).useIntelligenceSearchMessages(obj6);
  item = intelligenceSearchMessages.item;
  const items4 = [callback, item, tmp6, searchMessages, memo, placeholderCount];
  const memo1 = obj4.useMemo(() => {
    const items = [];
    if (null != item) {
      items.push(tmp);
    }
    if (searchMessages != null) {
      item = searchMessages.forEach((item, index) => {
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
    const adjustedPlaceholderCount = searchContext(stateFromStores[11]).getAdjustedPlaceholderCount({ numColumns: 1, numResults: items.length, placeholderCount });
    for (let num = 0; num < adjustedPlaceholderCount; num = num + 1) {
      let obj3 = { type: constants.MESSAGE_PLACEHOLDER, key: null };
      let _HermesInternal = HermesInternal;
      obj3.key = "message-placeholder-" + num;
      let arr4 = items.push(obj3);
    }
    return items;
  }, items4);
  const tmpResult3 = searchContext(stateFromStores[10]);
  const contentContainerStyles = searchContext(stateFromStores[12]).useContentContainerStyles();
  const obj7 = { data: memo1, searchContext, tab, isFocused: isFocused.isFocused, contentContainerStyle: contentContainerStyles.messagesContentContainer, ItemSeparatorComponent: null, isFirstPageLoading: null, isNextPageLoading: null, keywordResultCount: null, intelligenceStatus: null };
  const tmpResult4 = searchContext(stateFromStores[12]);
  obj7.ItemSeparatorComponent = searchContext(stateFromStores[13]).MessageVerticalSeparator;
  obj7.isFirstPageLoading = isFirstPageLoading;
  obj7.isNextPageLoading = searchMessagesLoadingState.isNextPageLoading;
  obj7.keywordResultCount = length;
  obj7.intelligenceStatus = intelligenceSearchMessages.status;
  return jsx(searchMessages(stateFromStores[7]), { data: memo1, searchContext, tab, isFocused: isFocused.isFocused, contentContainerStyle: contentContainerStyles.messagesContentContainer, ItemSeparatorComponent: null, isFirstPageLoading: null, isNextPageLoading: null, keywordResultCount: null, intelligenceStatus: null });
});