// discord_app/modules/search/native/components/tabs/pages/messages/MediaScreen.tsx
import importAllResult from "handleSensitiveMediaFilterPress";
import initialize from "initialize";
import ensureGuildLoaded from "ensureGuildLoaded";
import handleReaction from "handleReaction";
import prototype from "prototype";
import MessageEmbedTypes from "MessageEmbedTypes";
import { EMPTY_MEDIA_RESULTS } from "SEARCH_TEXT_INPUT_DEBOUNCE_TIME";
import { MEDIA_MODAL_KEY } from "ME";
import { jsx } from "AgeVerificationModalEntryPoint";

let c10;
let c9;
let metroImportAll;
let unpackModuleId;
const require = arg1;
let c3 = importAllResult;
({ SearchListItemTypes: metroImportAll, MEDIA_NUM_COLUMNS: c9, MEDIA_ITEM_GAP_WIDTH: c10, SearchMediaTypes: unpackModuleId } = MessageEmbedTypes);
let closure_15 = [];
const memoResult = importAllResult.memo(function MediaScreen(searchContext) {
  let isFirstPageLoading;
  let isFocused;
  let isNextPageLoading;
  let width;
  searchContext = searchContext.searchContext;
  const tab = searchContext.tab;
  let dependencyMap;
  let searchMessages;
  let placeholderCount;
  let memo;
  let onPressMediaItem;
  let callback1;
  ({ isFocused, width } = searchContext);
  let obj = searchContext(15909);
  const contentContainerStyles = obj.useContentContainerStyles();
  const tmp2 = tab(15869)(width);
  dependencyMap = tmp2;
  searchMessages = searchContext(15914).useSearchMessages(searchContext, tab);
  const obj2 = searchContext(15914);
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
          if (!initialize.didAgree(channel.id)) {
            id = channel.id;
          }
        }
        return id;
      });
      found = mapped.filter((arg0) => null != arg0);
    }
    if (found == null) {
      found = outer1_15;
    }
    return found;
  }, items1);
  let obj3 = searchContext(589);
  obj = { searchContext, tab, placeholderHeight: tmp2, numColumns: closure_9 };
  const searchMessagesLoadingState = searchContext(15915).useSearchMessagesLoadingState(obj);
  placeholderCount = searchMessagesLoadingState.placeholderCount;
  const items2 = [searchMessages, searchContext, stateFromStoresArray];
  ({ isFirstPageLoading, isNextPageLoading } = searchMessagesLoadingState);
  memo = searchMessages.useMemo(() => {
    if (null != searchMessages) {
      let media = searchContext(_undefined[14]).getMedia(searchContext, tmp);
      const obj = searchContext(_undefined[14]);
    } else {
      media = outer1_12;
    }
    return media;
  }, items2);
  const items3 = [searchContext, tab];
  const callback = searchMessages.useCallback(() => {
    const nextMessages = tab(_undefined[14]).fetchNextMessages(searchContext, tab, () => {
      let obj = outer1_0(outer1_2[15]);
      if (obj.isModalOpen(outer1_13)) {
        let tmpResult = tmp(tmp2[16]);
        const messages = outer1_6.getMessages(tmpResult.getSearchTabFetchId(items, closure_1, outer1_7.getSearchResultsQuery(items)));
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
        const searchResultsQuery = outer1_7.getSearchResultsQuery(items);
        tmp4 = items;
      }
    });
  }, items3);
  let obj4 = searchContext(15915);
  onPressMediaItem = searchContext(15866).useOnPressMediaItem({ searchContext, allMediaResults: memo, onEndReached: callback, onEndReachedThreshold: 500 });
  const items4 = [onPressMediaItem, searchContext, searchMessages];
  callback1 = searchMessages.useCallback((media) => {
    media = media.media;
    let found;
    if (searchMessages != null) {
      found = searchMessages.find((id) => id.id === media.messageId);
    }
    let obj = searchContext(_undefined[19]);
    if (obj.shouldAgeVerifyForSearchMedia(media, found)) {
      obj = { entryPoint: null };
      obj[0] = tmp2(tmp3[21]).AgeVerificationModalEntryPoint.SEARCH_MEDIA_PREVIEW;
      const result = tab(tmp3[20]).showAgeVerificationGetStartedModal(obj);
      const obj4 = tab(tmp3[20]);
    } else {
      obj = { searchContext: null, channelId: null, messageId: null, index: null };
      obj[0] = media;
      ({ channelId: obj3[1], messageId: obj3[2] } = media);
      obj[3] = arg1;
      const result1 = tmp2(tmp3[22]).trackMessageItemPress(obj);
      onPressMediaItem(media, media.originView);
      const tmp2Result = tmp2(tmp3[22]);
    }
  }, items4);
  const items5 = [callback1, memo, tmp2, placeholderCount];
  const memo1 = searchMessages.useMemo(() => {
    let items = [];
    const item = memo.forEach((media, itemIndex) => {
      const items = itemIndex;
      let obj = { type: outer2_8.MEDIA, props: null };
      obj = {
        media,
        size: outer1_2,
        onPress(arg0) {
          return outer1_7(arg0, closure_0);
        },
        containerStyle: null
      };
      obj = { itemIndex, numItems: outer1_5.length, numColumns: outer2_9, spacing: outer2_10 - 2 };
      obj[3] = searchContext(table[14]).getMediaGridItemStyles(obj);
      obj[1] = obj;
      items.push(obj);
    });
    if (placeholderCount > 0) {
      let obj = { numColumns: null, numResults: null, placeholderCount: null };
      obj[0] = outer1_9;
      obj[1] = items.length;
      obj[2] = tmp2;
      const adjustedPlaceholderCount = searchContext(_undefined[23]).getAdjustedPlaceholderCount(obj);
      for (let num = 0; num < adjustedPlaceholderCount; num = num + 1) {
        obj = { type: null, key: null, props: null };
        let tmp3 = outer1_8;
        obj[0] = outer1_8.MEDIA_PLACEHOLDER;
        let _HermesInternal = HermesInternal;
        obj[1] = "media-placeholder-" + length + num;
        obj = { size: null, containerStyle: null };
        let tmp4 = _undefined;
        obj[0] = _undefined;
        let tmp5 = searchContext;
        let tmp6 = _undefined;
        let obj3 = searchContext(_undefined[14]);
        let obj1 = { itemIndex: null, numItems: null, numColumns: null, spacing: null };
        obj1[0] = length + num;
        let tmp7 = memo;
        obj1[1] = memo.length;
        let tmp8 = outer1_9;
        obj1[2] = outer1_9;
        let tmp9 = outer1_10;
        obj1[3] = outer1_10 - 2;
        obj[1] = obj3.getMediaGridItemStyles(obj1);
        obj[2] = obj;
        let arr = items.push(obj);
      }
      const obj5 = searchContext(_undefined[23]);
    }
    return items;
  }, items5);
  obj = { data: memo1, searchContext, tab, isFocused, contentContainerStyle: contentContainerStyles.mediaContentContainer, ItemSeparatorComponent: null, numColumns: null, isFirstPageLoading: null, isNextPageLoading: null };
  const obj6 = searchContext(15866);
  obj[5] = searchContext(15873).MediaVerticalSeparator;
  obj[6] = closure_9;
  obj[7] = isFirstPageLoading;
  obj[8] = isNextPageLoading;
  return jsx(tab(15916), { data: memo1, searchContext, tab, isFocused, contentContainerStyle: contentContainerStyles.mediaContentContainer, ItemSeparatorComponent: null, numColumns: null, isFirstPageLoading: null, isNextPageLoading: null });
});
let result = require("ensureGuildLoaded").fileFinishedImporting("modules/search/native/components/tabs/pages/messages/MediaScreen.tsx");

export default memoResult;