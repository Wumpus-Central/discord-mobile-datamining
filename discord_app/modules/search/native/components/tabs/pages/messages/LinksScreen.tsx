// === Module 17263: LinksScreen ===

// Module 17263 (LinksScreen)
import SearchPlatformUtils from "SearchPlatformUtils" /* 12672 */;
import BaseMessagesScreen from "BaseMessagesScreen" /* 17256 */;
import noop from "module_19" /* 19 */;

require = fn;
const SearchConstants = fn(8207);
({ SearchListItemTypes: closure_4, CARD_ESTIMATED_ITEM_SIZE: hasOwnProperty, FILES_OR_LINKS_NUM_COLUMNS: metroRequire, FILES_OR_LINKS_GAP_WIDTH: closure_7 } = SearchConstants);
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/search/native/components/tabs/pages/messages/LinksScreen.tsx");

export default noop.memo(function LinksScreen(searchContext) {
  searchContext = searchContext.searchContext;
  const tab = searchContext.tab;
  let fileOrLinkImageDimensions;
  let placeholderCount;
  ({ isFocused, width } = searchContext);
  const contentContainerStyles = searchContext(fileOrLinkImageDimensions[3]).useContentContainerStyles();
  let obj = searchContext(fileOrLinkImageDimensions[3]);
  let searchMessages = searchContext(fileOrLinkImageDimensions[4]).useSearchMessages(searchContext, tab);
  let obj2 = searchContext(fileOrLinkImageDimensions[4]);
  fileOrLinkImageDimensions = searchContext(fileOrLinkImageDimensions[5]).useFileOrLinkImageDimensions(width);
  let obj3 = searchContext(fileOrLinkImageDimensions[5]);
  const onPressMessageItem = searchContext(fileOrLinkImageDimensions[6]).useOnPressMessageItem({ searchContext });
  let obj4 = searchContext(fileOrLinkImageDimensions[6]);
  const onPressSearchLink = searchContext(fileOrLinkImageDimensions[6]).useOnPressSearchLink(searchContext);
  let obj5 = searchContext(fileOrLinkImageDimensions[6]);
  const onPressGuildVoiceChannel = searchContext(fileOrLinkImageDimensions[6]).useOnPressGuildVoiceChannel({ searchContext });
  const obj6 = searchContext(fileOrLinkImageDimensions[6]);
  const searchMessagesLoadingState = searchContext(fileOrLinkImageDimensions[7]).useSearchMessagesLoadingState({ searchContext, tab, placeholderHeight: onPressGuildVoiceChannel, numColumns: placeholderCount });
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
            onPressSearchLink(url) {
              return closure_2_8(url, sum);
            },
            onPressGuildVoiceChannelMention(arg0) {
              return closure_2_9(arg0, sum);
            },
            imageStyle,
            containerStyle: searchContext(fileOrLinkImageDimensions[9]).getGridItemSpacingStyles({ itemIndex: sum, spacing, numColumns: placeholderCount })
          };
          element.props = obj;
          items.push(element);
        });
        closure_1 = closure_1 + links.length;
      });
    }
    if (placeholderCount > 0) {
      let obj = { numColumns: placeholderCount, numResults: items.length, placeholderCount: tmp2 };
      const adjustedPlaceholderCount = searchContext(fileOrLinkImageDimensions[10]).getAdjustedPlaceholderCount(obj);
      for (let num = 0; num < adjustedPlaceholderCount; num = num + 1) {
        let element = { type: onPressSearchLink.FILE_OR_LINK_PLACEHOLDER, key: null, props: null };
        let _HermesInternal = HermesInternal;
        element.key = "file-or-link-placeholder-" + num;
        let obj2 = { imageStyle: fileOrLinkImageDimensions, containerStyle: null };
        let obj3 = searchContext(fileOrLinkImageDimensions[9]);
        let obj4 = { itemIndex: length + num, spacing, numColumns: placeholderCount };
        obj2.containerStyle = obj3.getGridItemSpacingStyles(obj4);
        element.props = obj2;
        let arr = items.push(element);
      }
      const obj5 = searchContext(fileOrLinkImageDimensions[10]);
    }
    return items;
  }, items3);
  const obj9 = { data: memo, searchContext, tab, isFocused, contentContainerStyle: contentContainerStyles.filesOrLinksContentContainer, ItemSeparatorComponent: null, numColumns: null, isFirstPageLoading: null, isNextPageLoading: null };
  const obj7 = searchContext(fileOrLinkImageDimensions[7]);
  const obj8 = { searchContext, tab, placeholderHeight: onPressGuildVoiceChannel, numColumns: placeholderCount };
  obj9.ItemSeparatorComponent = searchContext(fileOrLinkImageDimensions[11]).CardVerticalSeparator;
  obj9.numColumns = placeholderCount;
  obj9.isFirstPageLoading = isFirstPageLoading;
  obj9.isNextPageLoading = isNextPageLoading;
  return callback1(searchMessages(fileOrLinkImageDimensions[8]), obj9);
});