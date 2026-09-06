// discord_app/modules/search/native/components/tabs/pages/messages/LinksScreen.tsx
import SearchPlatformUtils from "../../../../SearchPlatformUtils.tsx";
import BaseMessagesScreen from "BaseMessagesScreen.tsx";
import noop from "../../../../../../../../_runtime/metro/00019__.js";

require = fn;
const SearchConstants = fn(7878);
({
  SearchListItemTypes: closure_4,
  CARD_ESTIMATED_ITEM_SIZE: hasOwnProperty,
  FILES_OR_LINKS_NUM_COLUMNS: metroRequire,
  FILES_OR_LINKS_GAP_WIDTH: closure_7,
} = SearchConstants);
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/search/native/components/tabs/pages/messages/LinksScreen.tsx");

export default noop.memo(function LinksScreen(searchContext) {
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
  const obj4 = searchContext(fileOrLinkImageDimensions[6]);
  const onPressSearchLink = searchContext(fileOrLinkImageDimensions[6]).useOnPressSearchLink(searchContext);
  let obj5 = searchContext(fileOrLinkImageDimensions[6]);
  const onPressGuildVoiceChannel = searchContext(fileOrLinkImageDimensions[6]).useOnPressGuildVoiceChannel({
    searchContext,
  });
  const obj6 = searchContext(fileOrLinkImageDimensions[6]);
  obj = { searchContext, tab, placeholderHeight: onPressGuildVoiceChannel, numColumns: placeholderCount };
  const searchMessagesLoadingState = searchContext(fileOrLinkImageDimensions[7]).useSearchMessagesLoadingState(obj);
  placeholderCount = searchMessagesLoadingState.placeholderCount;
  let items = [onPressMessageItem, searchContext];
  ({ isFirstPageLoading, isNextPageLoading } = searchMessagesLoadingState);
  const spacing = onPressMessageItem.useCallback((arg0, index) => {
    ({ channelId, messageId } = arg0);
    const obj = { searchContext, channelId, messageId, index };
    const result = obj.trackMessageItemPress(obj);
    onPressMessageItem(channelId, messageId);
  }, items);
  const items1 = [onPressSearchLink, searchContext];
  const callback1 = onPressMessageItem.useCallback((arg0, index) => {
    ({ channelId, messageId, url, trusted } = arg0);
    const obj = { searchContext, channelId, messageId, index };
    const result = obj.trackMessageItemPress(obj);
    onPressSearchLink(url, trusted);
  }, items1);
  const items2 = [onPressGuildVoiceChannel, searchContext];
  const callback2 = onPressMessageItem.useCallback((arg0, index) => {
    ({ channelId, messageId, mentionedChannelId } = arg0);
    const obj = { searchContext, channelId, messageId, index };
    const result = obj.trackMessageItemPress(obj);
    onPressGuildVoiceChannel(mentionedChannelId);
  }, items2);
  const items3 = [
    callback2,
    callback1,
    spacing,
    fileOrLinkImageDimensions,
    searchMessages,
    placeholderCount,
    searchContext,
  ];
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
          let obj = {
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
            containerStyle: null,
          };
          obj = { itemIndex: sum, spacing, numColumns: placeholderCount };
          obj.containerStyle = searchContext(fileOrLinkImageDimensions[9]).getGridItemSpacingStyles(obj);
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
        let element = { type: null, key: null, props: null };
        element.type = onPressSearchLink.FILE_OR_LINK_PLACEHOLDER;
        let _HermesInternal = HermesInternal;
        element.key = "file-or-link-placeholder-" + num;
        obj = { imageStyle: null, containerStyle: null };
        obj.imageStyle = fileOrLinkImageDimensions;
        let obj3 = searchContext(fileOrLinkImageDimensions[9]);
        let obj1 = { itemIndex: length + num, spacing: null, numColumns: null };
        obj1.spacing = spacing;
        obj1.numColumns = placeholderCount;
        obj.containerStyle = obj3.getGridItemSpacingStyles(obj1);
        element.props = obj;
        let arr = items.push(element);
      }
      const obj5 = searchContext(fileOrLinkImageDimensions[10]);
    }
    return items;
  }, items3);
  obj = {
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
  const obj7 = searchContext(fileOrLinkImageDimensions[7]);
  obj.ItemSeparatorComponent = searchContext(fileOrLinkImageDimensions[11]).CardVerticalSeparator;
  obj.numColumns = placeholderCount;
  obj.isFirstPageLoading = isFirstPageLoading;
  obj.isNextPageLoading = isNextPageLoading;
  return callback1(searchMessages(fileOrLinkImageDimensions[8]), obj);
});
