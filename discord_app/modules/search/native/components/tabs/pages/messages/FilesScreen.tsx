// discord_app/modules/search/native/components/tabs/pages/messages/FilesScreen.tsx
import importAllResult from "../../../../../../../../_runtime/00019_noop.js";
import MessageEmbedTypes from "../../../../../SearchConstants.tsx";
import { jsx } from "../../../../../../../../_runtime/react/00021_jsxProd.js";

const require = arg1;
let c3 = importAllResult;
({ SearchListItemTypes: c4, CARD_ESTIMATED_ITEM_SIZE: c5, FILES_OR_LINKS_NUM_COLUMNS: closure_6, FILES_OR_LINKS_GAP_WIDTH: error } = MessageEmbedTypes);
const memoResult = importAllResult.memo(function FilesScreen(searchContext) {
  searchContext = searchContext.searchContext;
  const tab = searchContext.tab;
  let searchMessages;
  let fileOrLinkImageDimensions;
  let onPressMessageItem;
  let callback;
  let placeholderCount;
  ({ isFocused, width } = searchContext);
  let obj = searchContext(fileOrLinkImageDimensions[3]);
  const contentContainerStyles = obj.useContentContainerStyles();
  searchMessages = searchContext(fileOrLinkImageDimensions[4]).useSearchMessages(searchContext, tab);
  const obj2 = searchContext(fileOrLinkImageDimensions[4]);
  fileOrLinkImageDimensions = searchContext(fileOrLinkImageDimensions[5]).useFileOrLinkImageDimensions(width);
  let obj3 = searchContext(fileOrLinkImageDimensions[5]);
  onPressMessageItem = searchContext(fileOrLinkImageDimensions[6]).useOnPressMessageItem({ searchContext });
  let items = [onPressMessageItem, searchContext];
  callback = onPressMessageItem.useCallback((arg0, index) => {
    ({ channelId, messageId } = arg0);
    let obj = searchContext(fileOrLinkImageDimensions[7]);
    obj = { searchContext, channelId, messageId, index };
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
      let item = c1.forEach((arg0) => {
        const files = searchContext(fileOrLinkImageDimensions[9]).getFiles(arg0);
        const item = files.forEach((data) => {
          const sum = closure_1 + arg1;
          let arr = sum;
          let obj = { type: closure_2_4.FILE, props: null };
          obj = {
            data,
            onPress(arg0) {
              return closure_1_4(arg0, closure_0);
            },
            imageStyle: closure_1_2,
            containerStyle: null
          };
          obj = { itemIndex: sum, spacing: closure_2_7, numColumns: closure_2_6 };
          obj[3] = items(closure_2_2[9]).getGridItemSpacingStyles(obj);
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
        let tmp3 = callback;
        obj[0] = callback.FILE_OR_LINK_PLACEHOLDER;
        let _HermesInternal = HermesInternal;
        obj[1] = "file-or-link-placeholder-" + num;
        obj = { imageStyle: null, containerStyle: null };
        let tmp4 = fileOrLinkImageDimensions;
        obj[0] = fileOrLinkImageDimensions;
        let tmp5 = searchContext;
        let tmp6 = fileOrLinkImageDimensions;
        let obj3 = searchContext(fileOrLinkImageDimensions[9]);
        obj1 = { itemIndex: null, spacing: null, numColumns: null };
        obj1[0] = length + num;
        let tmp7 = closure_1_7;
        obj1[1] = closure_1_7;
        let tmp8 = closure_1_6;
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
let result = require("set").fileFinishedImporting("modules/search/native/components/tabs/pages/messages/FilesScreen.tsx");

export default memoResult;