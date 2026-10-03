// discord_app/modules/search/native/components/tabs/pages/messages/FilesScreen.tsx
import SearchPlatformUtils from "../../../../SearchPlatformUtils.tsx";
import BaseMessagesScreen from "BaseMessagesScreen.tsx";
import noop from "../../../../../../../../_runtime/metro/00019__.js";

require = fn;
const SearchConstants = fn(7513);
({
  SearchListItemTypes: closure_4,
  CARD_ESTIMATED_ITEM_SIZE: hasOwnProperty,
  FILES_OR_LINKS_NUM_COLUMNS: metroRequire,
  FILES_OR_LINKS_GAP_WIDTH: closure_7,
} = SearchConstants);
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/search/native/components/tabs/pages/messages/FilesScreen.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (searchContext) => {
        const cResult = searchContext(onPressMessageItem[4]).c(21);
        searchContext = searchContext.searchContext;
        ({ tab, isFocused, width } = searchContext);
        let obj = searchContext(onPressMessageItem[4]);
        const contentContainerStyles = searchContext(onPressMessageItem[5]).useContentContainerStyles();
        const obj2 = searchContext(onPressMessageItem[5]);
        const searchMessages = searchContext(onPressMessageItem[6]).useSearchMessages(searchContext, tab);
        const obj3 = searchContext(onPressMessageItem[6]);
        const fileOrLinkImageDimensions = searchContext(onPressMessageItem[7]).useFileOrLinkImageDimensions(width);
        if (cResult[0] !== searchContext) {
          const obj5 = { searchContext };
          cResult[0] = searchContext;
          cResult[1] = obj5;
          let tmp6 = obj5;
        } else {
          tmp6 = cResult[1];
        }
        const obj4 = searchContext(onPressMessageItem[7]);
        onPressMessageItem = searchContext(onPressMessageItem[8]).useOnPressMessageItem(tmp6);
        if (cResult[2] === onPressMessageItem) {
          if (cResult[3] === searchContext) {
            let tmp8 = cResult[4];
          }
          closure_3 = tmp8;
          if (cResult[5] === searchContext) {
            if (cResult[6] === tab) {
              let tmp9 = cResult[7];
            }
            const searchMessagesLoadingState = tmp(tmp2[10]).useSearchMessagesLoadingState(tmp9);
            ({ isFirstPageLoading, isNextPageLoading, placeholderCount } = searchMessagesLoadingState);
            if (cResult[8] === tmp8) {
              if (cResult[9] === fileOrLinkImageDimensions) {
                if (cResult[10] === searchMessages) {
                  if (cResult[11] === placeholderCount) {
                    let items = cResult[12];
                    let tmp14 = tmp;
                    let tmp15 = tmp2;
                  }
                  if (cResult[13] === tmp13) {
                    if (cResult[14] === isFirstPageLoading) {
                      if (cResult[15] === isFocused) {
                        if (cResult[16] === isNextPageLoading) {
                          if (cResult[17] === searchContext) {
                            if (cResult[18] === contentContainerStyles.filesOrLinksContentContainer) {
                              if (cResult[19] === tab) {
                                let tmp26 = cResult[20];
                              }
                              return tmp26;
                            }
                          }
                        }
                      }
                    }
                  }
                  const obj6 = {
                    data: tmp13,
                    searchContext,
                    tab,
                    isFocused,
                    contentContainerStyle: contentContainerStyles.filesOrLinksContentContainer,
                    ItemSeparatorComponent: tmp14(tmp15[13]).CardVerticalSeparator,
                    numColumns,
                    isFirstPageLoading,
                    isNextPageLoading,
                  };
                  const tmp31 = jsx(fileOrLinkImageDimensions(tmp15[9]), {
                    data: tmp13,
                    searchContext,
                    tab,
                    isFocused,
                    contentContainerStyle: contentContainerStyles.filesOrLinksContentContainer,
                    ItemSeparatorComponent: tmp14(tmp15[13]).CardVerticalSeparator,
                    numColumns,
                    isFirstPageLoading,
                    isNextPageLoading,
                  });
                  cResult[13] = tmp13;
                  cResult[14] = isFirstPageLoading;
                  cResult[15] = isFocused;
                  cResult[16] = isNextPageLoading;
                  cResult[17] = searchContext;
                  cResult[18] = contentContainerStyles.filesOrLinksContentContainer;
                  cResult[19] = tab;
                  cResult[20] = tmp31;
                  tmp26 = tmp31;
                  const tmp29 = fileOrLinkImageDimensions(tmp15[9]);
                }
              }
            }
            items = [];
            placeholderHeight = 0;
            if (searchMessages != null) {
              let item = searchMessages.forEach((item) => {
                const files = SearchPlatformUtils.getFiles(item);
                item = files.forEach((data, index) => {
                  const sum = closure_5 + index;
                  closure_0 = sum;
                  const element = { type: items.FILE, props: null };
                  const obj = {
                    data,
                    onPress(arg0) {
                      return closure_2_3(arg0, sum);
                    },
                    imageStyle,
                    containerStyle: searchContext(onPressMessageItem[11]).getGridItemSpacingStyles({
                      itemIndex: sum,
                      spacing,
                      numColumns,
                    }),
                  };
                  element.props = obj;
                  closure_4.push(element);
                });
                closure_5 = closure_5 + files.length;
              });
            }
            let tmp18 = tmp;
            let tmp19 = tmp2;
            if (placeholderCount > 0) {
              const obj7 = { numColumns, numResults: items.length, placeholderCount };
              const adjustedPlaceholderCount = tmp(tmp2[12]).getAdjustedPlaceholderCount(obj7);
              let num7 = 0;
              tmp18 = tmp;
              tmp19 = tmp2;
              if (0 < adjustedPlaceholderCount) {
                do {
                  let element = { type: null, key: null, props: null };
                  element.type = items.FILE_OR_LINK_PLACEHOLDER;
                  let _HermesInternal = HermesInternal;
                  element.key = "file-or-link-placeholder-" + num7;
                  let obj8 = { imageStyle: fileOrLinkImageDimensions, containerStyle: null };
                  let obj11 = searchContext(onPressMessageItem[11]);
                  let obj9 = { itemIndex: length + num7, spacing, numColumns };
                  obj8.containerStyle = obj11.getGridItemSpacingStyles(obj9);
                  element.props = obj8;
                  let arr = items.push(element);
                  num7 = num7 + 1;
                  tmp18 = searchContext;
                  tmp19 = onPressMessageItem;
                } while (num7 < adjustedPlaceholderCount);
              }
              const tmpResult4 = tmp(tmp2[12]);
            }
            cResult[8] = tmp8;
            cResult[9] = fileOrLinkImageDimensions;
            cResult[10] = searchMessages;
            cResult[11] = placeholderCount;
            cResult[12] = items;
            tmp14 = tmp18;
            tmp15 = tmp19;
            const tmpResult3 = tmp(tmp2[10]);
          }
          const obj10 = { searchContext, tab, placeholderHeight, numColumns };
          cResult[5] = searchContext;
          cResult[6] = tab;
          cResult[7] = obj10;
          tmp9 = obj10;
        }
        const fn = function x(arg0, index) {
          ({ channelId, messageId } = arg0);
          const result = BaseMessagesScreen.trackMessageItemPress({ searchContext, channelId, messageId, index });
          onPressMessageItem(channelId, messageId);
        };
        cResult[2] = onPressMessageItem;
        cResult[3] = searchContext;
        cResult[4] = fn;
        tmp8 = fn;
        const tmpResult = searchContext(onPressMessageItem[8]);
      }
    : (searchContext) => {
        searchContext = searchContext.searchContext;
        const tab = searchContext.tab;
        let fileOrLinkImageDimensions;
        let placeholderCount;
        ({ isFocused, width } = searchContext);
        const contentContainerStyles = searchContext(fileOrLinkImageDimensions[5]).useContentContainerStyles();
        let obj = searchContext(fileOrLinkImageDimensions[5]);
        let searchMessages = searchContext(fileOrLinkImageDimensions[6]).useSearchMessages(searchContext, tab);
        let obj2 = searchContext(fileOrLinkImageDimensions[6]);
        fileOrLinkImageDimensions = searchContext(fileOrLinkImageDimensions[7]).useFileOrLinkImageDimensions(width);
        let obj3 = searchContext(fileOrLinkImageDimensions[7]);
        const onPressMessageItem = searchContext(fileOrLinkImageDimensions[8]).useOnPressMessageItem({ searchContext });
        let items = [onPressMessageItem, searchContext];
        const callback = onPressMessageItem.useCallback((arg0, index) => {
          ({ channelId, messageId } = arg0);
          const result = BaseMessagesScreen.trackMessageItemPress({ searchContext, channelId, messageId, index });
          onPressMessageItem(channelId, messageId);
        }, items);
        let obj4 = searchContext(fileOrLinkImageDimensions[8]);
        const searchMessagesLoadingState = searchContext(fileOrLinkImageDimensions[10]).useSearchMessagesLoadingState({
          searchContext,
          tab,
          placeholderHeight: placeholderCount,
          numColumns,
        });
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
                const obj = {
                  data,
                  onPress(arg0) {
                    return closure_2_4(arg0, sum);
                  },
                  imageStyle,
                  containerStyle: searchContext(fileOrLinkImageDimensions[11]).getGridItemSpacingStyles({
                    itemIndex: sum,
                    spacing,
                    numColumns,
                  }),
                };
                element.props = obj;
                items.push(element);
              });
              closure_1 = closure_1 + files.length;
            });
          }
          if (placeholderCount > 0) {
            let obj = { numColumns, numResults: items.length, placeholderCount: tmp2 };
            const adjustedPlaceholderCount = searchContext(fileOrLinkImageDimensions[12]).getAdjustedPlaceholderCount(
              obj,
            );
            for (let num = 0; num < adjustedPlaceholderCount; num = num + 1) {
              let element = { type: callback.FILE_OR_LINK_PLACEHOLDER, key: null, props: null };
              let _HermesInternal = HermesInternal;
              element.key = "file-or-link-placeholder-" + num;
              let obj2 = { imageStyle: fileOrLinkImageDimensions, containerStyle: null };
              let obj3 = searchContext(fileOrLinkImageDimensions[11]);
              let obj4 = { itemIndex: length + num, spacing, numColumns };
              obj2.containerStyle = obj3.getGridItemSpacingStyles(obj4);
              element.props = obj2;
              let arr = items.push(element);
            }
            const obj5 = searchContext(fileOrLinkImageDimensions[12]);
          }
          return items;
        }, items1);
        const obj7 = {
          data: memo,
          searchContext,
          tab,
          isFocused,
          contentContainerStyle: contentContainerStyles.filesOrLinksContentContainer,
          ItemSeparatorComponent: null,
          numColumns: null,
          isFirstPageLoading: null,
          isNextPageLoading: null,
        };
        let obj5 = searchContext(fileOrLinkImageDimensions[10]);
        const obj6 = { searchContext, tab, placeholderHeight: placeholderCount, numColumns };
        obj7.ItemSeparatorComponent = searchContext(fileOrLinkImageDimensions[13]).CardVerticalSeparator;
        obj7.numColumns = numColumns;
        obj7.isFirstPageLoading = isFirstPageLoading;
        obj7.isNextPageLoading = isNextPageLoading;
        return jsx(searchMessages(fileOrLinkImageDimensions[9]), {
          data: memo,
          searchContext,
          tab,
          isFocused,
          contentContainerStyle: contentContainerStyles.filesOrLinksContentContainer,
          ItemSeparatorComponent: null,
          numColumns: null,
          isFirstPageLoading: null,
          isNextPageLoading: null,
        });
      },
);
