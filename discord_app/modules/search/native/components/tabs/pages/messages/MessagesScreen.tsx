// === Module 16920: MessagesScreen ===

// Module 16920 (MessagesScreen)
import Fragment from "Fragment" /* 21 */;
import MessageSearchResultParserDefault from "MessageSearchResultParser" /* 16882 */;
import BaseMessagesScreen from "BaseMessagesScreen" /* 16906 */;
import react from "react" /* 19 */;
import SearchQueryStore from "SearchQueryStore" /* 11994 */;
import SearchConstants from "SearchConstants" /* 7524 */;
import size from "module_2" /* 2 */;

let Pins;

let c10;
let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
({ SEARCH_FILTERS_BY_TAB: hasOwnProperty, SearchFilter: metroRequire, SEARCH_PINNED_MESSAGES_LINE_CLAMP: metroImportDefault, SEARCH_MESSAGES_DEFAULT_LINE_CLAMP: metroImportAll, MESSAGE_PLACEHOLDER_ITEM_SIZE: c9, SearchListItemTypes: c10 } = SearchConstants);
const jsx = Fragment.jsx;
const memoResult = react.memo(function MessagesScreen(searchContext) {
  let closure_6;
  let num;
  searchContext = searchContext.searchContext;
  const tab = searchContext.tab;
  let stateFromStores;
  let callback;
  Pins = undefined;
  let memo;
  let placeholderCount;
  let item;
  let tmp = searchContext;
  const isFocused = searchContext.isFocused;
  let obj = searchContext(stateFromStores[4]);
  const searchMessages = obj.useSearchMessages(searchContext, tab);
  let obj2 = searchContext(stateFromStores[5]);
  let items = [callback];
  const items1 = [searchContext];
  stateFromStores = obj2.useStateFromStores(items, () => SearchQueryStore.getSearchResultsQuery(searchContext), items1);
  let obj3 = searchContext(stateFromStores[6]);
  const onPressMessageItem = obj3.useOnPressMessageItem({ searchContext });
  const items2 = [onPressMessageItem, searchContext];
  callback = onPressMessageItem.useCallback((arg0, index) => {
    let channelId;
    let messageId;
    ({ channelId, messageId } = arg0);
    const obj = BaseMessagesScreen;
    const obj2 = { searchContext, channelId, messageId, index };
    const result = obj.trackMessageItemPress(obj2);
    onPressMessageItem(channelId, messageId);
  }, items2);
  let closure_5 = onPressMessageItem.useRef({});
  const tmp6 = closure_5[tab] === Pins.Pins ? memo : placeholderCount;
  Pins = tmp6;
  const items3 = [tmp6, stateFromStores];
  memo = obj4.useMemo(() => {
    const tmp = new MessageSearchResultParserDefault(stateFromStores, closure_6);
    return tmp;
  }, items3);
  const obj5 = { searchContext, tab, placeholderHeight: item, numColumns: 1 };
  const tmpResult = tmp(stateFromStores[9]);
  const searchMessagesLoadingState = tmpResult.useSearchMessagesLoadingState(obj5);
  placeholderCount = searchMessagesLoadingState.placeholderCount;
  const isFirstPageLoading = searchMessagesLoadingState.isFirstPageLoading;
  let length;
  const isNextPageLoading = searchMessagesLoadingState.isNextPageLoading;
  if (searchMessages != null) {
    length = searchMessages.length;
  }
  const obj6 = { searchContext, searchQueryString: stateFromStores, hasKeywordResults: num > 0, isKeywordFirstPageLoading: isFirstPageLoading };
  num = length;
  const useSmartSearchMessages = tmp(tmp2[10]).useSmartSearchMessages;
  tmp(stateFromStores[10]);
  if (length == null) {
    num = 0;
  }
  const smartSearchMessages = useSmartSearchMessages(obj6);
  item = smartSearchMessages.item;
  const items4 = [callback, item, tmp6, searchMessages, memo, placeholderCount];
  const status = smartSearchMessages.status;
  const memo1 = obj4.useMemo(() => {
    let lineClamp;
    let messageSizeCacheRef;
    let num;
    const items = [];
    if (null != item) {
      items.push(tmp);
    }
    if (searchMessages != null) {
      item = searchMessages.forEach((item, index) => {
        function onPress(arg0) {
          return closure_2_4(arg0, closure_0);
        }
        let closure_0 = index;
        const element = { type: constants.MESSAGE, props: { message: memo.parse(item), onPress, lineClamp, messageSizeCacheRef } };
        ({ message: memo.parse(item), onPress, lineClamp, messageSizeCacheRef });
        items.push(element);
      });
    }
    const obj = searchContext(stateFromStores[11]);
    const obj2 = { numColumns: 1, numResults: items.length, placeholderCount };
    const adjustedPlaceholderCount = obj.getAdjustedPlaceholderCount(obj2);
    for (let num = 0; num < adjustedPlaceholderCount; num = num + 1) {
      let obj3 = { type: constants.MESSAGE_PLACEHOLDER, key: "message-placeholder-" + num };
      let _HermesInternal = HermesInternal;
      let push = items.push;
      let arr4 = push(obj3);
    }
    return items;
  }, items4);
  const tmpResult4 = tmp(stateFromStores[12]);
  const contentContainerStyles = tmpResult4.useContentContainerStyles();
  searchMessages(stateFromStores[7]);
  return <tmp14 data={memo1} searchContext={searchContext} tab={tab} isFocused={isFocused} contentContainerStyle={contentContainerStyles.messagesContentContainer} ItemSeparatorComponent={tmp(stateFromStores[13]).MessageVerticalSeparator} isFirstPageLoading={isFirstPageLoading} isNextPageLoading={isNextPageLoading} keywordResultCount={length} smartSearchStatus={status} />;
});
let result = size.fileFinishedImporting("modules/search/native/components/tabs/pages/messages/MessagesScreen.tsx");

export default memoResult;