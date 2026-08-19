// === Module 15921: ? ===

// Module 15921
import importAllResult from "noop" /* 19 */;
import MessageEmbedTypes from "MessageEmbedTypes" /* 8507 */;
import { jsx } from "jsxProd" /* 21 */;

const require = fn;
let c3 = importAllResult;
({ SearchListItemTypes: c4, CARD_ESTIMATED_ITEM_SIZE: c5, FILES_OR_LINKS_NUM_COLUMNS: closure_6, FILES_OR_LINKS_GAP_WIDTH: error } = MessageEmbedTypes);
const memoResult = importAllResult.memo(function FilesScreen(searchContext) {
  searchContext = searchContext.searchContext;
  const tab = searchContext.tab;
  let fileOrLinkImageDimensions;
  let placeholderCount;
  ({ isFocused, width } = searchContext);
  let obj = searchContext(fileOrLinkImageDimensions[3]);
  const contentContainerStyles = obj.useContentContainerStyles();
  const searchMessages = searchContext(fileOrLinkImageDimensions[4]).useSearchMessages(searchContext, tab);
  const obj2 = searchContext(fileOrLinkImageDimensions[4]);
  fileOrLinkImageDimensions = searchContext(fileOrLinkImageDimensions[5]).useFileOrLinkImageDimensions(width);
  let obj3 = searchContext(fileOrLinkImageDimensions[5]);
  const onPressMessageItem = searchContext(fileOrLinkImageDimensions[6]).useOnPressMessageItem({ searchContext });
  let items = [onPressMessageItem, searchContext];
  const callback = onPressMessageItem.useCallback((arg0, index) => {
    ({ channelId, messageId } = arg0);
    searchContext(fileOrLinkImageDimensions[7]);
    const obj = { searchContext, channelId, messageId, index };
    const result = obj.trackMessageItemPress(obj);
    onPressMessageItem(channelId, messageId);
  }, items);
  const obj4 = searchContext(fileOrLinkImageDimensions[6]);
  obj = { searchContext, tab, placeholderHeight: placeholderCount, numColumns: closure_6 };
  const searchMessagesLoadingState = searchContext(fileOrLinkImageDimensions[8]).useSearchMessagesLoadingState(obj);
  placeholderCount = searchMessagesLoadingState.placeholderCount;
  const items1 = [callback, fileOrLinkImageDimensions, searchMessages, placeholderCount];
  ({ isFirstPageLoading, isNextPageLoading } = searchMessagesLoadingState);
  const memo = onPressMessageItem.useMemo(() => {
    const items = [];
    c1 = 0;
    if (c1 != null) {
      let item = c1.forEach((item, index) => {
        const files = searchContext(fileOrLinkImageDimensions[9]).getFiles(item);
        item = files.forEach((item, index) => {
          const sum = closure_1 + index;
          let arr = sum;
          const obj = { itemIndex: sum, spacing: closure_2_7, numColumns: closure_2_6 };
          obj[3] = items(fileOrLinkImageDimensions[9]).getGridItemSpacingStyles(obj);
          obj[1] = obj;
          arr = arr.push(obj);
        });
        closure_1 = closure_1 + files.length;
      });
    }
    if (placeholderCount > 0) {
      let obj = { numColumns: null, numResults: null, placeholderCount: null };
      obj[0] = closure_1_6;
      obj[1] = items.length;
      obj[2] = tmp2;
      const adjustedPlaceholderCount = searchContext(fileOrLinkImageDimensions[10]).getAdjustedPlaceholderCount(obj);
      for (let num = 0; num < adjustedPlaceholderCount; num = num + 1) {
        obj = { type: null, key: null, props: null };
        obj[0] = callback.FILE_OR_LINK_PLACEHOLDER;
        let _HermesInternal = HermesInternal;
        obj[1] = "file-or-link-placeholder-" + num;
        obj = { imageStyle: null, containerStyle: null };
        obj[0] = fileOrLinkImageDimensions;
        let obj3 = searchContext(fileOrLinkImageDimensions[9]);
        obj1 = { itemIndex: null, spacing: null, numColumns: null };
        obj1[0] = length + num;
        obj1[1] = closure_1_7;
        obj1[2] = closure_1_6;
        obj[1] = obj3.getGridItemSpacingStyles(obj1);
        obj[2] = obj;
        let arr = items.push(obj);
      }
      const obj5 = searchContext(fileOrLinkImageDimensions[10]);
    }
    return items;
  }, items1);
  obj = { data: memo, searchContext, tab, isFocused, contentContainerStyle: contentContainerStyles.filesOrLinksContentContainer, ItemSeparatorComponent: null, numColumns: null, isFirstPageLoading: null, isNextPageLoading: null };
  let obj5 = searchContext(fileOrLinkImageDimensions[8]);
  obj[5] = searchContext(fileOrLinkImageDimensions[11]).CardVerticalSeparator;
  obj[6] = closure_6;
  obj[7] = isFirstPageLoading;
  obj[8] = isNextPageLoading;
  return jsx(searchMessages(fileOrLinkImageDimensions[7]), { data: memo, searchContext, tab, isFocused, contentContainerStyle: contentContainerStyles.filesOrLinksContentContainer, ItemSeparatorComponent: null, numColumns: null, isFirstPageLoading: null, isNextPageLoading: null });
});
let result = require("obj132").fileFinishedImporting("modules/search/native/components/tabs/pages/messages/FilesScreen.tsx");

export default memoResult;