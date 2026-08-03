import importAllResult from "noop";
import prototype from "prototype";
import MessageEmbedTypes from "MessageEmbedTypes";
import { jsx } from "jsxProd";

let c10;
let c5;
let c9;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
let c3 = importAllResult;
({ SEARCH_FILTERS_BY_TAB: c5, SearchFilter: closure_6, SEARCH_PINNED_MESSAGES_LINE_CLAMP: error, SEARCH_MESSAGES_DEFAULT_LINE_CLAMP: metroImportAll, MESSAGE_PLACEHOLDER_ITEM_SIZE: c9, SearchListItemTypes: c10 } = MessageEmbedTypes);
const memoResult = importAllResult.memo(function MessagesScreen(isFocused) {
  let isFirstPageLoading;
  let isNextPageLoading;
  const searchContext = isFocused.searchContext;
  const tab = isFocused.tab;
  let searchMessages;
  let stateFromStores;
  let onPressMessageItem;
  let callback;
  let table;
  let Pins;
  let memo;
  let placeholderCount;
  let obj = searchContext(stateFromStores[4]);
  searchMessages = obj.useSearchMessages(searchContext, tab);
  let items = [callback];
  const items1 = [searchContext];
  stateFromStores = searchContext(stateFromStores[5]).useStateFromStores(items, () => callback.getSearchResultsQuery(searchContext), items1);
  const obj2 = searchContext(stateFromStores[5]);
  onPressMessageItem = searchContext(stateFromStores[6]).useOnPressMessageItem({ searchContext });
  const items2 = [onPressMessageItem, searchContext];
  callback = onPressMessageItem.useCallback((arg0, index) => {
    let channelId;
    let messageId;
    ({ channelId, messageId } = arg0);
    let obj = searchContext(stateFromStores[7]);
    obj = { searchContext, channelId, messageId, index };
    const result = obj.trackMessageItemPress(obj);
    onPressMessageItem(channelId, messageId);
  }, items2);
  table = onPressMessageItem.useRef({});
  const tmp7 = table[tab] === Pins.Pins ? memo : placeholderCount;
  Pins = tmp7;
  const items3 = [tmp7, stateFromStores];
  memo = obj4.useMemo(() => new searchMessages(stateFromStores[8])(stateFromStores, c6), items3);
  let tmpResult = tmp(tmp2[9]);
  obj = { searchContext, tab, placeholderHeight: closure_9, numColumns: 1 };
  const searchMessagesLoadingState = tmpResult.useSearchMessagesLoadingState(obj);
  placeholderCount = searchMessagesLoadingState.placeholderCount;
  const items4 = [callback, tmp7, searchMessages, memo, placeholderCount];
  ({ isFirstPageLoading, isNextPageLoading } = searchMessagesLoadingState);
  const memo1 = obj4.useMemo(() => {
    let items = [];
    if (searchMessages != null) {
      const item = searchMessages.forEach((arg0, arg1) => {
        const items = arg1;
        let obj = { type: outer2_10.MESSAGE, props: null };
        obj = {
          message: outer1_7.parse(arg0),
          onPress(arg0) {
            return outer1_4(arg0, closure_0);
          },
          lineClamp: outer1_6,
          messageSizeCacheRef: outer1_5
        };
        obj[1] = obj;
        items.push(obj);
      });
    }
    let obj = searchContext(stateFromStores[10]);
    obj = { numColumns: 1, numResults: items.length, placeholderCount };
    const adjustedPlaceholderCount = obj.getAdjustedPlaceholderCount(obj);
    for (let num = 0; num < adjustedPlaceholderCount; num = num + 1) {
      obj = { type: null, key: null };
      let tmp3 = outer1_10;
      obj[0] = outer1_10.MESSAGE_PLACEHOLDER;
      let _HermesInternal = HermesInternal;
      obj[1] = "message-placeholder-" + num;
      let arr = items.push(obj);
    }
    return items;
  }, items4);
  tmpResult = tmp(tmp2[11]);
  const contentContainerStyles = tmpResult.useContentContainerStyles();
  obj = { data: memo1, searchContext, tab, isFocused: isFocused.isFocused, contentContainerStyle: contentContainerStyles.messagesContentContainer, ItemSeparatorComponent: null, isFirstPageLoading: null, isNextPageLoading: null };
  const obj3 = searchContext(stateFromStores[6]);
  obj[5] = searchContext(stateFromStores[12]).MessageVerticalSeparator;
  obj[6] = isFirstPageLoading;
  obj[7] = isNextPageLoading;
  return jsx(searchMessages(stateFromStores[7]), { data: memo1, searchContext, tab, isFocused: isFocused.isFocused, contentContainerStyle: contentContainerStyles.messagesContentContainer, ItemSeparatorComponent: null, isFirstPageLoading: null, isNextPageLoading: null });
});
let result = require("MessageEmbedTypes").fileFinishedImporting("modules/search/native/components/tabs/pages/messages/MessagesScreen.tsx");

export default memoResult;