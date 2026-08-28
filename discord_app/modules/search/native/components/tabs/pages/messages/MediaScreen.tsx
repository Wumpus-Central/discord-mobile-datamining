// === Module 16204: ? ===

// Module 16204
import importAllResult from "noop" /* 19 */;
import closure_4 from "initialize" /* 6140 */;
import closure_5 from "ensureGuildLoaded" /* 1391 */;
import closure_6 from "handleReaction" /* 6093 */;
import closure_7 from "prototype" /* 11842 */;
import MessageEmbedTypes from "MessageEmbedTypes" /* 7569 */;
import { EMPTY_MEDIA_RESULTS } from "SEARCH_TEXT_INPUT_DEBOUNCE_TIME" /* 11856 */;
import { MEDIA_MODAL_KEY } from "ME" /* 676 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
let c3 = importAllResult;
({ SearchListItemTypes: closure_8, MEDIA_NUM_COLUMNS: c9, MEDIA_ITEM_GAP_WIDTH: c10, SearchMediaTypes: unpackModuleId } = MessageEmbedTypes);
let closure_15 = [];
const memoResult = importAllResult.memo(function MediaScreen(searchContext) {
  searchContext = searchContext.searchContext;
  const tab = searchContext.tab;
  dependencyMap = undefined;
  let searchMessages;
  let placeholderCount;
  let memo;
  let onPressMediaItem;
  let callback1;
  ({ isFocused, width } = searchContext);
  let obj = searchContext(16200);
  const contentContainerStyles = obj.useContentContainerStyles();
  const tmp2 = tab(16160)(width);
  dependencyMap = tmp2;
  searchMessages = searchContext(16205).useSearchMessages(searchContext, tab);
  const obj2 = searchContext(16205);
  let items = [placeholderCount, memo];
  const items1 = [searchMessages];
  const stateFromStoresArray = searchContext(589).useStateFromStoresArray(items, () => {
    let found;
    if (searchMessages != null) {
      const mapped = searchMessages.map((channel_id) => {
        channel = channel.getChannel(channel_id.channel_id);
        let isSpoilerChannelResult;
        if (channel != null) {
          isSpoilerChannelResult = channel.isSpoilerChannel();
        }
        let id = null;
        if (isSpoilerChannelResult) {
          id = null;
          if (!closure_4.didAgree(channel.id)) {
            id = channel.id;
          }
        }
        return id;
      });
      found = mapped.filter((arg0) => null != arg0);
    }
    if (found == null) {
      found = closure_1_15;
    }
    return found;
  }, items1);
  let obj3 = searchContext(589);
  obj = { searchContext, tab, placeholderHeight: tmp2, numColumns: closure_9 };
  const searchMessagesLoadingState = searchContext(16206).useSearchMessagesLoadingState(obj);
  placeholderCount = searchMessagesLoadingState.placeholderCount;
  const items2 = [searchMessages, searchContext, stateFromStoresArray];
  ({ isFirstPageLoading, isNextPageLoading } = searchMessagesLoadingState);
  memo = searchMessages.useMemo(() => {
    if (null != searchMessages) {
      let media = searchContext(11841).getMedia(searchContext, tmp);
      const obj = searchContext(11841);
    } else {
      media = closure_1_12;
    }
    return media;
  }, items2);
  const items3 = [searchContext, tab];
  const callback = searchMessages.useCallback(() => {
    const nextMessages = tab(11841).fetchNextMessages(searchContext, tab, () => {
      let obj = closure_1_0(closure_1_2[15]);
      if (obj.isModalOpen(closure_1_13)) {
        let tmpResult = tmp(tmp2[16]);
        const messages = closure_1_6.getMessages(tmpResult.getSearchTabFetchId(items, closure_1, closure_1_7.getSearchResultsQuery(items)));
        if (null != messages) {
          tmpResult = tmp(tmp2[14]);
          const media = tmpResult.getMedia(tmp4, messages);
          items = [];
          const item = media.forEach((type) => {
            if (!tmp2) {
              items.push(type.sources);
            }
          });
          obj = { sources: null };
          obj[0] = items;
          const result = tmp(tmp2[17]).setMediaViewerSources(obj);
          const tmpResult1 = tmp(tmp2[17]);
        }
        const searchResultsQuery = closure_1_7.getSearchResultsQuery(items);
        tmp4 = items;
      }
    });
  }, items3);
  let obj4 = searchContext(16206);
  onPressMediaItem = searchContext(16157).useOnPressMediaItem({ searchContext, allMediaResults: memo, onEndReached: callback, onEndReachedThreshold: 500 });
  const items4 = [onPressMediaItem, searchContext, searchMessages];
  callback1 = searchMessages.useCallback((media) => {
    media = media.media;
    let found;
    if (searchMessages != null) {
      found = searchMessages.find((id) => id.id === media.messageId);
    }
    let obj = searchContext(14360);
    if (obj.shouldAgeVerifyForSearchMedia(media, found)) {
      obj = { entryPoint: null };
      obj[0] = tmp2(8630).AgeVerificationModalEntryPoint.SEARCH_MEDIA_PREVIEW;
      const result = tab(8628).showAgeVerificationGetStartedModal(obj);
      const obj4 = tab(8628);
    } else {
      obj = { searchContext: null, channelId: null, messageId: null, index: null };
      obj[0] = media;
      ({ channelId: obj3[1], messageId: obj3[2] } = media);
      obj[3] = arg1;
      const result1 = tmp2(16207).trackMessageItemPress(obj);
      onPressMediaItem(media, media.originView);
      const tmp2Result = tmp2(16207);
    }
  }, items4);
  const items5 = [callback1, memo, tmp2, placeholderCount];
  const memo1 = searchMessages.useMemo(() => {
    let items = [];
    const item = memo.forEach((media, itemIndex) => {
      items = itemIndex;
      let obj = { type: closure_2_8.MEDIA, props: null };
      obj = {
        media,
        size: closure_1_2,
        onPress(arg0) {
          return closure_1_7(arg0, closure_0);
        },
        containerStyle: null
      };
      obj = { itemIndex, numItems: closure_1_5.length, numColumns: closure_2_9, spacing: closure_2_10 - 2 };
      obj[3] = searchContext(table[14]).getMediaGridItemStyles(obj);
      obj[1] = obj;
      items.push(obj);
    });
    if (placeholderCount > 0) {
      let obj = { numColumns: null, numResults: null, placeholderCount: null };
      obj[0] = closure_1_9;
      obj[1] = items.length;
      obj[2] = tmp2;
      const adjustedPlaceholderCount = searchContext(16211).getAdjustedPlaceholderCount(obj);
      for (let num = 0; num < adjustedPlaceholderCount; num = num + 1) {
        obj = { type: null, key: null, props: null };
        let tmp3 = closure_1_8;
        obj[0] = closure_1_8.MEDIA_PLACEHOLDER;
        let _HermesInternal = HermesInternal;
        obj[1] = "media-placeholder-" + length + num;
        obj = { size: null, containerStyle: null };
        let tmp4 = dependencyMap;
        obj[0] = dependencyMap;
        let tmp5 = searchContext;
        let tmp6 = dependencyMap;
        let obj3 = searchContext(11841);
        obj1 = { itemIndex: null, numItems: null, numColumns: null, spacing: null };
        obj1[0] = length + num;
        let tmp7 = memo;
        obj1[1] = memo.length;
        let tmp8 = closure_1_9;
        obj1[2] = closure_1_9;
        let tmp9 = closure_1_10;
        obj1[3] = closure_1_10 - 2;
        obj[1] = obj3.getMediaGridItemStyles(obj1);
        obj[2] = obj;
        let arr = items.push(obj);
      }
      const obj5 = searchContext(16211);
    }
    return items;
  }, items5);
  obj = { data: memo1, searchContext, tab, isFocused, contentContainerStyle: contentContainerStyles.mediaContentContainer, ItemSeparatorComponent: null, numColumns: null, isFirstPageLoading: null, isNextPageLoading: null };
  const obj6 = searchContext(16157);
  obj[5] = searchContext(16164).MediaVerticalSeparator;
  obj[6] = closure_9;
  obj[7] = isFirstPageLoading;
  obj[8] = isNextPageLoading;
  return jsx(tab(16207), { data: memo1, searchContext, tab, isFocused, contentContainerStyle: contentContainerStyles.mediaContentContainer, ItemSeparatorComponent: null, numColumns: null, isFirstPageLoading: null, isNextPageLoading: null });
});
let result = require("set").fileFinishedImporting("modules/search/native/components/tabs/pages/messages/MediaScreen.tsx");

export default memoResult;