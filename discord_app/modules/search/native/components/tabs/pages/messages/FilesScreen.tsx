// === Module 16911: FilesScreen ===

// Module 16911 (FilesScreen)
import Fragment from "Fragment" /* 21 */;
import SearchPlatformUtils from "SearchPlatformUtils" /* 11980 */;
import BaseMessagesScreen from "BaseMessagesScreen" /* 16906 */;
import react from "react" /* 19 */;
import SearchConstants from "SearchConstants" /* 7524 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_5, placeholderHeight, searchContext;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
({ SearchListItemTypes: closure_4, CARD_ESTIMATED_ITEM_SIZE: hasOwnProperty, FILES_OR_LINKS_NUM_COLUMNS: metroRequire, FILES_OR_LINKS_GAP_WIDTH: metroImportDefault } = SearchConstants);
const jsx = Fragment.jsx;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((searchContext) => {
  let isFirstPageLoading;
  let isFocused;
  let isNextPageLoading;
  let obj11;
  let obj8;
  let obj9;
  let onPressMessageItem;
  let placeholderCount;
  let tab;
  let tmp6;
  let width;
  let obj = searchContext(onPressMessageItem[4]);
  const cResult = obj.c(21);
  searchContext = searchContext.searchContext;
  ({ tab, isFocused, width } = searchContext);
  let obj2 = searchContext(onPressMessageItem[5]);
  const contentContainerStyles = obj2.useContentContainerStyles();
  let obj3 = searchContext(onPressMessageItem[6]);
  const searchMessages = obj3.useSearchMessages(searchContext, tab);
  const obj4 = searchContext(onPressMessageItem[7]);
  const fileOrLinkImageDimensions = obj4.useFileOrLinkImageDimensions(width);
  if (cResult[0] !== searchContext) {
    const obj5 = { searchContext };
    cResult[0] = searchContext;
    cResult[1] = obj5;
    tmp6 = obj5;
  } else {
    tmp6 = cResult[1];
  }
  const tmpResult = searchContext(onPressMessageItem[8]);
  onPressMessageItem = tmpResult.useOnPressMessageItem(tmp6);
  if (cResult[2] === onPressMessageItem) {
    let tmp8;
    if (cResult[3] === searchContext) {
      tmp8 = cResult[4];
    }
    let closure_3 = tmp8;
    if (cResult[5] === searchContext) {
      let tmp9;
      let items;
      if (cResult[6] === tab) {
        tmp9 = cResult[7];
      }
      const tmpResult3 = searchContext(onPressMessageItem[10]);
      const searchMessagesLoadingState = tmpResult3.useSearchMessagesLoadingState(tmp9);
      ({ isFirstPageLoading, isNextPageLoading, placeholderCount } = searchMessagesLoadingState);
      if (cResult[8] === tmp8) {
        if (cResult[9] === fileOrLinkImageDimensions) {
          if (cResult[10] === searchMessages) {
            let tmp14;
            let tmp15;
            if (cResult[11] === placeholderCount) {
              items = cResult[12];
              tmp14 = tmp;
              tmp15 = tmp2;
            }
            if (cResult[13] === tmp13) {
              if (cResult[14] === isFirstPageLoading) {
                if (cResult[15] === isFocused) {
                  if (cResult[16] === isNextPageLoading) {
                    if (cResult[17] === searchContext) {
                      if (cResult[18] === contentContainerStyles.filesOrLinksContentContainer) {
                        let tmp26;
                        if (cResult[19] === tab) {
                          tmp26 = cResult[20];
                        }
                        return tmp26;
                      }
                    }
                  }
                }
              }
            }
            fileOrLinkImageDimensions(tmp15[9]);
            const tmp31 = <tmp29 data={tmp13} searchContext={searchContext} tab={tab} isFocused={isFocused} contentContainerStyle={contentContainerStyles.filesOrLinksContentContainer} ItemSeparatorComponent={tmp14(tmp15[13]).CardVerticalSeparator} numColumns={numColumns} isFirstPageLoading={isFirstPageLoading} isNextPageLoading={isNextPageLoading} />;
            cResult[13] = tmp13;
            cResult[14] = isFirstPageLoading;
            cResult[15] = isFocused;
            cResult[16] = isNextPageLoading;
            cResult[17] = searchContext;
            cResult[18] = contentContainerStyles.filesOrLinksContentContainer;
            cResult[19] = tab;
            cResult[20] = tmp31;
            tmp26 = tmp31;
          }
        }
      }
      items = [];
      placeholderHeight = 0;
      if (searchMessages != null) {
        let item = searchMessages.forEach((item) => {
          let imageStyle;
          let obj = SearchPlatformUtils;
          const files = obj.getFiles(item);
          item = files.forEach((data, index) => {
            let obj;
            let obj2;
            let obj3;
            const sum = closure_5 + index;
            let closure_0 = sum;
            const element = { type: items.FILE, props: obj };
            const push = navigation.push;
            obj = {
              data,
              onPress(arg0) {
                return closure_2_3(arg0, closure_0);
              },
              imageStyle,
              containerStyle: obj3.getGridItemSpacingStyles(obj2)
            };
            obj2 = { itemIndex: sum, spacing, numColumns };
            obj3 = searchContext(onPressMessageItem[11]);
            push(element);
          });
          closure_5 = closure_5 + files.length;
        });
      }
      let tmp18 = tmp;
      let tmp19 = tmp2;
      if (placeholderCount > 0) {
        const obj7 = { numColumns, numResults: items.length, placeholderCount };
        const tmpResult4 = searchContext(onPressMessageItem[12]);
        const adjustedPlaceholderCount = tmpResult4.getAdjustedPlaceholderCount(obj7);
        let num7 = 0;
        tmp18 = tmp;
        tmp19 = tmp2;
        if (0 < adjustedPlaceholderCount) {
          do {
            let element = { type: items.FILE_OR_LINK_PLACEHOLDER, key: "file-or-link-placeholder-" + num7, props: obj8 };
            let _HermesInternal = HermesInternal;
            let push = items.push;
            obj8 = { imageStyle: fileOrLinkImageDimensions, containerStyle: obj11.getGridItemSpacingStyles(obj9) };
            obj11 = searchContext(onPressMessageItem[11]);
            obj9 = { itemIndex: length + num7, spacing, numColumns };
            let arr = push(element);
            num7 = num7 + 1;
            tmp18 = searchContext;
            tmp19 = onPressMessageItem;
          } while (num7 < adjustedPlaceholderCount);
        }
      }
      cResult[8] = tmp8;
      cResult[9] = fileOrLinkImageDimensions;
      cResult[10] = searchMessages;
      cResult[11] = placeholderCount;
      cResult[12] = items;
      tmp14 = tmp18;
      tmp15 = tmp19;
    }
    const obj10 = { searchContext, tab, placeholderHeight, numColumns };
    cResult[5] = searchContext;
    cResult[6] = tab;
    cResult[7] = obj10;
    tmp9 = obj10;
  }
  const fn = function x(arg0, index) {
    let channelId;
    let messageId;
    ({ channelId, messageId } = arg0);
    const obj = BaseMessagesScreen;
    const obj2 = { searchContext, channelId, messageId, index };
    const result = obj.trackMessageItemPress(obj2);
    onPressMessageItem(channelId, messageId);
  };
  cResult[2] = onPressMessageItem;
  cResult[3] = searchContext;
  cResult[4] = fn;
  tmp8 = fn;
}) : ((searchContext) => {
  let isFirstPageLoading;
  let isFocused;
  let isNextPageLoading;
  let width;
  searchContext = searchContext.searchContext;
  const tab = searchContext.tab;
  let fileOrLinkImageDimensions;
  let placeholderCount;
  ({ isFocused, width } = searchContext);
  let obj = searchContext(fileOrLinkImageDimensions[5]);
  const contentContainerStyles = obj.useContentContainerStyles();
  let obj2 = searchContext(fileOrLinkImageDimensions[6]);
  const searchMessages = obj2.useSearchMessages(searchContext, tab);
  let obj3 = searchContext(fileOrLinkImageDimensions[7]);
  fileOrLinkImageDimensions = obj3.useFileOrLinkImageDimensions(width);
  let obj4 = searchContext(fileOrLinkImageDimensions[8]);
  const onPressMessageItem = obj4.useOnPressMessageItem({ searchContext });
  let items = [onPressMessageItem, searchContext];
  const callback = onPressMessageItem.useCallback((arg0, index) => {
    let channelId;
    let messageId;
    ({ channelId, messageId } = arg0);
    const obj = BaseMessagesScreen;
    const obj2 = { searchContext, channelId, messageId, index };
    const result = obj.trackMessageItemPress(obj2);
    onPressMessageItem(channelId, messageId);
  }, items);
  let obj5 = searchContext(fileOrLinkImageDimensions[10]);
  const obj6 = { searchContext, tab, placeholderHeight: placeholderCount, numColumns };
  const searchMessagesLoadingState = obj5.useSearchMessagesLoadingState(obj6);
  placeholderCount = searchMessagesLoadingState.placeholderCount;
  const items1 = [callback, fileOrLinkImageDimensions, searchMessages, placeholderCount];
  ({ isFirstPageLoading, isNextPageLoading } = searchMessagesLoadingState);
  const memo = onPressMessageItem.useMemo(() => {
    let imageStyle;
    let obj2;
    let obj3;
    let obj4;
    const items = [];
    let closure_1 = 0;
    const arr2 = closure_1;
    if (closure_1 != null) {
      let item = arr2.forEach((item) => {
        let obj = SearchPlatformUtils;
        const files = obj.getFiles(item);
        item = files.forEach((data, index) => {
          let obj;
          let obj2;
          let obj3;
          const sum = closure_1_1 + index;
          const element = { type: callback.FILE, props: obj };
          const push = navigation.push;
          obj = {
            data,
            onPress(arg0) {
              return closure_2_4(arg0, sum);
            },
            imageStyle,
            containerStyle: obj3.getGridItemSpacingStyles(obj2)
          };
          obj2 = { itemIndex: sum, spacing, numColumns };
          obj3 = searchContext(fileOrLinkImageDimensions[11]);
          push(element);
        });
        closure_1 = closure_1 + files.length;
      });
    }
    if (placeholderCount > 0) {
      let num;
      let obj = { numColumns, numResults: items.length, placeholderCount: tmp2 };
      const obj5 = searchContext(fileOrLinkImageDimensions[12]);
      const adjustedPlaceholderCount = obj5.getAdjustedPlaceholderCount(obj);
      for (let num = 0; num < adjustedPlaceholderCount; num = num + 1) {
        let element = { type: callback.FILE_OR_LINK_PLACEHOLDER, key: "file-or-link-placeholder-" + num, props: obj2 };
        let _HermesInternal = HermesInternal;
        let push = items.push;
        obj2 = { imageStyle: fileOrLinkImageDimensions, containerStyle: obj3.getGridItemSpacingStyles(obj4) };
        obj3 = searchContext(fileOrLinkImageDimensions[11]);
        obj4 = { itemIndex: length + num, spacing, numColumns };
        let arr = push(element);
      }
    }
    return items;
  }, items1);
  searchMessages(fileOrLinkImageDimensions[9]);
  return <tmp8 data={memo} searchContext={searchContext} tab={tab} isFocused={isFocused} contentContainerStyle={contentContainerStyles.filesOrLinksContentContainer} ItemSeparatorComponent={searchContext(fileOrLinkImageDimensions[13]).CardVerticalSeparator} numColumns={numColumns} isFirstPageLoading={isFirstPageLoading} isNextPageLoading={isNextPageLoading} />;
}));
let result = size.fileFinishedImporting("modules/search/native/components/tabs/pages/messages/FilesScreen.tsx");

export default memoResult;