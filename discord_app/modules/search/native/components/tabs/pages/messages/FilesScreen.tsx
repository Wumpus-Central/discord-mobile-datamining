// === Module 16700: FilesScreen ===

// Module 16700 (FilesScreen)
import SearchPlatformUtils from "SearchPlatformUtils" /* 12338 */;
import BaseMessagesScreen from "BaseMessagesScreen" /* 16695 */;
import noop from "module_19" /* 19 */;

require = fn;
const SearchConstants = fn(7878);
({ SearchListItemTypes: closure_4, CARD_ESTIMATED_ITEM_SIZE: hasOwnProperty, FILES_OR_LINKS_NUM_COLUMNS: metroRequire, FILES_OR_LINKS_GAP_WIDTH: closure_7 } = SearchConstants);
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/search/native/components/tabs/pages/messages/FilesScreen.tsx");

export default noop.memo(function FilesScreen(searchContext) {
  searchContext = searchContext.searchContext;
  const tab = searchContext.tab;
  let fileOrLinkImageDimensions;
  let placeholderCount;
  ({ isFocused, width } = searchContext);
  let obj = searchContext(fileOrLinkImageDimensions[3]);
  const contentContainerStyles = obj.useContentContainerStyles();
  let searchMessages = searchContext(fileOrLinkImageDimensions[4]).useSearchMessages(searchContext, tab);
  const obj2 = searchContext(fileOrLinkImageDimensions[4]);
  fileOrLinkImageDimensions = searchContext(fileOrLinkImageDimensions[5]).useFileOrLinkImageDimensions(width);
  let obj3 = searchContext(fileOrLinkImageDimensions[5]);
  const onPressMessageItem = searchContext(fileOrLinkImageDimensions[6]).useOnPressMessageItem({ searchContext });
  let items = [onPressMessageItem, searchContext];
  const callback = onPressMessageItem.useCallback((arg0, index) => {
    ({ channelId, messageId } = arg0);
    const obj = { searchContext, channelId, messageId, index };
    const result = obj.trackMessageItemPress(obj);
    onPressMessageItem(channelId, messageId);
  }, items);
  const obj4 = searchContext(fileOrLinkImageDimensions[6]);
  obj = { searchContext, tab, placeholderHeight: placeholderCount, numColumns };
  const searchMessagesLoadingState = searchContext(fileOrLinkImageDimensions[8]).useSearchMessagesLoadingState(obj);
  placeholderCount = searchMessagesLoadingState.placeholderCount;
  const items1 = [callback, fileOrLinkImageDimensions, searchMessages, placeholderCount];
  ({ isFirstPageLoading, isNextPageLoading } = searchMessagesLoadingState);
  const memo = onPressMessageItem.useMemo(() => {
    const items = [];
    searchMessages = 0;
    if (searchMessages != null) {
      let item = searchMessages.forEach((item) => {
        const files = SearchPlatformUtils.getFiles(item);
        item = files.forEach((data, index) => {
          const sum = closure_1_1 + index;
          closure_0 = sum;
          const element = { type: callback.FILE, props: null };
          let obj = {
            data,
            onPress(arg0) {
              return closure_2_4(arg0, sum);
            },
            imageStyle,
            containerStyle: null
          };
          obj = { itemIndex: sum, spacing, numColumns };
          obj.containerStyle = searchContext(fileOrLinkImageDimensions[9]).getGridItemSpacingStyles(obj);
          element.props = obj;
          items.push(element);
        });
        closure_1 = closure_1 + files.length;
      });
    }
    if (placeholderCount > 0) {
      let obj = { numColumns, numResults: items.length, placeholderCount: tmp2 };
      const adjustedPlaceholderCount = searchContext(fileOrLinkImageDimensions[10]).getAdjustedPlaceholderCount(obj);
      for (let num = 0; num < adjustedPlaceholderCount; num = num + 1) {
        let element = { type: callback.FILE_OR_LINK_PLACEHOLDER, key: null, props: null };
        let _HermesInternal = HermesInternal;
        element.key = "file-or-link-placeholder-" + num;
        obj = { imageStyle: fileOrLinkImageDimensions, containerStyle: null };
        let obj3 = searchContext(fileOrLinkImageDimensions[9]);
        let obj1 = { itemIndex: length + num, spacing, numColumns };
        obj.containerStyle = obj3.getGridItemSpacingStyles(obj1);
        element.props = obj;
        let arr = items.push(element);
      }
      const obj5 = searchContext(fileOrLinkImageDimensions[10]);
    }
    return items;
  }, items1);
  obj = { data: memo, searchContext, tab, isFocused, contentContainerStyle: contentContainerStyles.filesOrLinksContentContainer, ItemSeparatorComponent: null, numColumns: null, isFirstPageLoading: null, isNextPageLoading: null };
  let obj5 = searchContext(fileOrLinkImageDimensions[8]);
  obj.ItemSeparatorComponent = searchContext(fileOrLinkImageDimensions[11]).CardVerticalSeparator;
  obj.numColumns = numColumns;
  obj.isFirstPageLoading = isFirstPageLoading;
  obj.isNextPageLoading = isNextPageLoading;
  return jsx(searchMessages(fileOrLinkImageDimensions[7]), { data: memo, searchContext, tab, isFocused, contentContainerStyle: contentContainerStyles.filesOrLinksContentContainer, ItemSeparatorComponent: null, numColumns: null, isFirstPageLoading: null, isNextPageLoading: null });
});