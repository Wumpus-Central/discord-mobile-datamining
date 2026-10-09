// === Module 17344: LinksScreen ===

// Module 17344 (LinksScreen)
import SearchPlatformUtils from "SearchPlatformUtils" /* 11990 */;
import BaseMessagesScreen from "BaseMessagesScreen" /* 17337 */;
import noop from "module_19" /* 19 */;

require = fn;
const SearchConstants = fn(9285);
({ SearchListItemTypes: closure_4, CARD_ESTIMATED_ITEM_SIZE: hasOwnProperty, FILES_OR_LINKS_NUM_COLUMNS: metroRequire, FILES_OR_LINKS_GAP_WIDTH: closure_7 } = SearchConstants);
let jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/search/native/components/tabs/pages/messages/LinksScreen.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function LinksScreen(searchContext) {
  const cResult = searchContext(onPressMessageItem[4]).c(32);
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
  const tmpResult = searchContext(onPressMessageItem[8]);
  const onPressSearchLink = searchContext(onPressMessageItem[8]).useOnPressSearchLink(searchContext);
  if (cResult[2] !== searchContext) {
    const obj6 = { searchContext };
    cResult[2] = searchContext;
    cResult[3] = obj6;
    let tmp9 = obj6;
  } else {
    tmp9 = cResult[3];
  }
  const tmpResult5 = searchContext(onPressMessageItem[8]);
  const onPressGuildVoiceChannel = searchContext(onPressMessageItem[8]).useOnPressGuildVoiceChannel(tmp9);
  if (cResult[4] === searchContext) {
    if (cResult[5] === tab) {
      let tmp11 = cResult[6];
    }
    const searchMessagesLoadingState = tmp(tmp2[9]).useSearchMessagesLoadingState(tmp11);
    ({ isFirstPageLoading, isNextPageLoading, placeholderCount } = searchMessagesLoadingState);
    if (cResult[7] === onPressMessageItem) {
      if (cResult[8] === searchContext) {
        let tmp13 = cResult[9];
      }
      placeholderHeight = tmp13;
      if (cResult[10] === onPressSearchLink) {
        if (cResult[11] === searchContext) {
          let tmp14 = cResult[12];
        }
        numColumns = tmp14;
        if (cResult[13] === onPressGuildVoiceChannel) {
          if (cResult[14] === searchContext) {
            let tmp16 = cResult[15];
          }
          jsx = tmp16;
          if (cResult[16] === tmp16) {
            if (cResult[17] === tmp14) {
              if (cResult[18] === tmp13) {
                if (cResult[19] === fileOrLinkImageDimensions) {
                  if (cResult[20] === searchMessages) {
                    if (cResult[21] === placeholderCount) {
                      if (cResult[22] === searchContext) {
                        const arr2 = cResult[23];
                        let tmp18 = tmp;
                        class R {
                          constructor(arg0, arg1) {
                            ({ channelId, messageId, mentionedChannelId } = searchContext);
                            obj = closure_0(closure_2[10]);
                            obj1 = { searchContext, channelId, messageId, index: arg1 };
                            result = obj.trackMessageItemPress(obj1);
                            tmp2 = closure_4(mentionedChannelId);
                            return;
                          }
                        }
                      }
                      if (cResult[24] === tmp17) {
                        if (cResult[25] === isFirstPageLoading) {
                          if (cResult[26] === isFocused) {
                            if (cResult[27] === isNextPageLoading) {
                              if (cResult[28] === searchContext) {
                                if (cResult[29] === contentContainerStyles.filesOrLinksContentContainer) {
                                  if (cResult[30] === tab) {
                                    let tmp30 = cResult[31];
                                  }
                                  return tmp30;
                                }
                              }
                            }
                          }
                        }
                      }
                      class R {
                        constructor(arg0, arg1) {
                          ({ channelId, messageId, mentionedChannelId } = searchContext);
                          obj = closure_0(closure_2[10]);
                          obj1 = { searchContext, channelId, messageId, index: arg1 };
                          result = obj.trackMessageItemPress(obj1);
                          tmp2 = closure_4(mentionedChannelId);
                          return;
                        }
                      }
                      const obj7 = { data: tmp17, searchContext, tab, isFocused, contentContainerStyle: contentContainerStyles.filesOrLinksContentContainer, ItemSeparatorComponent: tmp18(tmp19[13]).CardVerticalSeparator, numColumns, isFirstPageLoading, isNextPageLoading };
                      const tmp34 = jsx(fileOrLinkImageDimensions(tmp19[10]), { data: tmp17, searchContext, tab, isFocused, contentContainerStyle: contentContainerStyles.filesOrLinksContentContainer, ItemSeparatorComponent: tmp18(tmp19[13]).CardVerticalSeparator, numColumns, isFirstPageLoading, isNextPageLoading });
                      cResult[24] = tmp17;
                      cResult[25] = isFirstPageLoading;
                      cResult[26] = isFocused;
                      cResult[27] = isNextPageLoading;
                      cResult[28] = searchContext;
                      cResult[29] = contentContainerStyles.filesOrLinksContentContainer;
                      cResult[30] = tab;
                      cResult[31] = tmp34;
                      tmp30 = tmp34;
                      const tmp32 = fileOrLinkImageDimensions(tmp19[10]);
                    }
                  }
                }
              }
            }
          }
          class R {
            constructor(arg0, arg1) {
              ({ channelId, messageId, mentionedChannelId } = searchContext);
              obj = closure_0(closure_2[10]);
              obj1 = { searchContext, channelId, messageId, index: arg1 };
              result = obj.trackMessageItemPress(obj1);
              tmp2 = closure_4(mentionedChannelId);
              return;
            }
          }
          closure_9 = 0;
          if (searchMessages != null) {
            let item = searchMessages.forEach((item) => {
              const links = SearchPlatformUtils.getLinks(searchContext, item);
              item = links.forEach((data, index) => {
                const sum = closure_9 + index;
                closure_0 = sum;
                const element = { type: constants.LINK, props: null };
                const obj = {
                  data,
                  onPress(arg0) {
                    return closure_2_5(arg0, sum);
                  },
                  onPressSearchLink(arg0) {
                    return numColumns(arg0, sum);
                  },
                  onPressGuildVoiceChannelMention(arg0) {
                    return closure_2_8(arg0, sum);
                  },
                  imageStyle,
                  containerStyle: searchContext(onPressMessageItem[11]).getGridItemSpacingStyles({ itemIndex: sum, spacing, numColumns })
                };
                element.props = obj;
                spacing.push(element);
              });
              closure_9 = closure_9 + links.length;
            });
          }
          let tmp22 = tmp;
          if (placeholderCount > 0) {
            const obj8 = { numColumns: null, numResults: null, placeholderCount: null };
            class R {
              constructor(arg0, arg1) {
                ({ channelId, messageId, mentionedChannelId } = searchContext);
                obj = closure_0(closure_2[10]);
                obj1 = { searchContext, channelId, messageId, index: arg1 };
                result = obj.trackMessageItemPress(obj1);
                tmp2 = closure_4(mentionedChannelId);
                return;
              }
            }
            obj8.numColumns = numColumns;
            obj8.numResults = arr2.length;
            obj8.placeholderCount = placeholderCount;
            const adjustedPlaceholderCount = tmp(tmp2[12]).getAdjustedPlaceholderCount(obj8);
            let num15 = 0;
            tmp22 = tmp;
            if (0 < adjustedPlaceholderCount) {
              do {
                let element = { type: null, key: null, props: null };
                element.type = onPressGuildVoiceChannel.FILE_OR_LINK_PLACEHOLDER;
                let _HermesInternal = HermesInternal;
                element.key = "file-or-link-placeholder-" + num15;
                let obj9 = { imageStyle: fileOrLinkImageDimensions, containerStyle: null };
                let obj14 = searchContext(onPressMessageItem[11]);
                let obj10 = { itemIndex: length + num15, spacing: null, numColumns: null };
                obj10.spacing = arr2;
                obj10.numColumns = numColumns;
                obj9.containerStyle = obj14.getGridItemSpacingStyles(obj10);
                element.props = obj9;
                let arr = arr2.push(element);
                num15 = num15 + 1;
                tmp22 = searchContext;
              } while (num15 < adjustedPlaceholderCount);
            }
            const tmpResult8 = tmp(tmp2[12]);
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
          constructor(arg0, arg1) {
            ({ channelId, messageId, mentionedChannelId } = searchContext);
            obj = closure_0(closure_2[10]);
            obj1 = { searchContext, channelId, messageId, index: arg1 };
            result = obj.trackMessageItemPress(obj1);
            tmp2 = closure_4(mentionedChannelId);
            return;
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
      ({ channelId, messageId } = arg0);
      const result = BaseMessagesScreen.trackMessageItemPress({ searchContext, channelId, messageId, index });
      onPressMessageItem(channelId, messageId);
    };
    cResult[7] = onPressMessageItem;
    cResult[8] = searchContext;
    cResult[9] = fn;
    tmp13 = fn;
    const tmpResult7 = tmp(tmp2[9]);
  }
  const obj11 = { searchContext, tab, placeholderHeight, numColumns };
  cResult[4] = searchContext;
  cResult[5] = tab;
  cResult[6] = obj11;
  tmp11 = obj11;
}) : (function LinksScreen(searchContext) {
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
  let obj4 = searchContext(fileOrLinkImageDimensions[8]);
  const onPressSearchLink = searchContext(fileOrLinkImageDimensions[8]).useOnPressSearchLink(searchContext);
  let obj5 = searchContext(fileOrLinkImageDimensions[8]);
  const onPressGuildVoiceChannel = searchContext(fileOrLinkImageDimensions[8]).useOnPressGuildVoiceChannel({ searchContext });
  const obj6 = searchContext(fileOrLinkImageDimensions[8]);
  const searchMessagesLoadingState = searchContext(fileOrLinkImageDimensions[9]).useSearchMessagesLoadingState({ searchContext, tab, placeholderHeight: onPressGuildVoiceChannel, numColumns: placeholderCount });
  placeholderCount = searchMessagesLoadingState.placeholderCount;
  let items = [onPressMessageItem, searchContext];
  ({ isFirstPageLoading, isNextPageLoading } = searchMessagesLoadingState);
  const spacing = onPressMessageItem.useCallback((arg0, index) => {
    ({ channelId, messageId } = arg0);
    const result = BaseMessagesScreen.trackMessageItemPress({ searchContext, channelId, messageId, index });
    onPressMessageItem(channelId, messageId);
  }, items);
  const items1 = [onPressSearchLink, searchContext];
  const callback1 = onPressMessageItem.useCallback((arg0, index) => {
    ({ channelId, messageId, url, trusted } = arg0);
    const result = BaseMessagesScreen.trackMessageItemPress({ searchContext, channelId, messageId, index });
    onPressSearchLink(url, trusted);
  }, items1);
  const items2 = [onPressGuildVoiceChannel, searchContext];
  const callback2 = onPressMessageItem.useCallback((arg0, index) => {
    ({ channelId, messageId, mentionedChannelId } = arg0);
    const result = BaseMessagesScreen.trackMessageItemPress({ searchContext, channelId, messageId, index });
    onPressGuildVoiceChannel(mentionedChannelId);
  }, items2);
  const items3 = [callback2, callback1, spacing, fileOrLinkImageDimensions, searchMessages, placeholderCount, searchContext];
  const memo = onPressMessageItem.useMemo(() => {
    const items = [];
    searchMessages = 0;
    if (searchMessages != null) {
      let item = searchMessages.forEach((item) => {
        const links = SearchPlatformUtils.getLinks(searchContext, item);
        item = links.forEach((data, index) => {
          const sum = closure_1_1 + index;
          closure_0 = sum;
          const element = { type: onPressSearchLink.LINK, props: null };
          const obj = {
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
            containerStyle: searchContext(fileOrLinkImageDimensions[11]).getGridItemSpacingStyles({ itemIndex: sum, spacing, numColumns: placeholderCount })
          };
          element.props = obj;
          items.push(element);
        });
        closure_1 = closure_1 + links.length;
      });
    }
    if (placeholderCount > 0) {
      let obj = { numColumns: placeholderCount, numResults: items.length, placeholderCount: tmp2 };
      const adjustedPlaceholderCount = searchContext(fileOrLinkImageDimensions[12]).getAdjustedPlaceholderCount(obj);
      for (let num = 0; num < adjustedPlaceholderCount; num = num + 1) {
        let element = { type: onPressSearchLink.FILE_OR_LINK_PLACEHOLDER, key: null, props: null };
        let _HermesInternal = HermesInternal;
        element.key = "file-or-link-placeholder-" + num;
        let obj2 = { imageStyle: fileOrLinkImageDimensions, containerStyle: null };
        let obj3 = searchContext(fileOrLinkImageDimensions[11]);
        let obj4 = { itemIndex: length + num, spacing, numColumns: placeholderCount };
        obj2.containerStyle = obj3.getGridItemSpacingStyles(obj4);
        element.props = obj2;
        let arr = items.push(element);
      }
      const obj5 = searchContext(fileOrLinkImageDimensions[12]);
    }
    return items;
  }, items3);
  const obj9 = { data: memo, searchContext, tab, isFocused, contentContainerStyle: contentContainerStyles.filesOrLinksContentContainer, ItemSeparatorComponent: null, numColumns: null, isFirstPageLoading: null, isNextPageLoading: null };
  const obj7 = searchContext(fileOrLinkImageDimensions[9]);
  const obj8 = { searchContext, tab, placeholderHeight: onPressGuildVoiceChannel, numColumns: placeholderCount };
  obj9.ItemSeparatorComponent = searchContext(fileOrLinkImageDimensions[13]).CardVerticalSeparator;
  obj9.numColumns = placeholderCount;
  obj9.isFirstPageLoading = isFirstPageLoading;
  obj9.isNextPageLoading = isNextPageLoading;
  return callback1(searchMessages(fileOrLinkImageDimensions[10]), obj9);
}));