// === Module 16913: LinksScreen ===

// Module 16913 (LinksScreen)
import Fragment from "Fragment" /* 21 */;
import SearchPlatformUtils from "SearchPlatformUtils" /* 11980 */;
import BaseMessagesScreen from "BaseMessagesScreen" /* 16906 */;
import react from "react" /* 19 */;
import SearchConstants from "SearchConstants" /* 7524 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let numColumns, placeholderHeight, searchContext;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
({ SearchListItemTypes: closure_4, CARD_ESTIMATED_ITEM_SIZE: hasOwnProperty, FILES_OR_LINKS_NUM_COLUMNS: metroRequire, FILES_OR_LINKS_GAP_WIDTH: metroImportDefault } = SearchConstants);
let jsx = Fragment.jsx;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((searchContext) => {
  let closure_5;
  let closure_6;
  let closure_8;
  let isFirstPageLoading;
  let isFocused;
  let isNextPageLoading;
  let obj10;
  let obj14;
  let obj9;
  let onPressMessageItem;
  let placeholderCount;
  let tab;
  let tmp6;
  let tmp9;
  let width;
  let obj = searchContext(onPressMessageItem[4]);
  const cResult = obj.c(32);
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
  const tmpResult5 = searchContext(onPressMessageItem[8]);
  const onPressSearchLink = tmpResult5.useOnPressSearchLink(searchContext);
  if (cResult[2] !== searchContext) {
    const obj6 = { searchContext };
    cResult[2] = searchContext;
    cResult[3] = obj6;
    tmp9 = obj6;
  } else {
    tmp9 = cResult[3];
  }
  const tmpResult6 = searchContext(onPressMessageItem[8]);
  const onPressGuildVoiceChannel = tmpResult6.useOnPressGuildVoiceChannel(tmp9);
  if (cResult[4] === searchContext) {
    let tmp11;
    if (cResult[5] === tab) {
      tmp11 = cResult[6];
    }
    const tmpResult7 = searchContext(onPressMessageItem[9]);
    const searchMessagesLoadingState = tmpResult7.useSearchMessagesLoadingState(tmp11);
    ({ isFirstPageLoading, isNextPageLoading, placeholderCount } = searchMessagesLoadingState);
    if (cResult[7] === onPressMessageItem) {
      let tmp13;
      if (cResult[8] === searchContext) {
        tmp13 = cResult[9];
      }
      placeholderHeight = tmp13;
      if (cResult[10] === onPressSearchLink) {
        let tmp14;
        if (cResult[11] === searchContext) {
          tmp14 = cResult[12];
        }
        numColumns = tmp14;
        if (cResult[13] === onPressGuildVoiceChannel) {
          let tmp16;
          if (cResult[14] === searchContext) {
            tmp16 = cResult[15];
          }
          jsx = tmp16;
          if (cResult[16] === tmp16) {
            if (cResult[17] === tmp14) {
              if (cResult[18] === tmp13) {
                if (cResult[19] === fileOrLinkImageDimensions) {
                  if (cResult[20] === searchMessages) {
                    if (cResult[21] === placeholderCount) {
                      let tmp18;
                      if (cResult[22] === searchContext) {
                        tmp18 = tmp;
                        class R {
                          constructor(arg0, index) {
                            let channelId;
                            let mentionedChannelId;
                            let messageId;
                            ({ channelId, messageId, mentionedChannelId } = arg0);
                            const obj = BaseMessagesScreen;
                            const obj2 = { searchContext, channelId, messageId, index };
                            const result = obj.trackMessageItemPress(obj2);
                            onPressGuildVoiceChannel(mentionedChannelId);
                          }
                        }
                      }
                      if (cResult[24] === tmp17) {
                        if (cResult[25] === isFirstPageLoading) {
                          if (cResult[26] === isFocused) {
                            if (cResult[27] === isNextPageLoading) {
                              if (cResult[28] === searchContext) {
                                if (cResult[29] === contentContainerStyles.filesOrLinksContentContainer) {
                                  let tmp30;
                                  if (cResult[30] === tab) {
                                    tmp30 = cResult[31];
                                  }
                                  return tmp30;
                                }
                              }
                            }
                          }
                        }
                      }
                      class R {
                        constructor(arg0, index) {
                          let channelId;
                          let mentionedChannelId;
                          let messageId;
                          ({ channelId, messageId, mentionedChannelId } = arg0);
                          const obj = BaseMessagesScreen;
                          const obj2 = { searchContext, channelId, messageId, index };
                          const result = obj.trackMessageItemPress(obj2);
                          onPressGuildVoiceChannel(mentionedChannelId);
                        }
                      }
                      fileOrLinkImageDimensions(tmp19[10]);
                      const tmp34 = <tmp32 data={tmp17} searchContext={searchContext} tab={tab} isFocused={isFocused} contentContainerStyle={contentContainerStyles.filesOrLinksContentContainer} ItemSeparatorComponent={tmp18(tmp19[13]).CardVerticalSeparator} numColumns={numColumns} isFirstPageLoading={isFirstPageLoading} isNextPageLoading={isNextPageLoading} />;
                      cResult[24] = tmp17;
                      cResult[25] = isFirstPageLoading;
                      cResult[26] = isFocused;
                      cResult[27] = isNextPageLoading;
                      cResult[28] = searchContext;
                      cResult[29] = contentContainerStyles.filesOrLinksContentContainer;
                      cResult[30] = tab;
                      cResult[31] = tmp34;
                      tmp30 = tmp34;
                    }
                  }
                }
              }
            }
          }
          class R {
            constructor(arg0, index) {
              let channelId;
              let mentionedChannelId;
              let messageId;
              ({ channelId, messageId, mentionedChannelId } = arg0);
              const obj = BaseMessagesScreen;
              const obj2 = { searchContext, channelId, messageId, index };
              const result = obj.trackMessageItemPress(obj2);
              onPressGuildVoiceChannel(mentionedChannelId);
            }
          }
          let closure_9 = 0;
          if (searchMessages != null) {
            let item = searchMessages.forEach((item) => {
              let imageStyle;
              let spacing;
              let obj = SearchPlatformUtils;
              const links = obj.getLinks(searchContext, item);
              item = links.forEach((data, index) => {
                let obj;
                let obj2;
                let obj3;
                const sum = closure_9 + index;
                let closure_0 = sum;
                const element = { type: constants.LINK, props: obj };
                const push = spacing.push;
                obj = {
                  data,
                  onPress(arg0) {
                    return closure_2_5(arg0, closure_0);
                  },
                  onPressSearchLink(arg0) {
                    return numColumns(arg0, closure_0);
                  },
                  onPressGuildVoiceChannelMention(arg0) {
                    return closure_2_8(arg0, closure_0);
                  },
                  imageStyle,
                  containerStyle: obj3.getGridItemSpacingStyles(obj2)
                };
                obj2 = { itemIndex: sum, spacing, numColumns };
                obj3 = searchContext(onPressMessageItem[11]);
                push(element);
              });
              closure_9 = closure_9 + links.length;
            });
          }
          let tmp22 = tmp;
          if (placeholderCount > 0) {
            const obj8 = { numColumns, numResults: arr2.length, placeholderCount };
            const tmpResult8 = searchContext(onPressMessageItem[12]);
            class R {
              constructor(arg0, index) {
                let channelId;
                let mentionedChannelId;
                let messageId;
                ({ channelId, messageId, mentionedChannelId } = arg0);
                const obj = BaseMessagesScreen;
                const obj2 = { searchContext, channelId, messageId, index };
                const result = obj.trackMessageItemPress(obj2);
                onPressGuildVoiceChannel(mentionedChannelId);
              }
            }
            const adjustedPlaceholderCount = tmpResult8.getAdjustedPlaceholderCount(obj8);
            let num15 = 0;
            tmp22 = tmp;
            if (0 < adjustedPlaceholderCount) {
              do {
                let element = { type: onPressGuildVoiceChannel.FILE_OR_LINK_PLACEHOLDER, key: "file-or-link-placeholder-" + num15, props: obj9 };
                let _HermesInternal = HermesInternal;
                let push = arr2.push;
                obj9 = { imageStyle: fileOrLinkImageDimensions, containerStyle: obj14.getGridItemSpacingStyles(obj10) };
                obj14 = searchContext(onPressMessageItem[11]);
                obj10 = { itemIndex: length + num15, spacing: arr2, numColumns };
                let arr = push(element);
                num15 = num15 + 1;
                tmp22 = searchContext;
              } while (num15 < adjustedPlaceholderCount);
            }
          }
          cResult[16] = tmp16;
          cResult[17] = tmp14;
          cResult[18] = tmp13;
          cResult[19] = fileOrLinkImageDimensions;
          cResult[20] = searchMessages;
          cResult[21] = placeholderCount;
          cResult[22] = searchContext;
          cResult[23] = arr2;
          tmp18 = tmp22;
        }
        class R {
          constructor(arg0, index) {
            let channelId;
            let mentionedChannelId;
            let messageId;
            ({ channelId, messageId, mentionedChannelId } = arg0);
            const obj = BaseMessagesScreen;
            const obj2 = { searchContext, channelId, messageId, index };
            const result = obj.trackMessageItemPress(obj2);
            onPressGuildVoiceChannel(mentionedChannelId);
          }
        }
        cResult[13] = onPressGuildVoiceChannel;
        cResult[14] = searchContext;
        cResult[15] = R;
        tmp16 = R;
      }
      cResult[10] = onPressSearchLink;
      cResult[11] = searchContext;
      cResult[12] = tmp15;
      tmp14 = tmp15;
    }
    const fn = function _(arg0, index) {
      let channelId;
      let messageId;
      ({ channelId, messageId } = arg0);
      const obj = BaseMessagesScreen;
      const obj2 = { searchContext, channelId, messageId, index };
      const result = obj.trackMessageItemPress(obj2);
      onPressMessageItem(channelId, messageId);
    };
    cResult[7] = onPressMessageItem;
    cResult[8] = searchContext;
    cResult[9] = fn;
    tmp13 = fn;
  }
  const obj11 = { searchContext, tab, placeholderHeight, numColumns };
  cResult[4] = searchContext;
  cResult[5] = tab;
  cResult[6] = obj11;
  tmp11 = obj11;
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
  let obj5 = searchContext(fileOrLinkImageDimensions[8]);
  const onPressSearchLink = obj5.useOnPressSearchLink(searchContext);
  const obj6 = searchContext(fileOrLinkImageDimensions[8]);
  const onPressGuildVoiceChannel = obj6.useOnPressGuildVoiceChannel({ searchContext });
  const obj7 = searchContext(fileOrLinkImageDimensions[9]);
  const obj8 = { searchContext, tab, placeholderHeight: onPressGuildVoiceChannel, numColumns: placeholderCount };
  const searchMessagesLoadingState = obj7.useSearchMessagesLoadingState(obj8);
  placeholderCount = searchMessagesLoadingState.placeholderCount;
  let items = [onPressMessageItem, searchContext];
  ({ isFirstPageLoading, isNextPageLoading } = searchMessagesLoadingState);
  const spacing = onPressMessageItem.useCallback((arg0, index) => {
    let channelId;
    let messageId;
    ({ channelId, messageId } = arg0);
    const obj = BaseMessagesScreen;
    const obj2 = { searchContext, channelId, messageId, index };
    const result = obj.trackMessageItemPress(obj2);
    onPressMessageItem(channelId, messageId);
  }, items);
  const items1 = [onPressSearchLink, searchContext];
  const callback1 = onPressMessageItem.useCallback((arg0, index) => {
    let channelId;
    let messageId;
    let trusted;
    let url;
    ({ channelId, messageId, url, trusted } = arg0);
    const obj = BaseMessagesScreen;
    const obj2 = { searchContext, channelId, messageId, index };
    const result = obj.trackMessageItemPress(obj2);
    onPressSearchLink(url, trusted);
  }, items1);
  const items2 = [onPressGuildVoiceChannel, searchContext];
  const callback2 = onPressMessageItem.useCallback((arg0, index) => {
    let channelId;
    let mentionedChannelId;
    let messageId;
    ({ channelId, messageId, mentionedChannelId } = arg0);
    const obj = BaseMessagesScreen;
    const obj2 = { searchContext, channelId, messageId, index };
    const result = obj.trackMessageItemPress(obj2);
    onPressGuildVoiceChannel(mentionedChannelId);
  }, items2);
  const items3 = [callback2, callback1, spacing, fileOrLinkImageDimensions, searchMessages, placeholderCount, searchContext];
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
        const links = obj.getLinks(searchContext, item);
        item = links.forEach((data, index) => {
          let obj;
          let obj2;
          let obj3;
          const sum = closure_1_1 + index;
          const element = { type: onPressSearchLink.LINK, props: obj };
          const push = navigation.push;
          obj = {
            data,
            onPress(arg0) {
              return closure_2_7(arg0, sum);
            },
            onPressSearchLink(arg0) {
              return closure_2_8(arg0, sum);
            },
            onPressGuildVoiceChannelMention(arg0) {
              return closure_2_9(arg0, sum);
            },
            imageStyle,
            containerStyle: obj3.getGridItemSpacingStyles(obj2)
          };
          obj2 = { itemIndex: sum, spacing, numColumns: placeholderCount };
          obj3 = searchContext(fileOrLinkImageDimensions[11]);
          push(element);
        });
        closure_1 = closure_1 + links.length;
      });
    }
    if (placeholderCount > 0) {
      let num;
      let obj = { numColumns: placeholderCount, numResults: items.length, placeholderCount: tmp2 };
      const obj5 = searchContext(fileOrLinkImageDimensions[12]);
      const adjustedPlaceholderCount = obj5.getAdjustedPlaceholderCount(obj);
      for (let num = 0; num < adjustedPlaceholderCount; num = num + 1) {
        let element = { type: onPressSearchLink.FILE_OR_LINK_PLACEHOLDER, key: "file-or-link-placeholder-" + num, props: obj2 };
        let _HermesInternal = HermesInternal;
        let push = items.push;
        obj2 = { imageStyle: fileOrLinkImageDimensions, containerStyle: obj3.getGridItemSpacingStyles(obj4) };
        obj3 = searchContext(fileOrLinkImageDimensions[11]);
        obj4 = { itemIndex: length + num, spacing, numColumns: placeholderCount };
        let arr = push(element);
      }
    }
    return items;
  }, items3);
  const obj9 = { data: memo, searchContext, tab, isFocused, contentContainerStyle: contentContainerStyles.filesOrLinksContentContainer, ItemSeparatorComponent: searchContext(fileOrLinkImageDimensions[13]).CardVerticalSeparator, numColumns: placeholderCount, isFirstPageLoading, isNextPageLoading };
  const tmp12 = searchMessages(fileOrLinkImageDimensions[10]);
  return callback1(tmp12, obj9);
}));
let result = size.fileFinishedImporting("modules/search/native/components/tabs/pages/messages/LinksScreen.tsx");

export default memoResult;