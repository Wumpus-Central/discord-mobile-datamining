// discord_app/modules/search/native/components/tabs/pages/messages/LinksScreen.tsx
import importAllResult from "noop";
import MessageEmbedTypes from "MessageEmbedTypes";
import { jsx } from "jsxProd";

let c4;
let c5;
let closure_6;
let error;
const require = arg1;
let c3 = importAllResult;
({ SearchListItemTypes: c4, CARD_ESTIMATED_ITEM_SIZE: c5, FILES_OR_LINKS_NUM_COLUMNS: closure_6, FILES_OR_LINKS_GAP_WIDTH: error } = MessageEmbedTypes);
const memoResult = importAllResult.memo(function LinksScreen(searchContext) {
  let isFirstPageLoading;
  let isFocused;
  let isNextPageLoading;
  let width;
  searchContext = searchContext.searchContext;
  const tab = searchContext.tab;
  let searchMessages;
  let fileOrLinkImageDimensions;
  let onPressMessageItem;
  let onPressSearchLink;
  let onPressGuildVoiceChannel;
  let placeholderCount;
  let callback;
  let callback1;
  let callback2;
  ({ isFocused, width } = searchContext);
  let obj = searchContext(fileOrLinkImageDimensions[3]);
  const contentContainerStyles = obj.useContentContainerStyles();
  searchMessages = searchContext(fileOrLinkImageDimensions[4]).useSearchMessages(searchContext, tab);
  const obj2 = searchContext(fileOrLinkImageDimensions[4]);
  fileOrLinkImageDimensions = searchContext(fileOrLinkImageDimensions[5]).useFileOrLinkImageDimensions(width);
  let obj3 = searchContext(fileOrLinkImageDimensions[5]);
  onPressMessageItem = searchContext(fileOrLinkImageDimensions[6]).useOnPressMessageItem({ searchContext });
  const obj4 = searchContext(fileOrLinkImageDimensions[6]);
  onPressSearchLink = searchContext(fileOrLinkImageDimensions[6]).useOnPressSearchLink(searchContext);
  let obj5 = searchContext(fileOrLinkImageDimensions[6]);
  onPressGuildVoiceChannel = searchContext(fileOrLinkImageDimensions[6]).useOnPressGuildVoiceChannel({ searchContext });
  const obj6 = searchContext(fileOrLinkImageDimensions[6]);
  obj = { searchContext, tab, placeholderHeight: onPressGuildVoiceChannel, numColumns: placeholderCount };
  const searchMessagesLoadingState = searchContext(fileOrLinkImageDimensions[7]).useSearchMessagesLoadingState(obj);
  placeholderCount = searchMessagesLoadingState.placeholderCount;
  let items = [onPressMessageItem, searchContext];
  ({ isFirstPageLoading, isNextPageLoading } = searchMessagesLoadingState);
  callback = onPressMessageItem.useCallback((arg0, index) => {
    let channelId;
    let messageId;
    ({ channelId, messageId } = arg0);
    let obj = searchContext(fileOrLinkImageDimensions[8]);
    obj = { searchContext, channelId, messageId, index };
    const result = obj.trackMessageItemPress(obj);
    onPressMessageItem(channelId, messageId);
  }, items);
  const items1 = [onPressSearchLink, searchContext];
  callback1 = onPressMessageItem.useCallback((arg0, index) => {
    let channelId;
    let messageId;
    let trusted;
    let url;
    ({ channelId, messageId, url, trusted } = arg0);
    let obj = searchContext(fileOrLinkImageDimensions[8]);
    obj = { searchContext, channelId, messageId, index };
    const result = obj.trackMessageItemPress(obj);
    onPressSearchLink(url, trusted);
  }, items1);
  const items2 = [onPressGuildVoiceChannel, searchContext];
  callback2 = onPressMessageItem.useCallback((arg0, index) => {
    let channelId;
    let mentionedChannelId;
    let messageId;
    ({ channelId, messageId, mentionedChannelId } = arg0);
    let obj = searchContext(fileOrLinkImageDimensions[8]);
    obj = { searchContext, channelId, messageId, index };
    const result = obj.trackMessageItemPress(obj);
    onPressGuildVoiceChannel(mentionedChannelId);
  }, items2);
  const items3 = [callback2, callback1, callback, fileOrLinkImageDimensions, searchMessages, placeholderCount, searchContext];
  const memo = onPressMessageItem.useMemo(() => {
    const items = [];
    let c1 = 0;
    if (c1 != null) {
      let item = c1.forEach((getContentMessage) => {
        const links = searchContext(fileOrLinkImageDimensions[9]).getLinks(items, getContentMessage);
        const item = links.forEach((data) => {
          const sum = closure_1 + arg1;
          let arr = sum;
          let obj = { type: outer2_4.LINK, props: null };
          obj = {
            data,
            onPress(arg0) {
              return outer1_7(arg0, closure_0);
            },
            onPressSearchLink(url, trusted) {
              return outer1_8(url, closure_0);
            },
            onPressGuildVoiceChannelMention(arg0) {
              return outer1_9(arg0, closure_0);
            },
            imageStyle: outer1_2,
            containerStyle: null
          };
          obj = { itemIndex: sum, spacing: outer2_7, numColumns: outer2_6 };
          obj[5] = items(outer2_2[9]).getGridItemSpacingStyles(obj);
          obj[1] = obj;
          arr = arr.push(obj);
        });
        closure_1 = closure_1 + links.length;
      });
    }
    if (placeholderCount > 0) {
      let obj = { numColumns: null, numResults: null, placeholderCount: null };
      obj[0] = placeholderCount;
      obj[1] = items.length;
      obj[2] = tmp2;
      const adjustedPlaceholderCount = searchContext(fileOrLinkImageDimensions[10]).getAdjustedPlaceholderCount(obj);
      for (let num = 0; num < adjustedPlaceholderCount; num = num + 1) {
        obj = { type: null, key: null, props: null };
        let tmp3 = onPressSearchLink;
        obj[0] = onPressSearchLink.FILE_OR_LINK_PLACEHOLDER;
        let _HermesInternal = HermesInternal;
        obj[1] = "file-or-link-placeholder-" + num;
        obj = { imageStyle: null, containerStyle: null };
        let tmp4 = fileOrLinkImageDimensions;
        obj[0] = fileOrLinkImageDimensions;
        let tmp5 = searchContext;
        let tmp6 = fileOrLinkImageDimensions;
        let obj3 = searchContext(fileOrLinkImageDimensions[9]);
        let obj1 = { itemIndex: null, spacing: null, numColumns: null };
        obj1[0] = length + num;
        let tmp7 = callback;
        obj1[1] = callback;
        let tmp8 = placeholderCount;
        obj1[2] = placeholderCount;
        obj[1] = obj3.getGridItemSpacingStyles(obj1);
        obj[2] = obj;
        let arr = items.push(obj);
      }
      const obj5 = searchContext(fileOrLinkImageDimensions[10]);
    }
    return items;
  }, items3);
  obj = { data: memo, searchContext, tab, isFocused, contentContainerStyle: contentContainerStyles.filesOrLinksContentContainer, ItemSeparatorComponent: null, numColumns: null, isFirstPageLoading: null, isNextPageLoading: null };
  const obj7 = searchContext(fileOrLinkImageDimensions[7]);
  obj[5] = searchContext(fileOrLinkImageDimensions[11]).CardVerticalSeparator;
  obj[6] = placeholderCount;
  obj[7] = isFirstPageLoading;
  obj[8] = isNextPageLoading;
  return callback1(searchMessages(fileOrLinkImageDimensions[8]), obj);
});
let result = require("jsxProd").fileFinishedImporting("modules/search/native/components/tabs/pages/messages/LinksScreen.tsx");

export default memoResult;